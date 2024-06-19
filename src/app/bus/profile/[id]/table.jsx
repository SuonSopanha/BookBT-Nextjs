"use client";
import { useState } from "react";

const Table = () => {
  const [activeTab, setActiveTab] = useState("Scheduled");

  const toggleTableVisibility = (tabId) => {
    setActiveTab(tabId);
  };
  return (
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
              activeTab === "Route" ? "bg-blue-900 text-white" : ""
            }`}
            onClick={() => toggleTableVisibility("Route")}
          >
            Service
          </th>
          <th
            className={`p-3 cursor-pointer ${
              activeTab === "Scheduled" ? "bg-blue-900 text-white" : ""
            }`}
            onClick={() => toggleTableVisibility("Scheduled")}
          >
            Scheduled
          </th>
          <th
            className={`p-3 cursor-pointer ${
              activeTab === "Vehicles" ? "bg-blue-900 text-white" : ""
            }`}
            onClick={() => toggleTableVisibility("Vehicles")}
          >
            Vehicles
          </th>
          <th
            className={`p-3 cursor-pointer ${
              activeTab === "Price" ? "bg-blue-900 text-white" : ""
            }`}
            onClick={() => toggleTableVisibility("Price")}
          >
            Price
          </th>
          <th
            className={`p-3 cursor-pointer ${
              activeTab === "BookingTB" ? "bg-blue-900 text-white" : ""
            }`}
            onClick={() => toggleTableVisibility("BookingTB")}
          >
            Booking
          </th>
        </tr>
      </thead>

      <tbody
        className={`divide-y divide-gray-200 ${
          activeTab === "Scheduled" ? "active" : "hidden"
        }`}
        id="Scheduled"
      >
        <tr className="bg-blue-900 text-white ">
          <th className="p-3">ID</th>
          <th className="p-3" colspan="2">
            Flee
          </th>
          <th className="p-3" colspan="2">
            Arrive
          </th>
        </tr>
        <tr className="text-center">
          <td className="p-3">1</td>
          <td className="p-3" colspan="2">
            Phnom Penh
          </td>
          <td className="p-3" colspan="2">
            Siem Reap
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-3">2</td>
          <td className="p-3" colspan="2">
            Phnom Penh
          </td>
          <td className="p-3" colspan="2">
            Svay Rieng
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-3">3</td>
          <td className="p-3" colspan="2">
            Phnom Penh
          </td>
          <td className="p-3" colspan="2">
            Khos kong
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-3">4</td>
          <td className="p-3" colspan="2">
            Phnom Penh
          </td>
          <td className="p-3" colspan="2">
            Prey Verng
          </td>
        </tr>
      </tbody>

      <tbody
        className={`divide-y divide-gray-200 ${
          activeTab === "BookingTB" ? "active" : "hidden"
        }`}
        id="BookingTB"
      >
        <tr className="bg-blue-900 text-white font-medium text-center">
          <td className="p-3">Username</td>
          <td className="p-3">Time</td>
          <td className="p-3" colspan="2">
            Direction
          </td>
          <td className="p-3">Request</td>
        </tr>
        <tr className="text-center">
          <td className="p-3">
            <a
              className="underline text-blue-600 bold"
              href="bookingRequest.html"
            >
              Kola
            </a>
          </td>
          <td className="p-3">Jan - 10 Mon 08:00 AM</td>
          <td className="p-3" colspan="2">
            Svay Rieng - Phnom Penh
          </td>
          <td className="p-3 font-bold ">
            <button className="text-red-600 mr-6">Decline</button>
            <button className="text-green-600">Accept</button>
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-3">
            <a
              className="underline text-blue-600 bold"
              href="bookingRequest.html"
            >
              Kola
            </a>
          </td>
          <td className="p-3">Jan - 10 Mon 08:00 AM</td>
          <td className="p-3" colspan="2">
            Svay Rieng - Phnom Penh
          </td>
          <td className="p-3 font-bold ">
            <button className="text-red-600 mr-6">Decline</button>
            <button className="text-green-600">Accept</button>
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-3">
            <a
              className="underline text-blue-600 bold"
              href="bookingRequest.html"
            >
              Kola
            </a>
          </td>
          <td className="p-3">Jan - 10 Mon 08:00 AM</td>
          <td className="p-3" colspan="2">
            Svay Rieng - Phnom Penh
          </td>
          <td className="p-3 font-bold ">
            <button className="text-red-600 mr-6">Decline</button>
            <button className="text-green-600">Accept</button>
          </td>
        </tr>
      </tbody>

      <tbody
        className={`divide-y divide-gray-200 ${
          activeTab === "Route" ? "active" : "hidden"
        }`}
        id="Route"
      >
        <tr className="bg-blue-900 text-white">
          <th className="p-3">Category</th>
          <th className="p-3" colspan="2">
            Location
          </th>
          <th className="p-3" colspan="2">
            Direction
          </th>
        </tr>
        <tr className="text-center">
          <td className="p-3">Bus</td>
          <td className="p-3" colspan="2">
            Pnom Penh
          </td>
          <td className="p-3" colspan="2">
            Svay Rieng
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-3">01:00 PM</td>
          <td className="p-3" colspan="2">
            Svay Rieng
          </td>
          <td className="p-3" colspan="2">
            Phnom Penh
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-3">08:00 AM</td>
          <td className="p-3" colspan="2">
            Svay Rieng
          </td>
          <td className="p-3" colspan="2">
            Bavet
          </td>
        </tr>
      </tbody>

      <tbody
        className={`divide-y divide-gray-200 ${
          activeTab === "Vehicles" ? "active" : "hidden"
        }`}
        id="Vehicles"
      >
        <tr className="bg-blue-900 text-white">
          <th className="p-3" colspan="3">
            Vehicle
          </th>
          <th className="p-3" colspan="1">
            Seat
          </th>
          <th className="p-3" colspan="1">
            Type
          </th>
        </tr>
        <tr></tr>
      </tbody>

      <tbody
        className={`divide-y divide-gray-200 ${
          activeTab === "Price" ? "active" : "hidden"
        }`}
        id="Price"
      >
        <tr className="bg-blue-900 text-white">
          <th className="p-3">Time</th>
          <th className="p-3" colspan="2">
            Direction
          </th>
          <th className="p-3" colspan="2">
            Price
          </th>
        </tr>
        <tr className="text-center">
          <td className="p-3">08:00 AM</td>
          <td className="p-3" colspan="2">
            Svay Rieng
          </td>
          <td className="p-3" colspan="2">
            $6
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-3">08:00 AM</td>
          <td className="p-3" colspan="2">
            Svay Rieng
          </td>
          <td className="p-3" colspan="2">
            $6
          </td>
        </tr>
        <tr className="text-center">
          <td className="p-3">08:00 AM</td>
          <td className="p-3" colspan="2">
            Svay Rieng
          </td>
          <td className="p-3" colspan="2">
            $6
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
