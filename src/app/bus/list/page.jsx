"use client";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { useEffect,useState } from "react";

const getAllServices = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/service/`);
    const data = response.data;
    return data;
  } catch (error) {
    return [];
  }
};

const BusList = () => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    const fetchServiceList = async () => {
      const serviceList = await getAllServices();
      setServiceList(serviceList);
    };
    fetchServiceList();
  }, []);
  

  console.log(serviceList);
  return (
    <>
      <div className="mt-36 h-fit"></div>
      <div className="relative">
        <div className="relative bg-white pt-2">
          <div className="text-center text-2xl font-medium"></div>

          <div className="bg-white p-5">
            <div className="text-center text-4xl font-medium">
              <p className="inline border-b-4 border-yellow-500">
                Taxi Services
              </p>
              <div className="flex justify-center bg-white pt-5">
                <span className="w-2 bg-yellow-400"></span>
                <p className="w-fit bg-gray-300 px-5 text-sm font-medium">
                  View Details
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-white pt-2 ">
          {serviceList.map((service) => (
            <div key={service.service.id} className="flex h-full items-center justify-center  bg-gradient-to-r from-white via-gray-100 to-white p-3 rounded-lg shadow-lg">
              <div className="border-t-2 border-yellow-500">
                <div className="md:max-w-fixed flex flex-col items-center rounded-lg md:flex-row  dark:bg-white">
                  <img
                    className="h-full w-full object-cover md:h-auto md:w-96 md:rounded-none"
                    src={service.service.vehiclePictureURL[0]}
                    alt=""
                  />
                  <div className="ml-10 mt-4 flex h-full w-full flex-col justify-start">
                    <div className="flex h-full items-start justify-center">
                      <div className="ml-10 items-center">
                        <p className="whitespace-nowrap text-xl font-bold">
                          {service.service.location} -{" "}
                          {service.service.destination}
                        </p>
                        <div className="mt-2 flex items-center">
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/ios-glyphs/30/user--v1.png"
                            alt="facebook-new"
                          />
                          <p className="ml-2 font-medium">
                            {service.driver.firstName} {service.driver.lastName}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center">
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                            alt="phone--v1"
                          />
                          <p className="ml-2 font-medium">
                            {service.driver.contactNumber}
                          </p>
                        </div>
                        <div className="mb-4 mt-2 flex items-center">
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/windows/32/clock--v1.png"
                            alt="clock--v1"
                          />
                          <p className="ml-2 font-medium">
                            {service.schedule.departureTime.slice(0, 5)}
                          </p>
                        </div>
                        <div className="mb-4 mt-2 flex items-center">
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/windows/32/money--v1.png"
                            alt="clock--v1"
                          />
                          <p className="ml-2 font-medium">
                            {service.pricing.baseFare} {service.pricing.currencyType}
                          </p>
                        </div>
                        <div className="flex">
                          <ReactStars
                            classNames="text-center"
                            count={5}
                            value={service.driver.averageRating}
                            size={24}
                            edit={false}
                            isHalf={true}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div className="my-6 flex items-center justify-center">
                          <a>
                            <button
                              onClick={() => {
                                window.location.href = "/bus/" + service.service.id;
                              }}
                              className="relative mt-6 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-400 to-amber-700 text-sm font-medium text-gray-900 shadow-lg hover:border-2 hover:border-gray-800 transition ease-in-out duration-150"
                              >
                              View Details
                            </button>
                          </a>
                        </div>
                      </div>
                      <a href="compareTaxi.html" className="ml-10">
                        <img
                          width="30"
                          height="30"
                          src="https://img.icons8.com/ios-glyphs/30/more.png"
                          alt="more"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <nav
            aria-label="Page navigation example"
            className="flex items-center justify-center p-4"
          >
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-yellow-700 bg-yellow-200 border border-e-0 border-yellow-300 rounded-s-lg hover:bg-yellow-100 hover:text-yellow-600 dark:bg-yellow-200 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-700 bg-yellow-200 border border-yellow-300 hover:bg-yellow-100 hover:text-yellow-600 dark:bg-yellow-200 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-700 bg-yellow-200 border border-yellow-300 hover:bg-yellow-100 hover:text-yellow-600 dark:bg-yellow-200 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-blue-600 border border-yellow-300 bg-yellow-200 hover:bg-yellow-100 hover:text-yellow-600 dark:border-yellow-700 dark:bg-yellow-500 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-700 bg-yellow-200 border border-yellow-300 hover:bg-yellow-100 hover:text-yellow-600 dark:bg-yellow-200 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-700 bg-yellow-200 border border-yellow-300 hover:bg-yellow-100 hover:text-yellow-600 dark:bg-yellow-200 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-700 bg-yellow-200 border border-yellow-300 rounded-e-lg hover:bg-yellow-100 hover:text-yellow-600 dark:bg-yellow-200 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default BusList;
