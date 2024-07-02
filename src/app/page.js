"use client";

import Image from "next/image";
import Counter from "@/components/buttons";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";
import axios from "axios";

const fetchTopDrivers = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/top-drivers`
  );
  const data = response.data;
  return data;
};

export default function Home() {
  const [topDrivers, setTopDrivers] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const topDriver = await fetchTopDrivers();
      setTopDrivers(topDriver);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="min-h-screen">
        <div id="searchSection" className="mt-20 relative h-20 hidden">
          <form className="max-w-xl mx-auto">
            <div className="flex items-center justify-center">
              <div className="bg-black bg-opacity-50 px-5 py-5 rounded-lg shadow-lg">
                <div className="flex items-center me-4 mb-5">
                  <input
                    id="yellow-radio"
                    type="radio"
                    value="yellow"
                    name="colored-radio"
                    className="hidden"
                  />
                  <label
                    htmlFor="yellow-radio"
                    className="flex items-center cursor-pointer"
                  >
                    <div className="mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center">
                      <div
                        id="custom-radio-yellow"
                        className="w-3 h-3 rounded-full transition duration-200 ease-in-out"
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      TXAI Service
                    </span>
                  </label>
                  <input
                    id="red-radio"
                    type="radio"
                    value="red"
                    name="colored-radio"
                    className="hidden"
                  />
                  <label
                    htmlFor="red-radio"
                    className="flex items-center cursor-pointer"
                  >
                    <div className="mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center">
                      <div
                        id="custom-radio-red"
                        className="w-3 h-3 rounded-full transition duration-200 ease-in-out"
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      BUS Service
                    </span>
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="text"
                    id="start-location"
                    className="text-sm font-medium block w-64 p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-s-lg focus:outline-none focus:border-yellow-500"
                    placeholder="Start Location"
                    required
                  />
                  <button
                    type="button"
                    className="p-2.5 text-sm font-medium bg-gray-900 bg-opacity-50 text-yellow-300 border-2 border-yellow-300 hover:bg-yellow-500 hover:bg-opacity-30 hover:text-yellow-600 focus:outline-none focus:bg-yellow-400 focus:bg-opacity-50 focus:border-yellow-600"
                  >
                    <svg
                      className="w-4 h-4 inline-block text-white"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 16 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="end-location"
                    className="text-sm font-medium block w-64 p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-e-lg focus:outline-none focus:border-yellow-500"
                    placeholder="End Location"
                    required
                  />
                  <input
                    type="date"
                    id="start-date"
                    className="text-sm font-medium block p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-s-lg ml-2 focus:outline-none focus:border-yellow-500"
                    required
                  />
                  <input
                    type="time"
                    id="start-time"
                    className="text-sm font-medium block p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-e-lg focus:outline-none focus:border-yellow-500"
                    required
                  />
                  <button className="ml-5 p-3 text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transform transition-transform hover:scale-105 relative overflow-hidden w-36">
                    <span className="relative z-10">Search</span>
                    <span className="absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-0 mix-blend-multiply hover:opacity-50 transition-opacity duration-300"></span>
                  </button>
                </div>

                <div className="flex items-center mt-5 mx-5">
                  <span className="text-base font-medium text-gray-900 dark:text-gray-300 mr-5">
                    More options :
                  </span>
                  <label
                    htmlFor="option1"
                    className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                  >
                    <input type="checkbox" id="option1" className="hidden" />
                    <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                      <svg
                        className="w-5 h-5 text-yellow-300 hidden checkmark"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                        />
                      </svg>
                    </div>
                    Affordable
                  </label>
                  <label
                    htmlFor="option2"
                    className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                  >
                    <input type="checkbox" id="option2" className="hidden" />
                    <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                      <svg
                        className="w-5 h-5 text-yellow-300 hidden checkmark"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                        />
                      </svg>
                    </div>
                    Avaiabliity
                  </label>
                  <label
                    htmlFor="option3"
                    className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                  >
                    <input type="checkbox" id="option3" className="hidden" />
                    <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                      <svg
                        className="w-5 h-5 text-yellow-300 hidden checkmark"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                        />
                      </svg>
                    </div>
                    Nearby
                  </label>
                  <label
                    htmlFor="option4"
                    className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                  >
                    <input type="checkbox" id="option4" className="hidden" />
                    <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                      <svg
                        className="w-5 h-5 text-yellow-300 hidden checkmark"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                        />
                      </svg>
                    </div>
                    High Rating
                  </label>
                  <label
                    htmlFor="option5"
                    className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                  >
                    <input type="checkbox" id="option5" className="hidden" />
                    <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                      <svg
                        className="w-5 h-5 text-yellow-300 hidden checkmark"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                        />
                      </svg>
                    </div>
                    Popular
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="mb-10 ml-10 mt-32 h-fit w-fit bg-gray-500 bg-opacity-50 py-5 pr-5 text-white">
          <div className="ml-8 flex py-5">
            <span className="w-2 bg-yellow-400"></span>
            <p className="w-40 bg-gray-600 pl-5 text-sm">
              Taxi and bus services
            </p>
          </div>
          <p className="ml-8 text-5xl font-bold">Your Gateway</p>
          <p className="ml-8 text-5xl font-bold">to any Destination</p>
          <p className="ml-8 mr-5 mt-5 text-sm font-semibold">
            Transportation is a vital aspect of modern society, facilitating the
            <br />
            movement of people from one place to another.
          </p>
          <button className="relative mb-8 ml-8 mt-5 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-sm font-medium text-black shadow-lg">
            <a href="#">Explore More</a>
            <div className="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-white"></div>
          </button>
        </div>

        <div className="relative bg-white pb-6 pl-10 pt-2">
          <div className="mt-10 flex">
            <span className="w-2 bg-yellow-400"></span>
            <p className="w-24 bg-gray-300 pl-5 text-xs">What we do</p>
          </div>
          <div className="text-2xl font-medium">
            <p>Transportation</p>
            <p>and Service</p>
          </div>
        </div>
        <div className="relative">
          <div className="flex h-96 w-full items-center justify-center">
            <img
              src="https://www.worldhistory.org/img/c/p/1600x900/11887.jpg"
              className="h-full w-full object-cover object-top"
              alt="Full-width Image"
            />
          </div>

          <div className="inset-0 flex items-center justify-center bg-white">
            <div className="mx-auto flex max-w-screen-xl">
              <div className="-mt-40 flex h-fit w-fit flex-1 items-center bg-white pr-5 text-black">
                <div>
                  <div className="ml-8 flex py-5">
                    <span className="w-2 bg-yellow-400"></span>
                    <p className="w-fit bg-gray-300 px-5 text-sm">Why Us</p>
                  </div>
                  <p className="ml-8 text-2xl font-medium">
                    We really consider your
                  </p>
                  <p className="ml-8 text-2xl font-medium">travelling</p>
                  <p className="ml-8 mr-5 mt-5 text-xs">
                    Both taxi and bus services contribute to the overall
                    <br />
                    transportation infrastructure, offering solutions for
                    different <br />
                    travel needs and preferences.
                  </p>
                  <p className="ml-8 mr-5 mt-5 text-xs">
                    Taxis provide a more personalized and on-demand service,
                    <br />
                    while buses offer a systematic and mass transit solution for
                    <br />
                    larger groups of people.
                  </p>
                  <button
                    id="searchBook"
                    className="relative mb-8 ml-8 mt-5 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-sm font-medium text-black shadow-lg shadow-slate-500 hover:border-2 hover:border-gray-950"
                  >
                    <a href="#">Booking Now</a>
                    <div className="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-500"></div>
                  </button>
                </div>
                <div className="mt-5 flex flex-col">
                  <img
                    src="https://easycdn.blob.core.windows.net/profile-img/mekong-ekspress01.jpg "
                    className="ml-12 mr-5 w-60"
                  />
                  <img
                    src="https://ak-d.tripcdn.com/images/0351q1200094d3lyp39C4_C_568_320_Q50.jpg_.webp"
                    className="-mt-14 w-44 border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-yellow-400 pt-2">
            <div className="text-center text-2xl font-medium">
              <p>Transportating Across The City</p>
            </div>

            <div className="mx-2 mt-10 flex max-w-full items-center space-x-2 overflow-x-auto bg-yellow-400 pb-10">
              <div className="relative flex-shrink-0">
                <img
                  src="https://lostplate.com/wp-content/uploads/2020/07/24-hours-in-phnom-penh-independence-monument.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Phnom Penh</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://pppenglish.sgp1.digitaloceanspaces.com/image/main/field/image/img_6722.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Kampong Chhnang</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://live.staticflickr.com/8691/16995702166_ab7e89c9d0_z.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Pursat</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/a9/33/0d/the-namesake-of-the-city.jpg?w=1200&h=-1&s=1"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Battambong</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://memoriapalace.com/wp-content/uploads/2016/08/Phnom-Yat.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Pailin</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://www.dinewiththelocals.com/wp-content/uploads/2019/10/IMG_20191020_085059.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Banteay Meanchey</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://tourismcambodia.org/storage/uploads/category_banner/ministry-of-tourism-cambodia-2019-02-18-07-39-42am-Oddar-Meanchey-01.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Oddar Meanchey</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/14/D%27Angkor.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Siem Reap</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://www.khmertimeskh.com/wp-content/uploads/2019/01/3-1-kampong_thom_0.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Kampong Thom</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://www.greeneratravel.com/userfiles/850preahvihear.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Preah Vihear</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://www.guidetrip.info/asset/img/gallery_album/5b28ce30b7e68.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Stung Treng</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://d13jio720g7qcs.cloudfront.net/images/destinations/origin/56189a46d5846.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Kratie</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://www.khmertimeskh.com/wp-content/uploads/2022/11/48698.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Tboung Khmum</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://www.travelauthenticasia.com/photos/tours/cambodia/gallery/kampong_cham/kampong_cham_6.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Kampong cham</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://scontent.fpnh4-1.fna.fbcdn.net/v/t1.6435-9/41045760_464082490735404_1050529020413739008_n.jpg?stp=cp0_dst-jpg_e15_p403x403_q65&_nc_cat=100&ccb=1-7&_nc_sid=947906&_nc_ohc=6nL1R2vJKRAAX_Fq40d&_nc_ht=scontent.fpnh4-1.fna&oh=00_AfCa0yFJzWYhD8UfchdclUp5QfIoajLC56V2Y6HJCOup2g&oe=65CEFD68"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Prey Veng</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://www.travelauthenticasia.com/photos/tours/cambodia/gallery/kandal/krong-ta-khmau-1.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Kandal</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://static.information.gov.kh/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBKzc5QkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--efed795ea20b2e66de4287ede8ddb4351e5a31a3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTVRNMU1IZzVNREFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--30b79c7f7567bd0a04d6c485cf8a2bbc24e21d2f/IMG_0086.jpeg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Kampong Speu</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://www.khmerplaces.com/storage/provinces/September2020/doBwrCTTiseg3SMpUbsk.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Koh Kong</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://travelcdns.cambodia-travel.com/1663828081115.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Kampot</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://lostplate.com/wp-content/uploads/2020/07/24-hours-in-phnom-penh-independence-monument.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Kep</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://www.globaltimes.cn/Portals/0/attachment/2022/2022-04-17/b902e704-9931-4b98-a69b-81cb3cf011e0.jpeg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Preah Sihanouk</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sangkat_Svay_Rieng%2C_Krong_Svay_Rieng%2C_Cambodia_-_panoramio.jpg/640px-Sangkat_Svay_Rieng%2C_Krong_Svay_Rieng%2C_Cambodia_-_panoramio.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Svay Rieng</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://www.ppmlgroup.com/wp-content/uploads/2022/02/takeo-icon_orig.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Takeo</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://www.gdtp.gov.kh/wp-content/uploads/2021/01/mondulkiri-province-1024x751.jpg"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Mondulkiri</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/proxy/4XIwQJkP_MvyTlnGYqMJDTSniwazmTsnz4DGm6PLleqmlF7a93FMLqA-9tRtYONnRe1yLGZaodClg6Smu_AErkPV10GNc1SG"
                  className="h-60 w-48 object-cover"
                />
                <div className="absolute bottom-0 h-24 w-48 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                  <p className="font-medium text-white">Rattanakkiri</p>
                  <div className="flex space-x-2">
                    <p className="text-xs text-yellow-300">
                      popular and fantasy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-full items-center justify-center bg-white p-10">
            <div>
              <div className="md:max-w-fixed flex flex-col items-center rounded-lg border border-gray-200 bg-white drop-shadow-lg md:flex-row dark:bg-white">
                <div>
                  <img
                    className="h-full w-full rounded-t-lg object-cover md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
                    src="https://vietfuntravel.com/image/cache/data/open%20bus/thaco%2035c-max-500.jpg"
                    alt=""
                  />
                  <div className="ml-10 flex w-96 flex-col justify-start text-left">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      Bus service
                    </h5>
                    <p className="mb-3 font-medium text-gray-700 dark:text-black">
                      Bus Service: Bus services are a form
                      <br />
                      of public transportation that <br />
                      operates up and dropping off
                      <br />
                      passengers at designated stops.
                    </p>
                    <a href="/taxi-list">
                      <button className="mb-10 mt-5 h-10 w-28 rounded-3xl border-2 border-black text-sm font-medium hover:bg-amber-200">
                        Find Now
                      </button>
                    </a>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <img
                      className="h-full w-full rounded-t-lg md:mt-12 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src="https://media.chromedata.com/MediaGallery/media/MjkzOTU4Xk1lZGlhIEdhbGxlcnk/mBFi9OSLIrO47px0j7F3GsTl6w69F50xp-wusXYp7k12QghR05TechyqcaK3G60Nz_n6CUtwID0S8kCCeS3AjM-ggHO_VEGSKBssGCJI5smUEE7b8SVNHiByp6_eQSbBhhM7P6v56SdA8Fa6Mdgbm6L9wiPoHNanEvLIPBU82I-D0KNfPHYyPAjhQCLoKyGc/cc_2024TOV110007_01_640_1J9.png"
                    />
                  </div>
                  <div className="ml-10 flex w-96 flex-col justify-start text-left">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      Taxi service
                    </h5>
                    <p className="mb-3 font-medium text-gray-700 dark:text-black">
                      Taxi Service: A taxi service is a<br />
                      convenient and flexible mode of
                      <br />
                      transportation where individuals can
                      <br />
                      hire a private vehicle for personal travel.
                    </p>
                    <a href="/taxi-list">
                      <button className="mb-10 mt-5 h-10 w-28 rounded-3xl border-2 border-black text-sm font-medium hover:bg-amber-200">
                        Find Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center bg-white">
            <div className="grid grid-cols-2 p-10">
              <div className="mx-auto flex items-center border-b-2 border-r-2 border-t-2 p-5">
                <p className="mr-5 text-4xl font-medium">1294</p>
                <span className="h-5 w-5 bg-yellow-400"></span>
                <p className="w-fit px-5 text-sm font-medium">Member of Taxi</p>
              </div>
              <div className="mx-auto -ml-2 flex items-center border-b-2 border-t-2 p-5 pl-10">
                <p className="mr-5 text-4xl font-medium">3594</p>
                <span className="h-5 w-5 bg-yellow-400"></span>
                <p className="w-fit px-5 text-sm font-medium">Member of Bus</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center bg-white pt-5">
            <span className="w-2 bg-yellow-400"></span>
            <p className="w-fit bg-gray-300 px-5 text-sm font-medium">
              The Transporters
            </p>
          </div>
          <div className="bg-white p-5">
            <div className="text-center text-4xl font-medium">
              <p>Our Drivers</p>
            </div>
          </div>
        </div>
        <div className="relative bg-white pt-2">
          <div className="text-center text-2xl font-medium">
            <p>Transportating Across The City</p>
          </div>

          <div className="mx-auto mt-10 pl-96 pr-2 flex md:pl-48 md:pr-4 flex-row items-center justify-center space-x-4 space-y-4 overflow-scroll bg-white pb-10 md:flex-row md:space-x-20 md:space-y-0">
            {topDrivers?.map((driver) => (
              <div key={driver.id} className="relative flex-shrink-0">
                <img src={driver.photoURL} className="h-80 w-52 object-cover" />
                <div className="absolute bottom-0 flex h-20 w-full flex-col justify-center bg-slate-800 pl-2 pt-2 text-left">
                  <div className="flex">
                    <div className="flex -mt-4">
                      <ReactStars
                        count={5}
                        value={driver.averageRating}
                        size={20}
                        edit={false}
                        isHalf={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div className="-mt-9 ml-auto flex h-8 items-center justify-center space-x-1 bg-amber-300 p-1">
                      <a href="#">
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                          alt="facebook-new"
                        />
                      </a>
                      <a href="#">
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/ios-glyphs/30/twitter--v1.png"
                          alt="twitter--v1"
                        />
                      </a>
                      <a href="#">
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png"
                          alt="instagram-new--v1"
                        />
                      </a>
                    </div>
                  </div>
                  <p className="ml-2 font-medium text-white">
                    {driver.firstName} {driver.lastName}
                  </p>
                  <div className="m-2 flex justify-between space-x-6 align-middle">
                    <p className="text-sm text-white">Driver</p>
                    <p className="pl-5 text-sm text-white">
                      {driver.contactNumber}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
