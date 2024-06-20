"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const BusProfile = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState({});
  const [services, setServices] = useState([]);
  const [booking, setBooking] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); // Add state for current page
  const bookingsPerPage = 5; // Set bookings per page

  const token = sessionStorage.getItem("token");
  const getDriver = async (id) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/driver/" + id,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response.data;
    } catch (e) {
      console.log("Error getting driver");
    }
  };

  const getServices = async (id) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/driverService",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response.data;
    } catch (e) {
      console.log("Error getting driver");
    }
  };

  const getBooking = async (id) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/driver-booking/" + id,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response.data;
    } catch (e) {
      console.log("Error getting driver");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const driver = await getDriver(id);
      setDriver(driver);
      const services = await getServices(id);
      setServices(services);
      const booking = await getBooking(id);
      setBooking(booking);
    };

    fetchData();
  }, [id]);

  // Calculate the current bookings to display
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = booking?.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="relative">
        <div className="relative py-4">
          <div className="mx-auto flex flex-col justify-center space-y-4 p-4 md:flex-row md:space-x-5 md:space-y-0">
            <div className="relative rounded-lg bg-white">
              <div className="flex bg-slate-600 h-auto w-full items-center justify-center rounded-t-lg bg-slate-fw-full0 object-cover text-center align-middle font-medium text-slate-300">
                <img
                  src={driver?.photoURL}
                  className="h-80 w-full rounded-t-lg object-cover"
                />
              </div>
              <div className="top-fw-full m-4 text-xl font-bold text-black">
                <div className="w-48 bg-slate-fw-full0 hover:border-b-2 focus:bg-Add focus:outline-Add">
                  {driver?.firstName} {driver?.lastName}
                </div>
              </div>
              <div className="m-4 border-b-2 border-zinc-400 pb-12">
                <div className="ml-0.5 flex items-center">
                  <img
                    width="28"
                    height="24"
                    src="https://img.icons8.com/windows/32/FAB005/gender-neutral-user.png"
                    alt="gender-neutral-user"
                  />
                  <div className="ml-2 font-medium hover:border-b-2 focus:bg-Add focus:outline-Add">
                    {driver?.email}
                  </div>
                </div>
                <div className="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/home--v2.png"
                    alt="home--v2"
                  />
                  <div className="ml-3 font-medium hover:border-b-2 focus:bg-Add focus:outline-Add">
                    {driver?.address}
                  </div>
                </div>
                <div className="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/iphone.png"
                    alt="iphone"
                  />
                  <div className="ml-3 font-medium hover:border-b-2 focus:bg-Add focus:outline-Add">
                    {driver?.contactNumber}
                  </div>
                </div>
              </div>

              <div className="m-2 flex items-center justify-center">
                <a href="/bus-feedback">
                  <button className=" font-medium hover:text-yellow-300">
                    View Feedback
                  </button>
                </a>
              </div>
              <div className="m-2 flex items-center justify-center">
                <button
                  onClick={() => {
                    window.location.href =
                      "/user/editProfile";
                  }}
                  className="h-10 w-32 rounded-xl border-2 border-zinc-fw-full0 hover:bg-yellow-300"
                >
                  <p className="text-lg font-bold text-yellow-400 hover:text-white">
                    Edit Profile
                  </p>
                </button>
              </div>
              <div className="m-2 flex items-center justify-center">
                <button
                  onClick={() => {
                    window.location.href =
                      "/services/register";
                  }}
                  className="h-10 w-32 rounded-xl border-2 border-zinc-fw-full0 hover:bg-yellow-300"
                >
                  <p className="text-sm font-bold text-yellow-400 hover:text-white">
                    Add New Service
                  </p>
                </button>
              </div>
            </div>

            <div className="relative w-full sm:w-1/2 rounded-lg bg-white shadow-lg">
              <div className="m-4 pb-12">
                {/* Taxi Provider Profile Section */}
                <div className="ml-0.5 flex items-center">
                  <p className="ml-2 text-xl font-bold text-gray-700">
                    Taxi Provider Profile
                  </p>
                </div>
                <div className="my-3 ml-1 flex">
                  <div className="w-full overflow-x-auto">
                    <table className="bg-white w-full table-fixed text-sm shadow-md rounded-lg overflow-hidden">
                      <thead className="bg-blue-900 text-white">
                        <tr>
                          <th className="p-3">Location</th>
                          <th className="p-3">Destination</th>
                          <th className="p-3">Vehicle</th>
                          <th className="p-3">Max Seat</th>
                          <th className="p-3">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {/* Example rows - replace these with dynamic data */}
                        {services.map((service) => (
                          <tr key={service.id} className="hover:bg-slate-100">
                            <td className="p-3 text-center">
                              {service.location}
                            </td>
                            <td className="p-3 text-center">
                              {service.destination}
                            </td>
                            <td className="p-3 text-center">
                              {service.category}
                            </td>
                            <td className="p-3 text-center">
                              {service.maxSeat}
                            </td>
                            <td className="p-3 text-center flex">
                              <button
                                onClick={() => {
                                  window.location.href =
                                    "/services/detail/" +
                                    service.id;
                                }}
                                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                              >
                                View
                              </button>
                              <button
                                onClick={() => {
                                  window.location.href =
                                    "/services/edit/" +
                                    service.id;
                                }}
                                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                              >
                                Edit
                              </button>
                            </td>
                          </tr>
                        ))}

                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Booking Section */}
                <div className="ml-0.5 flex items-center mt-6 border-t-4">
                  <p className="ml-2 text-xl font-bold text-gray-700">
                    Booking
                  </p>
                </div>
                <div className="my-3 ml-1 flex">
                  <div className="w-full overflow-x-auto">
                    <table className="bg-white w-full table-fixed text-sm shadow-md rounded-lg overflow-hidden">
                      <thead className="bg-blue-900 text-white">
                        <tr>
                          <th className="p-3">User</th>
                          <th className="p-3">Service</th>
                          <th className="p-3">Date</th>
                          <th className="p-3">Status</th>
                          <th className="p-3">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {/* Example rows - replace these with dynamic data */}

                        {currentBookings.map((booking) => (
                          <tr className="hover:bg-slate-100">
                            <td className="p-3 text-center">
                              {booking.user.fullName}
                            </td>
                            <td className="p-3 text-center">
                              {booking.service.location}{" "}
                              {booking.service.destination}
                            </td>
                            <td className="p-3 text-center">
                              {booking.bookingDate.slice(0, 10)}{" "}
                              {booking.pickupTime.slice(0, 5)}
                            </td>
                            <td className="p-3 text-center">
                              {booking.bookingStatus}
                            </td>
                            <td className="p-3 text-center">
                              <button
                                onClick={() => {
                                  window.location.href =
                                    "/booking/request/" +
                                    booking.id;
                                }}
                                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))}

                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Pagination */}
                <div className="flex justify-center mt-4">
                  {[
                    ...Array(
                      Math.ceil(booking.length / bookingsPerPage)
                    ).keys(),
                  ].map((number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number + 1)}
                      className={`px-4 py-2 mx-1 border rounded ${
                        currentPage === number + 1
                          ? "bg-blue-500 text-white"
                          : "bg-white text-blue-500 border-blue-500"
                      }`}
                    >
                      {number + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusProfile;
