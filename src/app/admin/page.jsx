"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import LineChart from "@/components/Chart/lineChart";


const getStatistics = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/getStatistics"
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const AdminDashboard = () => {
  const app_url = process.env.APP_URL;
  const [user, setUser] = useState({});
  const [statistic, setStatistic] = useState({});
  const [chartData, setChartData] = useState({ months: [], counts: [] });
  const [loading,setLoading] = useState(true);

  
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const token = sessionStorage.getItem('token');
      try {
        // Log the token to verify it
        // Fetch user data
        const userResponse = await axios.get(
          "http://localhost:8000/api/v1/user/userInfo",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(userResponse.data.user);
        setUser(userResponse.data.user);

        if (userResponse.data.user.role !== "admin") {
          window.location.href = "/";
        }
        
        
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally{

      }

      // Set state with fetched data
    };
    const fetchStat = async () => {
      try {
        const stat = await getStatistics();
        setStatistic(stat);

        const months = stat.monthlyBookings.map((entry) => entry.month);
        const counts = stat.monthlyBookings.map((entry) =>
          parseInt(entry.count, 10)
        );

        setChartData({ months, counts });

        console.log(chartData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
    fetchStat();

  }, []);

  if(loading){
      return <dv>Loading...</dv>
  }
  return (
    <div>
      <main class="flex h-full overflow-hidden pt-8 -z-10">
        <div class="flex-grow p-4 ">
          <div class="w-full px-6 py-6 mx-auto">
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
                  href="#"
                  aria-current="false"
                  class="w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                >
                  Report
                </a>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3">
              <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div class="flex-auto p-4">
                    <div class="flex flex-row -mx-3">
                      <div class="flex-none w-2/3 max-w-full px-3">
                        <div>
                          <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:opacity-60">
                            Today Booking
                          </p>
                          <h5 class="mb-2 font-bold">
                            {statistic?.todayBookings}
                          </h5>
                        </div>
                      </div>
                      <div class="px-3 text-right basis-1/3">
                        <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                          <i class="fas fa-ticket text-lg relative top-2 text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div class="flex-auto p-4">
                    <div class="flex flex-row -mx-3">
                      <div class="flex-none w-2/3 max-w-full px-3">
                        <div>
                          <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:opacity-60">
                            User
                          </p>
                          <h5 class="mb-2 font-bold">
                            {statistic?.totalUsers}
                          </h5>
                        </div>
                      </div>
                      <div class="px-3 text-right basis-1/3">
                        <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                          <i class="fas fa-route text-lg relative top-2 text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div class="flex-auto p-4">
                    <div class="flex flex-row -mx-3">
                      <div class="flex-none w-2/3 max-w-full px-3">
                        <div>
                          <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:opacity-60">
                            New Driver
                          </p>
                          <h5 class="mb-2 font-bold">
                            {statistic?.newDriversInWeek}
                          </h5>
                        </div>
                      </div>
                      <div class="px-3 text-right basis-1/3">
                        <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                          <i class="fas fa-car text-lg relative top-2.5 text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
                <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div class="flex-auto p-4">
                    <div class="flex flex-row -mx-3">
                      <div class="flex-none w-2/3 max-w-full px-3">
                        <div>
                          <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:opacity-60">
                            New User
                          </p>
                          <h5 class="mb-2 font-bold">
                            {statistic?.newUsersInWeek}
                          </h5>
                        </div>
                      </div>
                      <div class="px-3 text-right basis-1/3">
                        <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                          <i class="fas fa-users text-lg relative top-2.5 text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap mt-6 -mx-3">
              <div class="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
                <div class="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                  <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
                    <h6 class="capitalize">Booking overview</h6>
                    <p class="mb-0 text-sm leading-normal dark:opacity-60">
                      <i class="fa fa-arrow-up text-emerald-500"></i>
                      <span class="font-semibold">4% more</span> in 2021
                    </p>
                  </div>
                  <div class="flex-auto p-4">
                    <div>
                      <LineChart data={chartData} />
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full max-w-full px-3 lg:w-4/12 lg:flex-none ml-12">
                <div
                  slider
                  class="relative w-full h-full overflow-hidden rounded-2xl"
                >
                  <div
                    slide
                    class="absolute w-full h-full transition-all duration-500"
                  >
                    <img
                      class="object-cover h-full"
                      src="https://img.freepik.com/free-vector/urban-bus-bus-stop-with-flat-design_23-2147832442.jpg"
                      alt="carousel image"
                    />
                    <div class="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5">
                      <div class="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                        <i class="top-0.75 text-xxs relative text-slate-700 ni ni-camera-compact"></i>
                      </div>
                      <h5 class="mb-1 text-white">Get started with Argon</h5>
                      <p class="dark:opacity-80 text-white">
                        There’s nothing I really wanted to do in life that I
                        wasn’t able to get good at.
                      </p>
                    </div>
                  </div>

                  <button
                    btn-next
                    class="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-right active:scale-110 top-6 right-4"
                  ></button>
                  <button
                    btn-prev
                    class="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-left active:scale-110 top-6 right-16"
                  ></button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
