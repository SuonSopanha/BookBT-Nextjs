"use client";
import { useState, useEffect } from "react";

import { useParams } from "next/navigation";
import axios from "axios";

const getServices = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/api/v1/service/` + id
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const [serviceDetail, setServiceDetail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newScheduleFormData, setNewScheduleFormData] = useState({
    dayOfWeek: "",
    fromTime: "",
    toTime: "",
  });

  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const toggleSchedule = () => {
    setIsScheduleOpen(!isScheduleOpen);
  };

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewScheduleFormData({
      ...newScheduleFormData,
      [name]: value,
    });
  };

  const handeSaveSchedule = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const scheduled = await axios.post(
        `${process.env.API_URL}/api/v1/schedule`,
        {
          serviceId: service.id,
          dayOfWeek: newScheduleFormData.dayOfWeek,
          departureTime: newScheduleFormData.fromTime,
          arrivalTime: newScheduleFormData.toTime,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (scheduled.data.message === "Schedule created successfully") {
        setIsScheduleOpen(false);
        alert("Schedule added successfully");
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-white mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-start">
      <h1 className="text-3xl text-gray-700 pt-20 pb-8">Service Information</h1>
      <hr className="-mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20" />
      <div className="py-8">
        <div>
          <div className="flex mb-4 px-1 mt-8">
            <span className="flex justify-center items-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
              1
            </span>
            <span className="text-gray-700 font-bold">Vehicle Information</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
              <label className="text-gray-600 font-light">Location</label>
              <div className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100">
                {service.location}
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
              <label className="text-gray-600 font-light">Destination</label>
              <div className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100">
                {service.destination}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
              <label className="text-gray-600 font-light">Vehicle Type</label>
              <div className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100">
                {service.vehicleType}
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
              <label className="text-gray-600 font-light">Max Seat</label>
              <div className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100">
                {service.maxSeat}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-4 space-y-4 sm:space-y-0">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pr-4">
              <label className="text-gray-600 font-light">
                Solo Ride Options
              </label>
              <div className="mt-2 flex items-center">
                <label className="text-gray-700">Solo Ride</label>
                <span className="ml-2 h-fit w-fit px-2 text-blue-500 border-gray-300 rounded bg-slate-100">
                  {service.soloRideOption ? "Yes" : "No"}
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="text-gray-600 font-light">Category</label>
              <div className="mt-2">
                <div className="flex items-center mb-2">
                  <label className="text-gray-700">Bus</label>
                  <span className="ml-2 h-fit w-fit px-2 text-blue-500 border-gray-300 rounded bg-slate-100">
                    {service.category === "bus" ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex items-center">
                  <label className="text-gray-700">Taxi</label>
                  <span className="ml-2 h-fit w-fit px-2 text-blue-500 border-gray-300 rounded bg-slate-100">
                    {service.category === "taxi" ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap m-8">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Vehicle Picture
                </label>
                <div className="w-64 flex flex-col items-center justify-center bg-slate-100 border-dashed border-2 border-gray-400 rounded-sm h-32 relative">
                  {service.vehiclePictureURL[0] ? (
                    <img
                      src={service.vehiclePictureURL[0]}
                      className="w-full h-full object-fit rounded-sm"
                      alt="Vehicle"
                    />
                  ) : (
                    <span className="text-gray-600 font-bold py-2 px-4">
                      No Image
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap mt-4">
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
                <div className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100">
                  {pricing.baseFare}
                </div>
              </div>
              <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
                <label className="text-gray-600 font-light">
                  Additional Charges
                </label>
                <div className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100">
                  {pricing.additionalCharge}
                </div>
              </div>
              <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
                <label className="text-gray-600 font-light">Solo Charges</label>
                <div className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100">
                  {pricing.soloCharge}
                </div>
              </div>
              <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
                <label className="text-gray-600 font-light">
                  Pricing Description
                </label>
                <div className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100">
                  {pricing.description}
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <label className="text-gray-600 font-light">Currency</label>
                <div className="mt-2">
                  <div className="flex items-center mb-2">
                    <label className="text-gray-700">KHR</label>
                    <span className="ml-2 h-fit w-fit px-2 text-blue-500 border-gray-300 rounded bg-slate-100">
                      {pricing.currencyType === "KHR" ? "Yes" : "No"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <label className="text-gray-700">USD</label>
                    <span className="ml-2 h-fit w-fit px-2 text-blue-500 border-gray-300 rounded bg-slate-100">
                      {pricing.currencyType === "USD" ? "Yes" : "No"}
                    </span>
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
              <button
                className="ml-4 px-2 py-1 bg-blue-500 text-white rounded"
                onClick={toggleSchedule}
              >
                {isScheduleOpen ? "Hide Schedule" : "Show All Schedule"}
              </button>
            </div>
            {isScheduleOpen && (
              <div>
                {schedule.map((schedule, index) => (
                  <div key={index} className="flex flex-wrap">
                    <div className="w-full sm:w-1/3 mb-4 pr-0 sm:pr-4">
                      <label className="text-gray-600 font-light">
                        Day of Week
                      </label>
                      <div className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100">
                        {schedule.dayOfWeek}
                      </div>
                    </div>
                    <div className="w-full sm:w-1/3 mb-4 pr-0 sm:pr-4">
                      <label className="text-gray-600 font-light">From</label>
                      <div className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100">
                        {schedule.departureTime.slice(0, 5)}
                      </div>
                    </div>
                    <div className="w-full sm:w-1/3 mb-4 pr-0 sm:pr-4">
                      <label className="text-gray-600 font-light">To</label>
                      <div className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100">
                        {schedule.arrivalTime.slice(0, 5)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            <button className="w-full sm:w-1/5 lg:w-1/5 h-16 mt-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
            <button
              onClick={openModal}
              className="w-full sm:w-1/5 lg:w-1/5 h-16 mt-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Schedule
            </button>
          </div>

          {isModalOpen && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen px-4">
                {/* Modal Background */}
                <div
                  className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"
                  aria-hidden="true"
                ></div>

                {/* Modal Content */}
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                  <div className="px-6 py-4">
                    <div className="text-lg font-bold mb-4">
                      Add New Schedule
                    </div>

                    {/* Day of Week */}
                    <div className="mb-4">
                      <label
                        htmlFor="dayOfWeek"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Day of Week
                      </label>
                      <select
                        id="dayOfWeek"
                        name="dayOfWeek"
                        value={newScheduleFormData.dayOfWeek}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      >
                        <option value="" disabled>
                          Select a day
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

                    {/* From Time */}
                    <div className="mb-4">
                      <label
                        htmlFor="fromTime"
                        className="block text-sm font-medium text-gray-700"
                      >
                        From Time
                      </label>
                      <input
                        type="time"
                        id="fromTime"
                        name="fromTime"
                        value={newScheduleFormData.fromTime}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>

                    {/* To Time */}
                    <div className="mb-4">
                      <label
                        htmlFor="toTime"
                        className="block text-sm font-medium text-gray-700"
                      >
                        To Time
                      </label>
                      <input
                        type="time"
                        id="toTime"
                        name="toTime"
                        value={newScheduleFormData.toTime}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="mr-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handeSaveSchedule}
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Add Schedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
