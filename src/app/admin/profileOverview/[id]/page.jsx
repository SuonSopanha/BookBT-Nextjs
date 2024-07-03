"use client";
import { useState, useEffect } from "react";

import { useParams } from "next/navigation";
import axios from "axios";

const fetchDriver = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/driver-details/` + id
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const ProfileOverview = () => {
  const { id } = useParams();
  console.log(id);

  const [Driver, setDriver] = useState({});
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchedDriver = async () => {
      const data = await fetchDriver(id);
      setDriver(data);
    };

    fetchedDriver();
  }, []);

  const handleApproved = async (id) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/approve-driver/${id}`
      );
      console.log(response.data);
      if (response.data.message === "Driver updated successfully") {
        window.location.href = "/admin/reqeustTable";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecline = async (id) => {
    try {
      console.log("Token:", token); // Log the token to verify it
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/driver/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
      if (response.data.message === "Driver deleted successfully") {
        window.location.href = "/admin/reqeustTable";
      }
    } catch (error) {
      console.log("Error:", error.response); // Log the error response
    }
  };

  const { driver, service, schedule, pricing } = Driver;

  if (!Driver) {
    <h1>Loading...</h1>;
  }
  return (
    <div>
      <main className="flex h-full overflow-hidden pt-16">
        <div className="flex-grow p-4 ">
          <div className="relative w-full mx-auto mt-6">
            <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 mb-4 overflow-hidden break-words bg-white border-0 dark:bg-slate-850 dark:shadow-dark-xl shadow-3xl rounded-2xl bg-clip-border">
              <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-auto max-w-full px-3">
                  <div className="relative inline-flex items-center justify-center text-white transition-all duration-200 ease-in-out text-base h-19 w-19 rounded-xl">
                    <img
                      src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?size=626&ext=jpg&ga=GA1.1.48835190.1718728664&semt=ais_user"
                      alt="profile_image"
                      className="w-16 h-16 shadow-2xl rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex-none w-auto max-w-full px-3 my-auto">
                  <div className="h-full">
                    <h5 className="mb-1">AdminDashboard</h5>
                  </div>
                </div>
              </div>
              <div class="flex w-full md:max-w-xl mx-4 mb-2 rounded shadow mt-4">
                <a
                  href="/admin"
                  aria-current="false"
                  class="w-full flex justify-center font-medium rounded-l px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                >
                  Overview
                </a>

                <a
                  href="/admin/reqeustTable"
                  aria-current="page"
                  class="w-full flex justify-center font-medium px-5 py-2 border-t border-b bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                >
                  Request
                </a>

                <a
                  href="/admin/manageDriver"
                  aria-current="false"
                  class="w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                >
                  Driver
                </a>

                <a
                  href="/admin/manageUser"
                  aria-current="false"
                  class="w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                >
                  User
                </a>

                <a
                  href="/admin/Booking"
                  aria-current="false"
                  class="w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                >
                  Booking
                </a>

                <a
                  href="/admin/Report"
                  aria-current="false"
                  class="w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                >
                  Report
                </a>
              </div>
            </div>
          </div>
          <div className="w-full p-6 mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-0">
                <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
                    <div className="flex items-center justify-between">
                      <p className="mb-0 /80">Driver and Service Info</p>
                      <div>
                        <button
                          onClick={() => handleApproved(driver?.id)}
                          type="button"
                          className="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleDecline(driver?.id)}
                          type="button"
                          className="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white   align-middle transition-all ease-in bg-gray-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex-auto p-6">
                    <p className="leading-normal uppercase dark:opacity-60 text-sm">
                      Driver Information
                    </p>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="username"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            First Name
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {driver?.firstName}
                          </span>
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="email"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Last Name
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {driver?.lastName}
                          </span>
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="first name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Date of Birth
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {driver?.dateOfBirth.slice(0, 10)}
                          </span>
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="last name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Gender
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {driver?.gender}
                          </span>
                        </div>
                      </div>

                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="last name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Contact Number
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {driver?.contactNumber}
                          </span>
                        </div>
                      </div>

                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="first name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Email
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {driver?.email}
                          </span>
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="last name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Address
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {driver?.address}
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

                    <p className="leading-normal uppercase dark:opacity-60 text-sm">
                      Sevice Info
                    </p>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="first name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Location
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {service?.location}
                          </span>
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="last name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Destination
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {service?.destination}
                          </span>
                        </div>
                      </div>

                      <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="city"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Base Fare
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {pricing?.baseFare} {pricing?.currencyType}
                          </span>
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="country"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Additional Charge
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {pricing?.additionalCharge} {pricing?.currencyType}
                          </span>
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="postal code"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Solo Charge
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {pricing?.soloCharge} {pricing?.currencyType}
                          </span>
                        </div>
                      </div>

                      <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                        <div className="mb-4">
                          <label
                            for="address"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Pricing Description
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {pricing?.description}
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

                    <p className="leading-normal uppercase dark:opacity-60 text-sm">
                      Schedule
                    </p>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="city"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Day of Week
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {schedule?.dayOfWeek}
                          </span>
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="country"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Flee Time
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {schedule?.departureTime}
                          </span>
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="postal code"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Arrive Time
                          </label>
                          <span className="text-gray-700 block w-full bg-white px-3 py-2 rounded-lg border border-solid border-gray-300">
                            {schedule?.arrivalTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 mt-6 shrink-0 md:w-4/12 md:flex-0 md:mt-0">
                <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <img
                    className="w-full rounded-t-2xl"
                    src={service?.vehiclePictureURL[0]}
                    alt="profile cover image"
                  />

                  <div className="flex-auto p-6 pt-0">
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full max-w-full px-3 flex-1-0">
                        <div className="flex justify-center flex-col mt-4 mx-6">
                          <div className="flex text-center items-center justify-between space-x-5">
                            <span className="leading-normal text-sm opacity-80">
                              Vehicle Type
                            </span>
                            <span className="font-bold text-lg">
                              {service?.vehicleType}
                            </span>
                          </div>
                          <div className="flex text-center items-center justify-between space-x-5">
                            <span className="leading-normal text-sm opacity-80">
                              Seats
                            </span>
                            <span className="font-bold text-lg">
                              {service?.maxSeat}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <h5 className="dark:text-white">
                        Mark Davis
                        <span className="font-light">, 35</span>
                      </h5>
                      <div className="mb-2 font-semibold leading-relaxed text-base dark:text-white/80 text-slate-700">
                        <i className="mr-2 dark:text-white ni ni-pin-3"></i>
                        Bucharest, Romania
                      </div>
                      <div className="mt-6 mb-2 font-semibold leading-relaxed text-base dark:text-white/80 text-slate-700">
                        <i className="mr-2 dark:text-white ni ni-briefcase-24"></i>
                        Solution Manager - Creative Tim Officer
                      </div>
                      <div className="dark:text-white/80">
                        <i className="mr-2 dark:text-white ni ni-hat-3"></i>
                        University of Computer Science
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="pt-4">
              <div className="w-full px-6 mx-auto">
                <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                  <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                    <div className="leading-normal text-center text-sm text-slate-500 lg:text-left">
                      © 2024 made with <i className="fa fa-heart"></i> by
                      <a
                        href="https://www.creative-tim.com"
                        className="font-semibold dark:text-white text-slate-700"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                      for a better web.
                    </div>
                  </div>
                  <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                    <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com"
                          className="block px-4 pt-0 pb-1 font-normal transition-colors ease-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          Creative Tim
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/presentation"
                          className="block px-4 pt-0 pb-1 font-normal transition-colors ease-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://creative-tim.com/blog"
                          className="block px-4 pt-0 pb-1 font-normal transition-colors ease-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/license"
                          className="block px-4 pt-0 pb-1 pr-0 font-normal transition-colors ease-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileOverview;
