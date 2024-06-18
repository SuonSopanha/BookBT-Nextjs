"use client";
import { useState, useEffect } from "react";

import { useParams } from "next/navigation";
import axios from "axios";

const getRecipt = async (id) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/recipt/" + id
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const BookingReciept = () => {
  const { id } = useParams();

  const [reciept, setRecipt] = useState();
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    const fetchReciept = async () => {
      const data = await getRecipt(id);
      setRecipt(data);
    };

    fetchReciept();
  }, []);

  if (!reciept) {
    return <h1>Loading</h1>;
  }

  const handleAccept = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8000/api/v1/booking-status/" + id,
        { bookingStatus: "confirmed" },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data.message === "Booking updated successfully") {
        try {
          const notification = await axios.post(
            "http://localhost:8000/api/v1/notification",
            {
              UserID: reciept.userId,
              driverId: null,
              bookingId: id,
              notificationType: "ride_accepted",
              notificationMessage: "driver have accept the ride",
              notificationStatus: "sent",
              notificationDate: new Date(Date.now()),
            },
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );

          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecline = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8000/api/v1/booking-status/" + id,
        { bookingStatus: "canceled" },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data.message === "Booking updated successfully") {
        try {
          const notification = await axios.post(
            "http://localhost:8000/api/v1/notification",
            {
              UserID: reciept.userId,
              driverId: null,
              bookingId: id,
              notificationType: "ride_canceled",
              notificationMessage: "driver have decline the ride",
              notificationStatus: "sent",
              notificationDate: new Date(Date.now()),
            },
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );

          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(reciept);
  return (
    <div className="w-full">
      <div className="h-28"></div>
      <div className="relative overflow-hidden">
        <div className="relative bg-none px-2 pb-10 md:px-0">
          <div className="mx-auto flex flex-col justify-center md:flex-row md:space-x-20 md:space-y-0 md:px-2 px-2">
            <div className="relative w-full rounded-3xl bg-amber-50 sm:w-full md:w-4/5">
              <div className="pb-12">
                <div className="flex w-full items-center justify-center rounded-full bg-yellow-300 p-2">
                  <p className="ml-2 text-xl sm:text-2xl font-bold text-indigo-900">
                    Booking Receipt
                  </p>
                </div>
                <div className="mt-8 pt-4 text-zinc-600">
                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-full border-t-4 border-yellow-400 px-2 pt-4">
                      <div>
                        <p className="text-xs sm:text-base">Location :</p>
                      </div>
                      <div className="ml-2 font-bold">
                        <p className="text-xs sm:text-base">
                          {reciept.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end border-t-4 border-yellow-400 px-2 pt-4 italic">
                      <p className="text-xs sm:text-base mr-2 sm:mr-0">
                        ServiceID :
                      </p>
                      <p className="ml-2 text-xs sm:text-base font-medium">
                        {reciept.serviceId}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-full px-2 pb-4">
                      <div>
                        <p className="text-xs sm:text-base">Destination :</p>
                      </div>
                      <div className="ml-2 font-bold">
                        <p className="text-xs sm:text-base">
                          {reciept.destination}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end px-2 pb-4 italic">
                      <p className="text-xs sm:text-base">Invoice Date:</p>
                      <p className="ml-1 sm:ml-2 text-xs sm:text-base">
                        {reciept.createdAt.slice(0, 10)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-zinc-600">
                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-full border-t-2 border-yellow-400 px-2 pt-4">
                      <div>
                        <p className="text-xs sm:text-base">User Name:</p>
                      </div>
                      <div className="ml-2 font-bold">
                        <p className="text-xs sm:text-base">
                          {reciept.userFullName}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end border-t-2 border-yellow-400 pt-4">
                      <div className="flex w-full items-center justify-end">
                        <div className="flex w-full items-center justify-end">
                          <p className="text-xs sm:text-base">Tel:</p>
                        </div>
                        <div className="flex w-full items-center justify-end">
                          <p className="ml-0 sm:ml-2 font-bold text-xs sm:text-base">
                            {reciept.userContactNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-full px-2 pb-4">
                      <div>
                        <p className="text-xs sm:text-base">Driver Name:</p>
                      </div>
                      <div className="ml-2 font-bold">
                        <p className="text-xs sm:text-base">
                          {reciept.driverFirstName} {reciept.driverLastName}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end pb-4">
                      <div className="flex w-full items-center justify-end">
                        <p className="text-xs sm:text-base">Tel:</p>
                      </div>
                      <div className="flex w-full items-center justify-end">
                        <p className="ml-0 sm:ml-2 font-bold text-xs sm:text-base">
                          {reciept.driverContactNumber}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-full bg-yellow-200 px-2 py-2">
                      <div className="font-medium">
                        <p className="text-xs sm:text-base">Ride Date:</p>
                      </div>
                      <div className="ml-2 font-medium">
                        <p className="text-xs sm:text-base">
                          {reciept.bookingDate.slice(0, 10)}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end bg-yellow-200 px-2">
                      <div className="flex w-28 items-center justify-end font-medium md:w-full">
                        <p className="text-xs sm:text-base">PickUp Time</p>
                      </div>
                      <div className="flex w-full items-center justify-end">
                        <p className="ml-0 sm:ml-2 font-medium text-xs sm:text-base">
                          {reciept.pickupTime.slice(0, 5)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-96 px-2 py-2 md:w-full">
                      <div>
                        <p className="text-xs sm:text-base">Vehicle:</p>
                      </div>
                      <div className="ml-2 font-bold">
                        <p className="text-xs sm:text-base">
                          {reciept.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-28 items-center justify-center px-2 md:w-36">
                      <div className="flex w-12 items-center sm:justify-center justify-end md:w-full">
                        <p className="text-xs sm:text-base">Seats :</p>
                      </div>
                      <div className="flex w-8 items-center sm:justify-center justify-end md:w-12">
                        <p className="ml-0 sm:ml-2 font-bold text:xs sm:text-base">
                          {reciept.seatAmount}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end px-2">
                      <div className="flex w-24 items-center justify-end md:w-full">
                        <p className="text-xs sm:text-base">type:</p>
                      </div>
                      <div className="flex items-center justify-end md:w-full">
                        <p className="ml-1 sm:ml-2 font-bold text-xs sm:text-base">
                          {reciept.seatType}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-full bg-yellow-200 px-2 py-2">
                      <div className="font-medium">
                        <p className="text-xs sm:text-base">Seat Price :</p>
                      </div>
                      <div className="ml-2 font-bold">
                        <p className="text-xs sm:text-base">
                          {parseFloat(reciept.totalFare.slice(0, -3)) /
                            reciept.seatAmount}{" "}
                          {reciept.totalFare.slice(-3)}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end bg-yellow-200 px-2 text-lg">
                      <div className="flex w-full items-center justify-end font-bold">
                        <p className="text-xs sm:text-base font-bold">
                          X {reciept.seatType}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-52 border-b-2 border-yellow-400 px-2 py-2 font-medium">
                      <div>
                        <p className="text-xs sm:text-base">Total Price :</p>
                      </div>
                      <div className="ml-2 font-bold text-xs sm:text-base text-green-600 bg-yellow-200 px-2">
                        <p>{reciept.totalFare}</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center border-b-2 border-yellow-400 p-2">
                      <div className="flex w-full items-center justify-end">
                        <p className="text-xs sm:text-base">Payment:</p>
                      </div>
                      <div className="flex w-full items-center justify-end font-bold">
                        <p className="ml-0 sm:ml-2 text-xs sm:text-base">
                          pay-on-pickup
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full px-2 pt-4">
                    <div className="flex items-center">
                      <p className="text-xs sm:text-base ml-16">
                        Booking Status:
                      </p>
                    </div>
                    <div className="ml-4 font-bold">
                      <p className="text-xs sm:text-base text-green-600">
                        {reciept.bookingStatus}
                      </p>
                    </div>
                  </div>
                  {reciept.bookingStatus === "pending" && (
                    <p className="text-xs font-light ml-16">
                      this booking is currently pending and waiting for you to
                      confirm the ride.
                    </p>
                  )}

                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-52 py-8 font-medium">
                      <button className="relative mb-8 mt-5 flex h-8 w-28 sm:h-12 sm:w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-xl font-medium text-black shadow-lg shadow-slate-500 hover:border-2 hover:border-zinc-400 hover:shadow-none">
                        <a href="/notificationList">Back</a>
                        <div className="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-200 bg-opacity-80"></div>
                      </button>
                    </div>
                    {reciept.bookingStatus === "pending" && (
                      <div className="flex w-52 py-8 font-medium">
                        <button
                          onClick={handleAccept}
                          className="relative mb-8 mt-5 flex h-8 w-28 sm:h-12 sm:w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-xl font-medium text-black shadow-lg shadow-slate-500 hover:border-2 hover:border-zinc-400 hover:shadow-none"
                        >
                          <a>Accept</a>
                          <div className="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-200 bg-opacity-80"></div>
                        </button>
                      </div>
                    )}

                    {reciept.bookingStatus === "pending" && (
                      <div className="flex w-52 py-8 font-medium">
                        <button
                          onClick={handleDecline}
                          className="relative mb-8 mt-5 flex h-8 w-28 sm:h-12 sm:w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-xl font-medium text-black shadow-lg shadow-slate-500 hover:border-2 hover:border-zinc-400 hover:shadow-none"
                        >
                          <a>Decline</a>
                          <div className="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-200 bg-opacity-80"></div>
                        </button>
                      </div>
                    )}
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

export default BookingReciept;
