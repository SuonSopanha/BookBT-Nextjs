"use client";
import React, { useState } from "react";
import axios from "axios";

const ServiceRegister = () => {
  const [formData, setFormData] = useState({
    location: "",
    destination: "",
    vehicleType: "",
    maxSeat: "",
    soloRide: false,
    category: "bus",
    baseFare: "",
    additionalCharges: "",
    soloCharges: "",
    pricingDescription: "",
    currencyType: "",
    dayOfWeek: "",
    fleetTime: "",
    arriveTime: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = async () => {
    const fileInput = document.getElementById("profile-image");
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "BookingBT");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dfevo0hzt/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setImageUrl(data.secure_url);
        return data.secure_url;
      } else {
        console.error("Failed to upload image to Cloudinary");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const vehiclePictureURL = await handleFileUpload();

    const completeFormData = { ...formData, imageUrl };

    console.log(completeFormData);
    const token = sessionStorage.getItem("token");

    try {
      const service = await axios.post(
        `${process.env.API_URL}/api/v1/service`,
        {
          location: formData.location,
          destination: formData.destination,
          vehicleType: formData.vehicleType,
          maxSeat: formData.maxSeat,
          vehiclePictureURL: [vehiclePictureURL],
          category: formData.category,
          soloRideOption : formData.soloRide,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

     

      if (service.data.message === "Service created successfully") {
        const serviceID = service.data.service.id;

        try {
          const pricing = await axios.post(
            `${process.env.API_URL}/api/v1/pricing`,
            {
              serviceId: serviceID,
              baseFare: formData.baseFare,
              additionalCharge: formData.additionalCharges,
              soloCharge: formData.soloCharges,
              description: formData.pricingDescription,
              currencyType: formData.currencyType,
            },
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );

          const scheduled = await axios.post(
            `${process.env.API_URL}/api/v1/schedule`,
            {
              serviceId: serviceID,
              dayOfWeek: formData.dayOfWeek,
              departureTime: formData.fleetTime,
              arrivalTime: formData.arriveTime,
            },
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
          
          window.location.href = "/"
        } catch (e) {
          console.log(e);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-start">
      <h1 className="text-3xl text-gray-700 pt-20 pb-8">Service Information</h1>
      <hr className="-mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20" />
      <div className="py-8">
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4 px-1 mt-8">
            <span className="flex justify-center items-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
              1
            </span>
            <span className="text-gray-700 font-bold">Vehicle Information</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
              <label className="text-gray-600 font-light">location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your Destination"
                className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
              <label className="text-gray-600 font-light">Destination</label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Enter your Destination"
                className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
              <label className="text-gray-600 font-light">Vehicle type</label>
              <input
                type="text"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                placeholder="Enter your Vehicle type"
                className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
              <label className="text-gray-600 font-light">Max Seat</label>
              <input
                type="number"
                name="maxSeat"
                value={formData.maxSeat}
                onChange={handleChange}
                placeholder="Enter your Vehicle Count"
                className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
          </div>
          <div className="flex flex-wrap mt-4 space-y-4 sm:space-y-0">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pr-4">
              <label className="text-gray-600 font-light">
                Solo Ride Options
              </label>
              <div className="mt-2 flex items-center">
                <input
                  type="checkbox"
                  id="soloRide"
                  name="soloRide"
                  value={formData.soloRide}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="soloRide" className="text-gray-700">
                  Solo Ride
                </label>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="text-gray-600 font-light">Category</label>
              <div className="mt-2">
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="categoryBus"
                    name="category"
                    value="bus"
                    checked={formData.category === "bus"}
                    onChange={handleChange}
                    className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="categoryBus" className="text-gray-700">
                    Bus
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="categoryTaxi"
                    name="category"
                    value="taxi"
                    checked={formData.category === "taxi"}
                    onChange={handleChange}
                    className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="categoryTaxi" className="text-gray-700">
                    Taxi
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap m-8">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Vehicle Picture
                </label>
                <label
                  htmlFor="profile-image"
                  className="w-64 flex flex-col items-center justify-center bg-slate-100 border-dashed border-2 border-gray-400 rounded-sm cursor-pointer hover:border-blue-500 hover:bg-blue-300 h-32 relative"
                >
                  <input
                    id="profile-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  ></input>
                  {!imagePreview && (
                    <span className="text-gray-600 font-bold py-2 px-4 hover:text-blue-700">
                      add +
                    </span>
                  )}
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      className="w-full h-full object-fit rounded-sm"
                      alt="Preview"
                    ></img>
                  )}
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-4">
            <div className="flex mb-4 px-1 mt-8">
              <span className="flex justify-center items-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
                2
              </span>
              <span className="text-gray-700 font-bold">
                Pricing Information
              </span>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
                <label className="text-gray-600 font-light">Base Fare</label>
                <input
                  type="number"
                  name="baseFare"
                  value={formData.baseFare}
                  onChange={handleChange}
                  placeholder="Enter your Base Fare"
                  className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
                ></input>
              </div>
              <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
                <label className="text-gray-600 font-light">
                  Additional charges
                </label>
                <input
                  type="number"
                  name="additionalCharges"
                  value={formData.additionalCharges}
                  onChange={handleChange}
                  placeholder="Enter your Additional charges"
                  className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
                ></input>
              </div>
              <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
                <label className="text-gray-600 font-light">Solo Charges</label>
                <input
                  type="number"
                  name="soloCharges"
                  value={formData.soloCharges}
                  onChange={handleChange}
                  placeholder="Enter your Additional charges"
                  className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
                ></input>
              </div>
              <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
                <label className="text-gray-600 font-light">
                  Pricing Description
                </label>
                <input
                  type="text"
                  name="pricingDescription"
                  value={formData.pricingDescription}
                  onChange={handleChange}
                  placeholder="Enter your Pricing Description"
                  className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
                ></input>
              </div>
              <div className="w-full sm:w-1/2">
                <label className="text-gray-600 font-light">Currency</label>
                <div className="mt-2">
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      id="KHR"
                      name="currencyType"
                      value="KHR"
                      checked={formData.currencyType === "KHR"}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="KHR" className="text-gray-700">
                      KHR
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="USD"
                      name="currencyType"
                      value="USD"
                      checked={formData.currencyType === "USD"}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="USD" className="text-gray-700">
                      USD
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <div className="flex mb-4 px-1 mt-8">
              <span className="flex justify-center items-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
                3
              </span>
              <span className="text-gray-700 font-bold">
                Scheduled Information
              </span>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/3 mb-4 pr-0 sm:pr-4">
                <label className="text-gray-600 font-light">Day of week</label>
                <select
                  name="dayOfWeek"
                  value={formData.dayOfWeek}
                  onChange={handleChange}
                  className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
                >
                  <option value="" disabled selected hidden>
                    Enter your Day of week
                  </option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
              <div className="w-full sm:w-1/3 mb-4 pr-0 sm:pr-4">
                <label className="text-gray-600 font-light">Fleet time</label>
                <input
                  type="time"
                  name="fleetTime"
                  value={formData.fleetTime}
                  onChange={handleChange}
                  placeholder="Enter your Fleet time"
                  className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
                ></input>
              </div>
              <div className="w-full sm:w-1/3 mb-4 pr-0 sm:pr-4">
                <label className="text-gray-600 font-light">Arrive time</label>
                <input
                  type="time"
                  name="arriveTime"
                  value={formData.arriveTime}
                  onChange={handleChange}
                  placeholder="Enter arrive time"
                  className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
                ></input>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full sm:w-1/5 lg:w-1/5 h-16 mt-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceRegister;
