"use client";
import { useState } from "react";

import Link from 'next/link';

const TaxiDetail = () => {
  const [tableVisibility, setTableVisibility] = useState({
    Scheduled: true,
    Route: false,
    Vehicles: false,
    Price: false,
    BookingTB: false,
  });

  const toggleTableVisibility = (tableId) => {
    setTableVisibility((prevState) => {
      // Create a new state object where all table visibilities are set to false
      const newVisibility = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === tableId; // Set the clicked table's visibility to true, others to false
        return acc;
      }, {});
      return newVisibility;
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="h-fit w-full overflow-hidden bg-cover bg-fixed bg-left bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://a.cdn-hotels.com/gdcs/production66/d41/07b19af0-8ab2-492e-97af-1ba8c6cac50a.jpg')",
        }}
      >
        <div className="flex h-96 flex-col items-center justify-center">
          <p className="text-5xl font-bold text-white">Profile</p>
        </div>
        <div className="relative">
          <div className="relative bg-black bg-opacity-50 py-10">
            <div className="mx-auto flex flex-col justify-center space-y-4 p-4 md:flex-row md:space-x-20 md:space-y-0">
              <div className="relative rounded-lg bg-white">
                <img
                  src="https://yt3.googleusercontent.com/zVhrm9pQEmydw5480JJkMVXdft3hSOnf1KvleiJsQIDS9PRVk_xTlc6e1wPHvaeEsCtYa9IJYg=s900-c-k-c0x00ffffff-no-rj"
                  className="h-80 w-full rounded-t-lg object-cover"
                ></img>
                <div className="absolute top-60 h-24 w-48 pl-4 pt-12">
                  <p className="text-xl font-bold text-white">Sanin Ronal</p>
                </div>
                <div className="m-4 border-b-2 border-zinc-400 pb-12">
                  <div className="ml-0.5 flex items-center">
                    <img
                      width="28"
                      height="24"
                      src="https://img.icons8.com/windows/32/FAB005/gender-neutral-user.png"
                      alt="gender-neutral-user"
                    ></img>
                    <p className="ml-2 font-medium text-zinc-600">
                      Taxi Driver
                    </p>
                  </div>
                  <div className="ml-1 flex items-center">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/FAB005/home--v2.png"
                      alt="home--v2"
                    ></img>
                    <p className="ml-2 font-medium text-zinc-600">Phnom Penh</p>
                  </div>
                  <div className="ml-1 flex items-center">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/FAB005/iphone.png"
                      alt="iphone"
                    ></img>
                    <p className="ml-2 font-medium text-zinc-600">
                      097 654 8956, 088 369 7845
                    </p>
                  </div>
                </div>

                <div className="m-4 border-b-2 border-zinc-400 pb-12">
                  <div className="ml-1 flex items-center">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/FAB005/signpost-tourist.png"
                      alt="signpost-tourist"
                    />
                    <p className="ml-4 text-xl font-bold text-zinc-600">
                      Direction
                    </p>
                  </div>
                  <p className="ml-11 font-medium text-slate-500">
                    Phnom Penh - Siem Reap
                  </p>
                  <div className="ml-1 flex items-center">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/FAB005/clock.png"
                      alt="clock"
                    />
                    <p className="ml-4 text-xl font-bold text-zinc-600">
                      Departure time
                    </p>
                  </div>
                  <p className="ml-11 font-medium text-slate-500">
                    . Phnom Penh - Pursat: 8 AM
                  </p>
                  <p className="ml-11 font-medium text-slate-500">
                    . Pursat - Phnom Penh: 2 PM
                  </p>
                </div>

                <div className="m-4">
                  <div className="ml-1 flex items-center">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                      alt="filled-star"
                    />
                    <p className="ml-4 text-xl font-bold text-zinc-600">
                      Rating
                    </p>
                    <p className="ml-11 font-medium text-slate-500">17 Rated</p>
                  </div>
                  <div className="ml-8 mt-2 flex items-center">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                      alt="filled-star"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                      alt="filled-star"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                      alt="filled-star"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                      alt="filled-star"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                      alt="filled-star"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-8 px-2 py-4">
                  <div className="flex items-center justify-center">
                    <Link href="#">
                      <button className="h-10 w-32 rounded-xl border-2 border-zinc-600 hover:bg-yellow-300">
                        <p className="text-lg font-bold text-yellow-400 hover:text-white">
                          Follow Taxi
                        </p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative w-full sm:w-1/2 rounded-lg bg-white">
                <div className="m-4 pb-12">
                  <div className="ml-0.5 flex items-center">
                    <p className="ml-2 text-xl font-bold text-zinc-fw-full0">
                      Taxi provide profile
                    </p>
                  </div>
                  <div className="my-6 ml-1 flex">
                    <div className="flex h-56 w-2/4 items-center justify-center rounded-lg bg-slate-200 border-2 text-xl font-medium">
                      <img src="https://img.icons8.com/ios-filled/50/FAB005/chevron-down.png"></img>
                    </div>
                    <div className="w-2/4 ml-4 flex flex-col ">
                      <button
                        type="text"
                        className="mb-4 h-10 w-full rounded-lg border-2 border-blue-700 bg-slate-200 px-2 text-center font-medium text-slate-700 "
                      >
                        <p>Phnom Penh - Siem Reap</p>
                      </button>
                      <button
                        type="text"
                        className="mb-4 h-10 w-full rounded-lg border-2 border-blue-700 bg-slate-200 px-2 text-center font-medium text-slate-700 "
                      >
                        <p>Pursat - Phnom Penh</p>
                      </button>
                      <button
                        type="text"
                        className="mb-4 h-10 w-full rounded-lg border-2 border-blue-700 bg-slate-200 px-2 text-center font-medium text-slate-700 "
                      >
                        <p>Pursat - Phnom Penh</p>
                      </button>
                      <button
                        type="text"
                        className="mb-4 h-10 w-full rounded-lg border-2 border-blue-700 bg-slate-200 px-2 text-center font-medium text-slate-700 "
                      >
                        <p>Phnom Penh - Siem Reap</p>
                      </button>
                    </div>
                  </div>
                  <table
                    id="Booking"
                    className=" bg-white w-full table-fixed text-sm shadow-md rounded-lg overflow-hidden"
                  >
                    <colgroup>
                      <col style={{ width: "20%" }} />
                      <col style={{ width: "20%" }} />
                      <col style={{ width: "20%" }} />
                      <col style={{ width: "20%" }} />
                      <col style={{ width: "20%" }} />
                    </colgroup>
                    <thead className="text-left" id="table-header">
                      <tr className="text-slate-700">
                        <th
                          className={`p-3 cursor-pointer ${
                            tableVisibility["Scheduled"]
                              ? "bg-blue-900 text-white"
                              : ""
                          }`}
                          onClick={() => toggleTableVisibility("Scheduled")}
                        >
                          Scheduled
                        </th>
                        <th
                          className={`p-3 cursor-pointer ${
                            tableVisibility["Route"]
                              ? "bg-blue-900 text-white"
                              : ""
                          }`}
                          onClick={() => toggleTableVisibility("Route")}
                        >
                          Route
                        </th>
                        <th
                          className={`p-3 cursor-pointer ${
                            tableVisibility["Vehicles"]
                              ? "bg-blue-900 text-white"
                              : ""
                          }`}
                          onClick={() => toggleTableVisibility("Vehicles")}
                        >
                          Vehicles
                        </th>
                        <th
                          className={`p-3 cursor-pointer ${
                            tableVisibility["Price"]
                              ? "bg-blue-900 text-white"
                              : ""
                          }`}
                          onClick={() => toggleTableVisibility("Price")}
                        >
                          Price
                        </th>
                        <th
                          className={`p-3 cursor-pointer ${
                            tableVisibility["BookingTB"]
                              ? "bg-blue-900 text-white"
                              : ""
                          }`}
                          onClick={() => toggleTableVisibility("BookingTB")}
                        >
                          Booking
                        </th>
                      </tr>
                    </thead>

                    <tbody
                      className={`divide-y divide-gray-200 ${
                        tableVisibility.Scheduled ? "active" : "hidden"
                      }`}
                      id="Scheduled"
                    >
                      <tr className="bg-blue-900 text-white ">
                        <th className="p-3">ID</th>
                        <th className="p-3" colSpan="2">
                          Flee
                        </th>
                        <th className="p-3" colSpan="2">
                          Arrive
                        </th>
                      </tr>
                      <tr className="text-center">
                        <td className="p-3">1</td>
                        <td className="p-3" colSpan="2">
                          Phnom Penh
                        </td>
                        <td className="p-3" colSpan="2">
                          Siem Reap
                        </td>
                      </tr>
                      <tr className="text-center">
                        <td className="p-3">2</td>
                        <td className="p-3" colSpan="2">
                          Phnom Penh
                        </td>
                        <td className="p-3" colSpan="2">
                          Svay Rieng
                        </td>
                      </tr>
                      <tr className="text-center">
                        <td className="p-3">3</td>
                        <td className="p-3" colSpan="2">
                          Phnom Penh
                        </td>
                        <td className="p-3" colSpan="2">
                          Khos kong
                        </td>
                      </tr>
                      <tr className="text-center">
                        <td className="p-3">4</td>
                        <td className="p-3" colSpan="2">
                          Phnom Penh
                        </td>
                        <td className="p-3" colSpan="2">
                          Prey Verng
                        </td>
                      </tr>
                    </tbody>

                    <tbody
                      className={`divide-y divide-gray-200 ${
                        tableVisibility.BookingTB ? "active" : "hidden"
                      }`}
                      id="BookingTB"
                    >
                      <tr className="bg-blue-900 text-white font-medium text-center">
                        <td className="p-3">Date</td>
                        <td className="p-3" colSpan="2">
                          Direction
                        </td>
                        <td className="p-3">Price</td>
                        <td className="p-3">Booking Now</td>
                      </tr>
                      <tr className="text-center">
                        <td className="p-3">Jun 28 Mon 08:00 AM</td>
                        <td className="p-3" colSpan="2">
                          Phnom Penh - Siem Reap
                        </td>
                        <td className="p-3">$10.00</td>
                        <td className="p-3">
                          {" "}
                          <Link href="/bookingForm.html">
                            <div className="text-blue-600">
                              <div className="flex items-center justify-center">
                                <button className="h-10 w-32 rounded-xl border-2 border-zinc-600 hover:bg-yellow-300">
                                  <p className="text-sm sm:text-lg font-bold text-yellow-400 hover:text-white">
                                    Booking
                                  </p>
                                </button>
                              </div>
                            </div>
                          </Link>
                        </td>
                      </tr>
                    </tbody>

                    <tbody
                      className={`divide-y divide-gray-200 ${
                        tableVisibility.Route ? "active" : "hidden"
                      }`}
                      id="Route"
                    >
                      <tr className="bg-blue-900 text-white">
                        <th className="p-3">Time</th>
                        <th className="p-3" colSpan="2">
                          Location
                        </th>
                        <th className="p-3" colSpan="2">
                          Direction
                        </th>
                      </tr>
                      <tr className="text-center">
                        <td className="p-3">08:00 AM</td>
                        <td className="p-3" colSpan="2">
                          Pnom Penh
                        </td>
                        <td className="p-3" colSpan="2">
                          Svay Rieng
                        </td>
                      </tr>
                      <tr className="text-center">
                        <td className="p-3">01:00 PM</td>
                        <td className="p-3" colSpan="2">
                          Svay Rieng
                        </td>
                        <td className="p-3" colSpan="2">
                          Phnom Penh
                        </td>
                      </tr>
                      <tr className="text-center">
                        <td className="p-3">08:00 AM</td>
                        <td className="p-3" colSpan="2">
                          Svay Rieng
                        </td>
                        <td className="p-3" colSpan="2">
                          Bavet
                        </td>
                      </tr>
                    </tbody>

                    <tbody
                      className={`divide-y divide-gray-200 ${
                        tableVisibility.Vehicles ? "active" : "hidden"
                      }`}
                      id="Vehicles"
                    >
                      <tr className="bg-blue-900 text-white">
                        <th className="p-3" colSpan="3">
                          Vehicle
                        </th>
                        <th className="p-3" colSpan="1">
                          Seat
                        </th>
                        <th className="p-3" colSpan="1">
                          Type
                        </th>
                      </tr>
                      <tr className="text-center">
                        <td>
                          <img
                            src="https://n.sinaimg.cn/auto/transform/384/w710h474/20211030/1788-d69c73ca0587547378b39875fe1e7f20.jpg"
                            className="rounded-lg "
                          ></img>
                        </td>
                        <td className="p-3" colSpan="3">
                          Sina
                        </td>
                        <td className="p-3" colSpan="1">
                          4
                        </td>
                      </tr>
                    </tbody>

                    <tbody
                      className={`divide-y divide-gray-200 ${
                        tableVisibility.Price ? "active" : "hidden"
                      }`}
                      id="Price"
                    >
                      <tr className="bg-blue-900 text-white">
                        <th className="p-3">Time</th>
                        <th className="p-3" colSpan="2">
                          Direction
                        </th>
                        <th className="p-3" colSpan="2">
                          Price
                        </th>
                      </tr>
                      <tr className="text-center">
                        <td className="p-3">08:00 AM</td>
                        <td className="p-3" colSpan="2">
                          Svay Rieng
                        </td>
                        <td className="p-3" colSpan="2">
                          $6
                        </td>
                      </tr>
                      <tr className="text-center">
                        <td className="p-3">08:00 AM</td>
                        <td className="p-3" colSpan="2">
                          Svay Rieng
                        </td>
                        <td className="p-3" colSpan="2">
                          $6
                        </td>
                      </tr>
                      <tr className="text-center">
                        <td className="p-3">08:00 AM</td>
                        <td className="p-3" colSpan="2">
                          Svay Rieng
                        </td>
                        <td className="p-3" colSpan="2">
                          $6
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    id="photo"
                    className="h-full w-full bg-purple-100 p-2 hidden"
                  >
                    <div className="h-full w-full bg-white flex rounded-lg">
                      <div className=" w-2/4 ">
                        <img
                          src="https://n.sinaimg.cn/auto/transform/384/w710h474/20211030/1788-d69c73ca0587547378b39875fe1e7f20.jpg"
                          className="rounded-lg"
                        ></img>
                      </div>
                      <div className=" flex flex-col item-center justify-center">
                        <div className=" flex font-bold ml-8">
                          <p>Vehicle Type:</p>
                          <p className=" ml-4">Sina</p>
                        </div>
                        <div className=" flex font-bold ml-8">
                          <p>Seat count:</p>
                          <p className=" ml-4">10</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-4 py-8 md:pl-28">
              <div>
                <p className="pl-4 font-medium text-white">7 comments</p>
              </div>
              <div className="ml-8 mt-2 flex items-center">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                  alt="filled-star"
                />
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                  alt="filled-star"
                />
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                  alt="filled-star"
                />
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                  alt="filled-star"
                />
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/material-outlined/24/FFFF/filled-star.png"
                  alt="filled-star"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-start py-4 pl-4">
                <form>
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      className="h-10 w-96 rounded-lg border border-gray-400 bg-gray-100 p-3 font-medium leading-normal placeholder-gray-400 placeholder:text-white focus:bg-white focus:outline-none"
                      placeholder="Add comment..."
                    />
                    <Link href="#" className="flex items-center justify-center">
                      <button className="h-10 w-20 rounded-lg bg-blue-600 font-medium text-teal-50 hover:bg-yellow-200 hover:text-white">
                        Post
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
              <div className="flex items-center p-4 pl-4">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/material-sharp/48/FAB005/user-male-circle.png"
                  alt="user-male-circle"
                />
                <div className="ml-4 w-60 border-b-2">
                  <p className="font-medium text-white">Soun Sopanha</p>
                  <p className="ml-4 text-sm text-white">Good job Bro!</p>
                </div>
              </div>

              <div className="flex items-center p-4 pl-4">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/material-sharp/48/FAB005/user-male-circle.png"
                  alt="user-male-circle"
                />
                <div className="ml-4 w-60 border-b-2">
                  <p className="font-medium text-white">KOLA</p>
                  <p className="ml-4 text-sm text-white">Good job Bro!</p>
                </div>
              </div>
              <div className="py-4 pl-8 font-medium text-white md:flex">
                <Link href="#">See more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiDetail;
