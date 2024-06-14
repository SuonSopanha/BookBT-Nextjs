"use client";
import React, { useState } from "react";
import axios from "axios";

const UpdateProfile = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");

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
        setImageURL(data.secure_url);
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
    const uploadedImageURL = await handleFileUpload();

    if (!uploadedImageURL) {
      console.error('Image upload failed. Form submission aborted.');
      return;
    }

    const profileData = {
      dateOfBirth : dob,
      gender,
      phoneNumber : contactNumber,
      address,
      photoURL : uploadedImageURL,
    };

    const token = sessionStorage.getItem('token');

    try {
      
      const response = await axios.post("http://localhost:8000/api/v1/user/addInfo", profileData,{
        headers: {
          Authorization: "Bearer " + token 
        },
      });


      if(response.data.message === "User information updated successfully") {
        window.location.href = '/user';
        
      }

    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <div className="bg-white mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-start">
        <h1 className="text-3xl text-gray-700 pt-20 pb-8">User Information</h1>
        <hr className="-mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20" />
        <div className="py-8">
          <div className="flex mb-4 px-1 ">
            <span className="flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
              1
            </span>
            <span className="text-gray-700 font-bold">
              Personal Information
            </span>
          </div>
          <div className="flex flex-wrap m-8">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Add Profile Pic
              </label>
              <label
                htmlFor="profile-image"
                className="w-32 flex flex-col items-center justify-center bg-slate-100 border-dashed border-2 border-gray-400 rounded-full cursor-pointer hover:border-blue-500 hover:bg-blue-300 h-32 relative"
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
                    className="w-full h-full object-fit rounded-full"
                    alt="Preview"
                  ></img>
                )}
              </label>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-2/4 pl-0 sm:pl-4 mb-4 sm:mb-0">
              <label className="text-gray-600 font-light">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div className="w-full sm:w-2/4 pl-0 sm:pl-4">
              <label className="text-gray-600 font-light">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              >
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap mt-4 ml-3">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
              <label className="text-gray-600 font-light">Contact Number</label>
              <input
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Enter your Contact Number"
                className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
              <label className="text-gray-600 font-light">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your Address"
                className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleSubmit}
              className="w-full sm:w-1/5 lg:w-1/5 h-16 mt-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
