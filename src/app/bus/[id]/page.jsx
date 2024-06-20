"use client";
import { useState, useEffect } from "react";

import { useParams } from "next/navigation";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
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

const getFeedback = async (id) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/driver-rating/" + id
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
        "http://localhost:8000/api/v1/rating",
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
            <div className="relative rounded-lg bg-white">
              <img
                src={driver.photoURL}
                className="h-80 w-full rounded-t-lg object-cover"
              ></img>
              <div className="absolute top-60 h-24 w-48 pl-4 pt-12">
                <p className="text-xl font-bold text-white">
                  {driver.firstName} {driver.lastName}
                </p>
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

              <div className="m-4">
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

            <div className="relative w-full sm:w-1/2 rounded-lg bg-white shadow-md">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <p className="text-xl font-bold text-gray-800">
                    Taxi Provider Profile
                  </p>
                </div>

                <div className="flex mb-8">
                  <div className="flex items-center justify-center h-56 w-1/2 bg-gray-100 border-2 rounded-lg">
                    <img
                      src={service.vehiclePictureURL[0]}
                      alt="Vehicle Image"
                    />
                  </div>
                  <div className="w-1/2 ml-4 flex flex-col space-y-2">
                    <button
                      type="button"
                      className="mb-4 h-10 w-full rounded-lg border-2 border-blue-700 bg-gray-200 text-center font-medium text-gray-700"
                    >
                      <p>
                        {service.location} - {service.destination}
                      </p>
                    </button>
                    <p>
                      <strong>Category:</strong> {service.category}
                    </p>
                    <p>
                      <strong>Solo Ride Option:</strong>{" "}
                      {service.soloRideOption ? "Yes" : "No"}
                    </p>
                    <p>
                      <strong>Destination:</strong> {service.destination}
                    </p>
                    <p>
                      <strong>Location:</strong> {service.location}
                    </p>
                    <p>
                      <strong>Vehicle Type:</strong> {service.vehicleType}
                    </p>
                    <p>
                      <strong>Max Seat:</strong> {service.maxSeat}
                    </p>

                    <button
                      id="searchBook"
                      className="relative mt-5 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-sm font-medium text-black shadow-lg shadow-slate-500 hover:border-2 hover:border-gray-950"
                    >
                      <a href={"/booking/form/" + service.id}>Book Now</a>
                      <div className="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-500"></div>
                    </button>
                  </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                  <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2">
                    Service Details
                  </h1>

                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                      Pricing
                    </h2>
                    <div className="space-y-2">
                      <p className="text-gray-600 font-bold">
                        <strong className="font-medium text-gray-800">
                          Base Fare:
                        </strong>{" "}
                        {pricing.baseFare} {pricing.currencyType}
                      </p>
                      <p className="text-gray-600 font-bold">
                        <strong className="font-medium text-gray-800">
                          Additional Charge:
                        </strong>{" "}
                        {pricing.additionalCharge} {pricing.currencyType}
                      </p>
                      <p className="text-gray-600 font-bold">
                        <strong className="font-medium text-gray-800">
                          Solo Charge:
                        </strong>{" "}
                        {pricing.soloCharge} {pricing.currencyType}
                      </p>
                      <p className="text-gray-600">
                        <strong className="font-medium text-gray-800">
                          Description:
                        </strong>{" "}
                        {pricing.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                      Avaiable Schedule
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {schedule.map((sch) => (
                        <li key={sch.id} className="text-gray-600">
                          <span className="font-medium text-gray-800">
                            {sch.dayOfWeek}:
                          </span>{" "}
                          {sch.departureTime.slice(0, 5)} -{" "}
                          {sch.arrivalTime.slice(0, 5)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-4 py-8 md:pl-28">
            <div>
              <p className="pl-4 font-medium text-white">7 comments</p>
            </div>
            <ReactStars
              classNames="text-center"
              count={5}
              value={rating}
              onChange={(newRating) => setRating(newRating)}
              size={28}
              edit={true}
              isHalf={true}
              activeColor="#ffd700"
            />
            <div className="mx-auto flex w-full items-center justify-start py-4 pl-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="h-10 w-96 rounded-lg border border-gray-400 bg-gray-100 p-3 font-medium leading-normal placeholder-gray-400 placeholder:text-white focus:bg-white focus:outline-none"
                  placeholder="Add comment..."
                />
                <Link href="#" className="flex items-center justify-center">
                  <button
                    onClick={handleRateDriver}
                    className="h-10 w-20 rounded-lg bg-blue-600 font-medium text-teal-50 hover:bg-yellow-200 hover:text-white"
                  >
                    Post
                  </button>
                </Link>
              </div>
            </div>
            {userRating.map((rating) => (
              <div className="flex items-center p-4 pl-4">
                <img
                  width="48"
                  height="48"
                  src={rating?.user.photoURL}
                  alt="user-male-circle"
                />
                <div className="ml-4 w-60 border-b-2">
                  <ReactStars
                    classNames="text-center"
                    count={5}
                    value={rating.rating}
                   
                    size={16}
                    edit={false}
                    isHalf={true}
                    activeColor="#ffd700"
                  />
                  <p className="font-medium text-white">
                    {rating?.user.fullName}
                  </p>
                  <p className="ml-4 text-sm text-white">
                    {rating?.feedbackText}
                  </p>
                </div>
              </div>
            ))}
            <div className="py-4 pl-8 font-medium text-white md:flex">
              <Link href="#">See more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusDetail;
