"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Toast from "@/components/toast/toast";

const RequestTable = () => {
  const [Driver, setDriver] = useState([]);
  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
  const [suspendReason, setSuspendReason] = useState("");
  const [suspendDuration, setSuspendDuration] = useState("");
  const [supendDriverID, setsupendDriverID] = useState("");

  const [toast, setToast] = useState(null);

  const showToast = (status, message) => {
    setToast({ status, message });
  };

  const closeToast = () => {
    setToast(null);
  };

  useEffect(() => {
    const fetchDriverRequest = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/driver`
        );
        const data = response.data;
        console.log(data);
        setDriver(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDriverRequest();
  }, []);

  const handleView = (id) => {
    window.location.href = "/admin/profileOverview/" + id;
  };

  const handleSuspend = (id) => {
    setsupendDriverID(id);
    setIsSuspendModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSuspendModalOpen(false);
  };

  const handleSubmitReport = async () => {
    // Handle the report submission logic here
    const token = sessionStorage.getItem("token");

    const reportData = {
      DriverId: supendDriverID,
      reason: suspendReason,
      duration: suspendDuration,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/suspend-driver/${supendDriverID}`,
        reportData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log(response);

      if (response.data.message === "Driver suspended successfully") {
        showToast("success", response.data.message);
        setIsSuspendModalOpen(false);
      } else {
        showToast("error", response.data.error);
        setIsSuspendModalOpen(false);
      }
    } catch (e) {
      console.log(e);
      showToast("error", "An error occurred");
      setIsSuspendModalOpen(false);
    }
  };

  const handleUnsuspendDriver = async (id) => {
    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/unsuspend-driver/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log(response);

      if (response.data.message === "Driver unsuspended successfully") {
        showToast("success", response.data.message);
        setIsSuspendModalOpen(false);
      } else {
        showToast("error", response.data.error);
        setIsSuspendModalOpen(false);
      }
    } catch (e) {
      console.log(e);
      showToast("error", "An error occurred");
      setIsSuspendModalOpen(false);
    }
  };

  return (
    <div>
      <main className="flex h-full overflow-hidden pt-8">
        <div className="flex-grow p-4">
          <div className="w-full px-6 py-6 mx-auto">
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
            <div className="flex flex-wrap -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <h6 class>Driver Request</h6>
                  </div>
                  <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                      <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 ">
                        <thead className="align-bottom">
                          <tr>
                            <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">
                              Driver
                            </th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">
                              Address
                            </th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">
                              contactNumber
                            </th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">
                              Request Register
                            </th>
                            <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 tracking-none whitespace-nowrap  opacity-70">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {Driver.map((Driver) => (
                            <tr key={Driver.id}>
                              <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                <div className="flex px-2 py-1">
                                  <div>
                                    <image
                                      src={Driver.photoURL}
                                      className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                      alt="user1"
                                    />
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <h6 className="mb-0 text-sm leading-normal">
                                      {" "}
                                      <a href="adminTaxiProfileVeiw.html">
                                        {Driver.firstName} {Driver.lastName}
                                      </a>
                                    </h6>
                                    <p className="mb-0 text-xs leading-tight dark:opacity-80 ">
                                      {Driver.email}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                <p className="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                  {Driver.address}
                                </p>
                              </td>
                              <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                <p className="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                  {Driver.contactNumber}
                                </p>
                              </td>
                              <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                <span className="text-xs font-semibold leading-tight dark:opacity-80 ">
                                  {Driver.createdAt.slice(0, 10)}
                                </span>
                              </td>
                              <td className="p-1 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center space-x-5">
                                <button
                                  onClick={() => handleView(Driver.id)}
                                  className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-blue-500 hover:bg-blue-700 py-2 px-4"
                                >
                                  {" "}
                                  View{" "}
                                </button>
                                {Driver.isSuspended === false ? (
                                  <button
                                    onClick={() => handleSuspend(Driver.id)}
                                    className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-red-500 hover:bg-red-700 py-2 px-4"
                                  >
                                    {" "}
                                    Suspend{" "}
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => handleUnsuspendDriver(Driver.id)}
                                    className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-green-500 hover:bg-green-700 py-2 px-4"
                                  >
                                    {" "}
                                    Unsuspend{" "}
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isSuspendModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                  <h2 className="text-xl font-bold mb-4 text-gray-800">
                    Suspend Driver #{supendDriverID}
                  </h2>
                  <label className="block mb-2 font-medium text-gray-700">
                    Suspend Duration
                  </label>
                  <select
                    value={suspendDuration}
                    onChange={(e) => setSuspendDuration(e.target.value)}
                    className="w-full p-2 mb-4 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Select Suspend Duration</option>
                    <option value="1">24 Hours</option>
                    <option value="3">3 Days</option>
                    <option value="7">7 Days</option>
                    <option value="30">Permanent</option>
                  </select>
                  <label className="block mb-2 font-medium text-gray-700">
                    Suspend Reason
                  </label>
                  <textarea
                    value={suspendReason}
                    onChange={(e) => setSuspendReason(e.target.value)}
                    className="w-full p-2 mb-4 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    rows="4"
                  ></textarea>
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={handleCloseModal}
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      Cancel
                    </button>
                    {}
                    <button
                      onClick={handleSubmitReport}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      Suspend
                    </button>
                  </div>
                </div>
              </div>
            )}

            {toast && (
              <div className="fixed bottom-4 right-4">
                <Toast
                  status={toast.status}
                  message={toast.message}
                  onClose={closeToast}
                />
              </div>
            )}

            <footer className="pt-4">
              <div className="w-full px-6 mx-auto">
                <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                  <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                    <div className="text-sm leading-normal text-center text-slate-500 lg:text-left">
                      2024 made with <i className="fa fa-heart"></i> by
                      <a
                        href="https://www.creative-tim.com"
                        className="font-semibold text-slate-700 dark:text-white"
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
                          className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          Creative Tim
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/presentation"
                          className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://creative-tim.com/blog"
                          className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/license"
                          className="block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-in-out text-slate-500"
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

export default RequestTable;
