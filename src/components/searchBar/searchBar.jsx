"use client";

import { useState } from "react";

const SearchBar = () => {
  const [selectedService, setSelectedService] = useState("TAXI Service");
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [options, setOptions] = useState({
    Affordable: false,
    Convienice: false,
    HighRating: false,
    Popular: false,
    NearBy: false,
  });

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search with form data
    console.log("Search submitted:", {
      selectedService,
      startLocation,
      endLocation,
      startDate,
      startTime,
      options,
    });
  };

  return (
    <div className="search-bar mt-20 -mb-20">
      <form className="max-w-xl mx-auto p-4 md:p-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="bg-black bg-opacity-50 px-5 py-5 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center mb-5 space-y-4 md:space-y-0 md:space-x-4">
              <input
                id="yellow-radio"
                type="radio"
                value="TAXI Service"
                name="colored-radio"
                checked={selectedService === "TAXI Service"}
                onChange={handleServiceChange}
                className="hidden"
              />
              <label
                htmlFor="yellow-radio"
                className="flex items-center cursor-pointer"
              >
                <div
                  className={`mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center ${
                    selectedService === "TAXI Service"
                      ? "bg-yellow-400"
                      : "bg-black"
                  }`}
                >
                  <div
                    id="custom-radio-yellow"
                    className={`w-3 h-3 rounded-full transition duration-200 ease-in-out ${
                      selectedService === "TAXI Service" ? "" : "hidden"
                    }`}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  TAXI Service
                </span>
              </label>
              <input
                id="red-radio"
                type="radio"
                value="BUS Service"
                name="colored-radio"
                checked={selectedService === "BUS Service"}
                onChange={handleServiceChange}
                className="hidden"
              />
              <label
                htmlFor="red-radio"
                className="flex items-center cursor-pointer"
              >
                <div
                  className={`mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center ${
                    selectedService === "BUS Service"
                      ? "bg-yellow-400"
                      : "bg-black"
                  }`}
                >
                  <div
                    id="custom-radio-red"
                    className={`w-3 h-3 rounded-full transition duration-200 ease-in-out ${
                      selectedService === "BUS Service" ? "" : "hidden"
                    }`}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  BUS Service
                </span>
              </label>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-1">
              <input
                type="text"
                id="start-location"
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
                className="text-sm font-medium block w-64 p-2.5 sm:w-72 md:w-32 lg:w-64 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-s-lg focus:outline-none focus:border-yellow-500"
                placeholder="Start Location"
                required
              />
              <button
                type="button"
                className="p-2.5 text-sm font-medium sm:w-72 md:w-16 lg:w-16 bg-gray-900 bg-opacity-50 text-yellow-300 border-2 border-yellow-300 hover:bg-yellow-500 hover:bg-opacity-30 hover:text-yellow-600 focus:outline-none focus:bg-yellow-400 focus:bg-opacity-50 focus:border-yellow-600"
              >
                <svg
                  className="w-4 h-4 inline-block text-white"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 16 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="end-location"
                value={endLocation}
                onChange={(e) => setEndLocation(e.target.value)}
                className="text-sm font-medium block w-64 p-2.5 sm:w-72 md:w-32 lg:w-64 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-e-lg focus:outline-none focus:border-yellow-500"
                placeholder="End Location"
                required
              />
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="text-sm font-medium block p-2.5 sm:w-72 md:w-36 lg:w-36 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-s-lg ml-2 focus:outline-none focus:border-yellow-500"
                required
              />
              <input
                type="time"
                id="start-time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="text-sm font-medium block p-2.5 sm:w-72 md:w-24  lg:w-24 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-e-lg  focus:outline-none focus:border-yellow-500"
                required
              />
              <button
                type="submit"
                className="ml-5 p-3 text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transform transition-transform hover:scale-105 relative overflow-hidden w-36"
              >
                <span className="relative z-10">Search</span>
                <span className="absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-0 mix-blend-multiply hover:opacity-50 transition-opacity duration-300"></span>
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center mt-5 space-y-4 md:space-y-0 md:space-x-4">
              <span className="text-base font-medium text-gray-900 dark:text-gray-300 mr-5">
                More options :
              </span>
              <label
                htmlFor="Affordable"
                className="relative mr-2 text-sm font-medium sm:w-64 md:w-32 lg:w-32 text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
              >
                <input
                  type="checkbox"
                  id="Affordable"
                  name="Affordable"
                  checked={options.Affordable}
                  onChange={handleCheckboxChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                  <svg
                    className={`w-5 h-5 text-yellow-300 ${
                      options.Affordable ? "" : "hidden"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                    />
                  </svg>
                </div>
                Affordable
              </label>
              <label
                htmlFor="Convienice"
                className="relative mr-2 text-sm font-medium sm:w-64 md:w-32 lg:w-32 text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
              >
                <input
                  type="checkbox"
                  id="Convienice"
                  name="Convienice"
                  checked={options.Convienice}
                  onChange={handleCheckboxChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                  <svg
                    className={`w-5 h-5 text-yellow-300 ${
                      options.Convienice ? "" : "hidden"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                    />
                  </svg>
                </div>
                Convienice
              </label>
              <label
                htmlFor="HighRating"
                className="relative mr-2 text-sm font-medium sm:w-64 md:w-32 lg:w-32 text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
              >
                <input
                  type="checkbox"
                  id="HighRating"
                  name="HighRating"
                  checked={options.HighRating}
                  onChange={handleCheckboxChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                  <svg
                    className={`w-5 h-5 text-yellow-300 ${
                      options.HighRating ? "" : "hidden"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                    />
                  </svg>
                </div>
                High Rating
              </label>
              <label
                htmlFor="Popular"
                className="relative mr-2 text-sm font-medium sm:w-64 md:w-32 lg:w-32 text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
              >
                <input
                  type="checkbox"
                  id="Popular"
                  name="Popular"
                  checked={options.Popular}
                  onChange={handleCheckboxChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                  <svg
                    className={`w-5 h-5 text-yellow-300 ${
                      options.Popular ? "" : "hidden"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                    />
                  </svg>
                </div>
                Popular
              </label>
              <label
                htmlFor="NearBy"
                className="relative mr-2 text-sm font-medium sm:w-64 md:w-32 lg:w-32 text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
              >
                <input
                  type="checkbox"
                  id="NearBy"
                  name="NearBy"
                  checked={options.NearBy}
                  onChange={handleCheckboxChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                  <svg
                    className={`w-5 h-5 text-yellow-300 ${
                      options.NearBy ? "" : "hidden"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                    />
                  </svg>
                </div>
                Near By
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
