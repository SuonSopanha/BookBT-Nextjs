"use client";
import { useState, useEffect } from "react";

import { useParams } from "next/navigation";
import axios from "axios";

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

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    const updatedServiceDetail = { ...serviceDetail };

    if (index !== null) {
      // Update schedule item
      updatedServiceDetail.schedule[index] = {
        ...updatedServiceDetail.schedule[index],
        [name]: value,
      };
    } else if (name in service) {
      // Update service fields
      updatedServiceDetail.service[name] = value;
    } else if (name in pricing) {
      // Update pricing fields
      updatedServiceDetail.pricing[name] = value;
    } else {
      // Update other fields
      updatedServiceDetail[name] = value;
    }

    setServiceDetail(updatedServiceDetail);
  };

  const handleSaveService = async () => {
    const token = sessionStorage.getItem("token");
    try {
      await axios.put(
        "http://localhost:8000/api/v1/service/" + id,
        serviceDetail.service,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      await axios.put(
        "http://localhost:8000/api/v1/pricing/" + pricing.id,
        serviceDetail.pricing,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      alert("Service updated successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to update service");
    }
  };

  const handeAddSchedule = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const scheduled = await axios.post(
        "http://localhost:8000/api/v1/schedule",
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

  const handleSaveSchedule = async (scheduleId) => {
    const token = sessionStorage.getItem("token");
    try {
      const scheduleToUpdate = serviceDetail.schedule.find(
        (s) => s.id === scheduleId
      );
      await axios.put(
        "http://localhost:8000/api/v1/schedule/" + scheduleId,
        scheduleToUpdate,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      alert("Schedule updated successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to update schedule");
    }
  };

  const handleDeleteSchedule = async (scheduleId) => {
    const token = sessionStorage.getItem("token");
    try {
      await axios.delete(
        "http://localhost:8000/api/v1/schedule/" + scheduleId,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setServiceDetail((prevDetail) => ({
        ...prevDetail,
        schedule: prevDetail.schedule.filter((s) => s.id !== scheduleId),
      }));
      alert("Schedule deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to delete schedule");
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
              <input
                type="text"
                name="location"
                placeholder={service.location}
                value={service.location}
                onChange={handleChange}
                className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
              />
            </div>
            <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
              <label className="text-gray-600 font-light">Destination</label>
              <input
                type="text"
                name="destination"
                placeholder={service.destination}
                value={service.destination}
                onChange={handleChange}
                className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
              <label className="text-gray-600 font-light">Vehicle Type</label>
              <input
                type="text"
                name="vehicleType"
                placeholder={service.vehicleType}
                value={service.vehicleType}
                onChange={handleChange}
                className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
              />
            </div>
            <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
              <label className="text-gray-600 font-light">Max Seat</label>
              <input
                type="number"
                name="maxSeat"
                placeholder={service.maxSeat}
                value={service.maxSeat}
                onChange={handleChange}
                className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-4 space-y-4 sm:space-y-0">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pr-4">
              <label className="text-gray-600 font-light">
                Solo Ride Options
              </label>
              <div className="mt-2 flex items-center">
                <label className="text-gray-700">Solo Ride</label>
                <select
                  name="soloRideOption"
                  value={service.soloRideOption}
                  onChange={handleChange}
                  className="ml-2 h-fit w-fit px-2 text-blue-500 border-gray-300 rounded bg-slate-100"
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="text-gray-600 font-light">Category</label>
              <div className="mt-2">
                <div className="flex items-center mb-2">
                  <label className="text-gray-700">Bus</label>
                  <select
                    name="category"
                    value={service.category}
                    onChange={handleChange}
                    className="ml-2 h-fit w-fit px-2 text-blue-500 border-gray-300 rounded bg-slate-100"
                  >
                    <option value="bus">Yes</option>
                    <option value="taxi">No</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <label className="text-gray-700">Taxi</label>
                  <select
                    name="category"
                    value={service.category}
                    onChange={handleChange}
                    className="ml-2 h-fit w-fit px-2 text-blue-500 border-gray-300 rounded bg-slate-100"
                  >
                    <option value="taxi">Yes</option>
                    <option value="bus">No</option>
                  </select>
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
                <input
                  type="number"
                  name="baseFare"
                  placeholder={pricing.baseFare}
                  value={pricing.baseFare}
                  onChange={handleChange}
                  className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
                <label className="text-gray-600 font-light">
                  Additional Charges
                </label>
                <input
                  type="number"
                  name="additionalCharge"
                  placeholder={pricing.additionalCharge}
                  value={pricing.additionalCharge}
                  onChange={handleChange}
                  className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
                />
              </div>
            </div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
                <label className="text-gray-600 font-light">Solo Charges</label>
                <input
                  type="number"
                  name="soloCharge"
                  placeholder={pricing.soloCharge}
                  value={pricing.soloCharge}
                  onChange={handleChange}
                  className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4 pr-0 sm:pr-4">
                <label className="text-gray-600 font-light">
                  Pricing Description
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder={pricing.description}
                  value={pricing.description}
                  onChange={handleChange}
                  className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
                />
              </div>
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
                    checked={pricing.currencyType === "KHR"}
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
                    checked={pricing.currencyType === "USD"}
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

          <button
            className="text-white bg-blue-500 px-8 py-2 rounded-lg mt-4"
            onClick={handleSaveService}
          >
            Save
          </button>

          <div className="flex flex-col flex-wrap mt-4">
            <div className="flex mb-4 px-1 mt-8">
              <span className="flex justify-center items-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
                3
              </span>
              <span className="text-gray-700 font-bold">
                Schedule Information
              </span>
            </div>
            <button
              className="text-gray-600 bg-gray-200 px-4 py-2 rounded-lg"
              onClick={toggleSchedule}
            >
              {isScheduleOpen ? "Hide Schedule" : "Add Schedule"}
            </button>

            {isScheduleOpen && (
              <div className="mt-4">
                <div className="flex flex-wrap mb-4">
                  <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:pr-4">
                    <label className="text-gray-600 font-light">
                      Day of Week
                    </label>
                    <select
                      name="dayOfWeek"
                      value={newScheduleFormData.dayOfWeek}
                      onChange={(e) =>
                        setNewScheduleFormData({
                          ...newScheduleFormData,
                          dayOfWeek: e.target.value,
                        })
                      }
                      className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
                    >
                      <option value="">Select Day</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>
                  <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:px-2">
                    <label className="text-gray-600 font-light">
                      From Time
                    </label>
                    <input
                      type="time"
                      name="fromTime"
                      value={newScheduleFormData.fromTime}
                      onChange={(e) =>
                        setNewScheduleFormData({
                          ...newScheduleFormData,
                          fromTime: e.target.value,
                        })
                      }
                      className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
                    />
                  </div>
                  <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:pl-4">
                    <label className="text-gray-600 font-light">To Time</label>
                    <input
                      type="time"
                      name="toTime"
                      value={newScheduleFormData.toTime}
                      onChange={(e) =>
                        setNewScheduleFormData({
                          ...newScheduleFormData,
                          toTime: e.target.value,
                        })
                      }
                      className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
                    />
                  </div>
                </div>
                <button
                  className="text-white bg-blue-500 px-4 py-2 rounded-lg"
                  onClick={handeAddSchedule}
                >
                  Save Schedule
                </button>
              </div>
            )}

            <div className="flex flex-wrap mt-4">
              {schedule.map((sch, index) => (
                <div
                  key={index}
                  className="w-full mb-4 pr-0 sm:pr-4 flex items-center space-x-2"
                >
                  <div className="flex flex-col w-1/4 item">
                    <label className="text-gray-600 font-light">
                      Day of Week
                    </label>
                    <select
                      type="text"
                      name="dayOfWeek"
                      value={sch.dayOfWeek}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
                    >
                      <option value="">Select Day</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-1/4">
                    <label className="text-gray-600 font-light">
                      From Time
                    </label>
                    <input
                      type="time"
                      name="departureTime"
                      value={sch.departureTime}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
                    />
                  </div>
                  <div className="flex flex-col w-1/4">
                    <label className="text-gray-600 font-light">To Time</label>
                    <input
                      type="time"
                      name="arrivalTime"
                      value={sch.arrivalTime}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 bg-slate-100"
                    />
                  </div>
                  <div className="flex flex-col w-1/8 mt-8">
                    <button
                      className="text-white bg-blue-500 px-4 py-2 rounded-lg"
                      onClick={() => handleSaveSchedule(sch.id)}
                    >
                      Save
                    </button>
                  </div>
                  <div className="flex flex-col w-1/8 mt-8">
                    <button
                      className="text-white bg-red-500 px-4 py-2 rounded-lg"
                      onClick={() => handleDeleteSchedule(sch.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
