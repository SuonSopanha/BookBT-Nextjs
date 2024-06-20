"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

const getServices = async (id) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/service/" + id
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const BookingForm = () => {
  const { id } = useParams();
  const [serviceDetail, setServiceDetail] = useState(null);
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    date: "",
    time: "",
    contactNumber: "",
    description: "",
    numberOfSeats: 0,
    selectedSeat: "",
  });
  const [dayOfWeek, setDayOfWeek] = useState("");

  useEffect(() => {
    const fetchServiceDetail = async () => {
      const data = await getServices(id);
      setServiceDetail(data);
    };

    fetchServiceDetail();
  }, [id]);

  if (!serviceDetail) {
    return <div>Loading...</div>;
  }

  console.log(serviceDetail);

  const { service, driver, schedule, pricing } = serviceDetail;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      const date = new Date(value);
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayName = days[date.getUTCDay()];
      setDayOfWeek(dayName);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      serviceId: service.id,
      pickupLocation: formData.pickupLocation,
      dropoffLocation: formData.dropoffLocation,
      pickupTime: formData.time,
      bookingStatus: "pending",
      bookingDate: formData.date,
      seatType: formData.selectedSeat,
      userContactNumber: formData.contactNumber,
      seatAmount: formData.numberOfSeats,
      totalFare:
        formData.numberOfSeats * pricing.baseFare + pricing.currencyType,
      description: formData.description,
    };

    const token = sessionStorage.getItem("token");

    console.log(bookingData);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/booking",
        bookingData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.data.message === "Booking created successfully") {
        const notificationData = {
          driverId: driver.id,
          bookingId: response.data.booking.id,
          notificationType: "ride_request",
          notificationMessage: "User has made booking request for your service",
          notificationStatus: "sent",
          notificationDate: new Date(Date.now()),
        };

        try {
          const notificationResponse = await axios.post(
            "http://localhost:8000/api/v1/notification",
            notificationData,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );

          if(notificationResponse.data.message === "Notification created successfully"){
            console.log(notificationResponse);
            window.location.href = "/booking/reciept/" +  response.data.booking.id
          }


        } catch (e) {
          console.error(e);
        }

      }

      // Redirect to another page or show a success message
    } catch (error) {
      console.error("Error confirming booking:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="h-28"></div>
      <div className="relative overflow-hidden">
        <div className="relative bg-none px-2 py-10 md:px-0">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex flex-col justify-center md:flex-row md:space-x-20 md:space-y-0"
          >
            <div className="relative w-full rounded-3xl bg-amber-50 md:w-1/2">
              <div className="pb-12">
                <div className="flex w-full items-center justify-center rounded-full bg-yellow-300 p-2">
                  <p className="ml-2 text-2xl font-bold text-indigo-900">
                    Booking Form
                  </p>
                </div>

                <div className="mt-8 pt-4 text-zinc-600">
                  <div className="flex w-full px-4 md:px-28">
                    <div className="w-full rounded-xl border-2 border-gray-400 px-2 py-4">
                      <div className="pl-4">
                        <div className="flex">
                          <p>ServiceID :</p>
                          <p className="ml-2">{service.id}</p>
                        </div>
                        <p>
                          {service.location} - {service.destination}
                        </p>
                        <div className="flex">
                          <p>Driver :</p>
                          <p className="ml-2">
                            {driver.firstName} {driver.lastName}
                          </p>
                        </div>
                        <div className="flex">
                          <p>Type :</p>
                          <p className="ml-2">{service.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-28">
                    <div className="w-full rounded-xl px-2 py-4">
                      <div>
                        <p className="py-2 text-sm font-medium">
                          Plan your visit and book your services with ease
                        </p>
                      </div>
                      <div className="flex space-x-4 py-5">
                        <div className="w-full">
                          <input
                            type="text"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            className="w-full rounded-lg border-2 border-gray-400 bg-gray-200 p-2 align-middle font-medium"
                            placeholder="PickUp Location"
                          />
                        </div>
                        <div className="w-full">
                          <input
                            type="text"
                            name="dropoffLocation"
                            value={formData.dropoffLocation}
                            onChange={handleChange}
                            className="w-full rounded-lg border-2 border-gray-400 bg-gray-200 p-2 align-middle font-medium"
                            placeholder="Dropoff Location"
                          />
                        </div>
                      </div>

                      <div className="flex space-x-4 ">
                        <div className="w-full">
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full rounded-lg border-2 border-gray-400 bg-gray-200 p-2 align-middle font-medium"
                            placeholder="dd/mm/yy"
                          />
                        </div>
                        <div className="w-full">
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full rounded-lg border-2 border-gray-400 bg-gray-200 p-2 align-middle font-medium"
                          >
                            <option value="" disabled>
                              Select Departure Time
                            </option>
                            {schedule
                              .filter(
                                (scheduleItem) =>
                                  scheduleItem.dayOfWeek === dayOfWeek
                              )
                              .map((filteredSchedule) => (
                                <option value={filteredSchedule.departureTime}>
                                  {filteredSchedule.departureTime.slice(0, 5)}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>

                      <div className="flex w-full space-x-4 py-5">
                        <div className="w-full space-y-4">
                          <input
                            type="text"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="w-full rounded-lg border-2 border-gray-400 bg-gray-200 p-2 align-middle font-medium"
                            placeholder="Contact number"
                          />
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            cols="30"
                            rows="10"
                            placeholder="Description"
                            className="h-20 w-full rounded-lg border-2 border-gray-400 bg-gray-200 p-2 font-medium md:h-30"
                          ></textarea>
                        </div>
                      </div>
                      <div className="spa h-full w-full">
                        <div className="w-full rounded-lg shadow-lg bg-gray-200 p-4">
                          <div className="justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                            <div className="flex items-center space-x-4 ml-4">
                              <p>Number of seats</p>
                              <input
                                type="number"
                                name="numberOfSeats"
                                value={formData.numberOfSeats}
                                onChange={handleChange}
                                className="h-6 w-16 rounded-full border-2 border-gray-400 bg-white p-2 text-center font-medium"
                                placeholder="0"
                              />
                            </div>

                            <div className="flex items-center w-full md:w-auto py-5 space-x-4">
                              <p>Select your seats</p>
                              <div className="mt-2">
                                <select
                                  name="selectedSeat"
                                  value={formData.selectedSeat}
                                  onChange={handleChange}
                                  className="h-10 w-32 rounded-md border-2 border-black bg-white text-sm font-medium"
                                >
                                  <option value="" disabled>
                                    Select a seat
                                  </option>
                                  <option value="front">Front</option>
                                  <option value="middle">Middle</option>
                                  <option value="back">Back</option>
                                  <option value="window">Window</option>
                                  <option value="aisle">Aisle</option>
                                  <option value="any">Any</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-full items-center justify-center mt-4">
                            <button
                              type="submit"
                              className="relative flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-sm font-medium text-black shadow-lg hover:border-2 hover:border-zinc-400 hover:shadow-none"
                            >
                              Confirm Booking
                              <div className="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-200 bg-opacity-80"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
