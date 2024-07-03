"use client";
import { useState, useEffect } from "react";

import { useParams } from "next/navigation";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
import axios from "axios";

const getServices = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/service/` + id
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getFeedback = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/driver-rating/` + id
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const BusDetail = () => {
  const { id } = useParams();
  const [serviceDetail, setServiceDetail] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [userRating, setUserRating] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportType, setReportType] = useState("");
  const [reportContent, setReportContent] = useState("");

  console.log(id);
  useEffect(() => {
    const fetchServiceDetail = async () => {
      const data = await getServices(id);
      const ratings = await getFeedback(data.driver.id);
      setServiceDetail(data);
      setUserRating(ratings);
    };

    fetchServiceDetail();
  }, [id]);

  if (!serviceDetail) {
    return <div>Loading...</div>;
  }

  const handleReport = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitReport = () => {
    // Handle the report submission logic here
    console.log({ reportType, reportContent });
    setIsModalOpen(false);
  };

  const handleRateDriver = async () => {
    const token = sessionStorage.getItem("token");
    console.log("Is rationg");
    const ratingData = {
      DriverId: driver.id,
      ServiceId: null,
      BookingId: null,
      rating,
      feedbackText: feedback,
      feedbackDate: new Date(Date.now()),
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/rating`,
        ratingData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(serviceDetail);
  console.log(userRating);

  const { service, driver, schedule, pricing } = serviceDetail;
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative">
        <div className="relative bg-black bg-opacity-40 py-10">
          <div className="mx-auto flex flex-col justify-center space-y-4 p-4 md:flex-row md:space-x-20 md:space-y-0">
            <div className="relative bg-gradient-to-r from-white via-gray-100 to-white p-3 rounded-lg shadow-sm">
              <img
                src={driver.photoURL}
                className="h-80 w-full rounded-t-lg object-cover"
              ></img>
              <div className="absolute top-60 h-24 w-48 pl-4 pt-12">
                <p className="text-xl font-bold text-white">
                  {driver.firstName} {driver.lastName}
                </p>
              </div>
              <div className="m-4 border-b-2 border-zinc-400 pb-12 space-y-2">
                <div className="ml-0.5 flex items-center">
                  <img
                    width="28"
                    height="24"
                    src="https://img.icons8.com/windows/32/FAB005/gender-neutral-user.png"
                    alt="gender-neutral-user"
                  ></img>
                  <p className="ml-2 font-medium text-zinc-600">
                    {driver.firstName} {driver.lastName}
                  </p>
                </div>
                <div className="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/home--v2.png"
                    alt="home--v2"
                  ></img>
                  <p className="ml-2 font-medium text-zinc-600">
                    {driver.email}
                  </p>
                </div>
                <div className="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/iphone.png"
                    alt="iphone"
                  ></img>
                  <p className="ml-2 font-medium text-zinc-600">
                    {driver.contactNumber}
                  </p>
                </div>
              </div>

              <div className="m-4 ">
                <div className="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                    alt="filled-star"
                  />
                  <p className="ml-4 text-xl font-bold text-zinc-600">Rating</p>
                  <p className="ml-11 font-medium text-slate-500">17 Rated</p>
                </div>
                <div className="ml-8 mt-2 flex items-center">
                  <ReactStars
                    classNames="text-center"
                    count={5}
                    value={driver.averageRating}
                    size={24}
                    edit={false}
                    isHalf={true}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
              <div className="ml-2 py-8 border-t-2 border-yellow-400">
                <div className="flex items-center justify-between mb-6 px-4">
                  <p className="text-lg font-medium text-gray-800">
                    7 comments
                  </p>
                  <ReactStars
                    count={5}
                    value={rating}
                    onChange={(newRating) => setRating(newRating)}
                    size={28}
                    edit={true}
                    isHalf={true}
                    activeColor="#ffd700"
                  />
                </div>

                <div className="flex flex-col space-y-4 px-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <input
                      type="text"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="flex-1 h-12 rounded-lg border border-gray-300 bg-white p-3 font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Add comment..."
                    />
                    <button
                      onClick={handleRateDriver}
                      className="h-12 w-24 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      Post
                    </button>
                  </div>
                </div>

                <div className="space-y-4 px-4">
                  {userRating.map((rating) => (
                    <div
                      key={rating.id}
                      className="flex items-start space-x-4 bg-white bg-opacity-50 p-4 rounded-lg shadow-md border border-gray-200"
                    >
                      <img
                        width="48"
                        height="48"
                        src={rating?.user.photoURL}
                        alt="user-avatar"
                        className="rounded-full"
                      />
                      <div className="flex-1 ml-4">
                        <ReactStars
                          count={5}
                          value={rating.rating}
                          size={16}
                          edit={false}
                          isHalf={true}
                          activeColor="#ffd700"
                        />
                        <p className="font-semibold text-gray-800">
                          {rating?.user.fullName}
                        </p>
                        <p className="text-gray-600 mt-1">
                          {rating?.feedbackText}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mx-2">
                  <div className="pt-4 px-4">
                    <Link
                      href="#"
                      className="text-yellow-600 font-medium hover:underline"
                    >
                      See more
                    </Link>
                  </div>

                  <button
                    onClick={handleReport}
                    className="pt-4 px-4 flex items-center space-x-2"
                  >
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/material-outlined/24/FA5252/disclaimer.png"
                      alt="report-icon"
                    />
                    <div className="text-red-600 font-medium hover:underline">
                      Report
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                  <h2 className="text-xl font-bold mb-4 text-gray-800">
                    Report Driver
                  </h2>
                  <label className="block mb-2 font-medium text-gray-700">
                    Report Type
                  </label>
                  <select
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                    className="w-full p-2 mb-4 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Select report type</option>
                    <option value="price">Price</option>
                    <option value="hygiene">Hygiene</option>
                    <option value="convenience">Convenience</option>
                    <option value="driver_behavior">Driver Behavior</option>
                    <option value="vehicle_condition">Vehicle Condition</option>
                    <option value="safety">Safety</option>
                    <option value="service_quality">Service Quality</option>
                    <option value="other">Other</option>
                  </select>
                  <label className="block mb-2 font-medium text-gray-700">
                    Report Content
                  </label>
                  <textarea
                    value={reportContent}
                    onChange={(e) => setReportContent(e.target.value)}
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
                    <button
                      onClick={handleSubmitReport}
                      className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="relative w-full sm:w-1/2 rounded-lg bg-white shadow-md">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <p className="text-2xl font-bold text-gray-800">
                    Taxi Provider Profile
                  </p>
                </div>

                <div className="flex mb-8 bg-gradient-to-r from-white via-gray-100 to-yellow-50 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center h-56 w-1/2 bg-yellow-100 border-2 border-gray-300 rounded-lg overflow-hidden">
                    <img
                      src={service.vehiclePictureURL[0]}
                      alt="Vehicle Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 ml-6 flex flex-col space-y-4">
                    <button
                      type="button"
                      className="h-12 w-full rounded-lg border-2 border-yellow-400 bg-blue-50 text-yellow-500 font-semibold hover:bg-yellow-100 transition ease-in-out duration-150"
                    >
                      {service.location} - {service.destination}
                    </button>
                    <p className="text-gray-700">
                      <strong className="font-semibold text-gray-900">
                        Category:
                      </strong>{" "}
                      {service.category}
                    </p>
                    <p className="text-gray-700">
                      <strong className="font-semibold text-gray-900">
                        Solo Ride Option:
                      </strong>{" "}
                      {service.soloRideOption ? "Yes" : "No"}
                    </p>
                    <p className="text-gray-700">
                      <strong className="font-semibold text-gray-900">
                        Destination:
                      </strong>{" "}
                      {service.destination}
                    </p>
                    <p className="text-gray-700">
                      <strong className="font-semibold text-gray-900">
                        Location:
                      </strong>{" "}
                      {service.location}
                    </p>
                    <p className="text-gray-700">
                      <strong className="font-semibold text-gray-900">
                        Vehicle Type:
                      </strong>{" "}
                      {service.vehicleType}
                    </p>
                    <p className="text-gray-700">
                      <strong className="font-semibold text-gray-900">
                        Max Seat:
                      </strong>{" "}
                      {service.maxSeat}
                    </p>

                    <button
                      id="searchBook"
                      className="relative mt-6 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-400 to-amber-300 text-sm font-medium text-gray-900 shadow-lg hover:border-2 hover:border-gray-800 transition ease-in-out duration-150"
                    >
                      <a href={"/booking/form/" + service.id} className="z-10">
                        Book Now
                      </a>
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 h-20 w-20 bg-yellow-400 rounded-full opacity-30"></div>
                    </button>
                  </div>
                </div>
                <div className="mx-4 mt-1 p-6 bg-gradient-to-r from-white via-gray-100 to-white shadow-lg rounded-lg">
                  <h1 className="text-3xl font-bold mb-6 pb-2 text-zinc-700 border-b-2 border-yellow-400">
                    Service Details
                  </h1>

                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-yellow-600">
                      Pricing
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <strong className="text-lg text-gray-800">
                          Base Fare:
                        </strong>
                        <p className="text-lg text-gray-600 font-bold">
                          {pricing.baseFare} {pricing.currencyType}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <strong className="text-lg text-gray-800">
                          Additional Charge:
                        </strong>
                        <p className="text-lg text-gray-600 font-bold">
                          {pricing.additionalCharge} {pricing.currencyType}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <strong className="text-lg text-gray-800">
                          Solo Charge:
                        </strong>
                        <p className="text-lg text-gray-600 font-bold">
                          {pricing.soloCharge} {pricing.currencyType}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <strong className="text-lg text-gray-800">
                          Description:
                        </strong>
                        <p className="mt-2 text-gray-600 text-sm">
                          {pricing.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-3xl font-bold mb-6 text-yellow-600 border-b-4 border-yellow-300 pb-2">
                      Available Schedule
                    </h2>
                    <ul className="space-y-2">
                      {schedule.map((sch) => (
                        <li
                          key={sch.id}
                          className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
                        >
                          <div className="w-6 h-6 flex items-center justify-center bg-yellow-300 rounded-full mr-4">
                            <svg
                              className="w-4 h-4 text-yellow-700"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM12 7v6l4 2" />
                            </svg>
                          </div>
                          <div className="flex">
                            <p className="text-md font-medium text-gray-800">
                              <span className="font-semibold text-gray-700">
                                {sch.dayOfWeek}:
                              </span>{" "}
                              {sch.departureTime.slice(0, 5)} -{" "}
                              {sch.arrivalTime.slice(0, 5)}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusDetail;
