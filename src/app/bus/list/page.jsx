const BusList = () => {
  return (
    <>
      <div id="searchSection" className="mt-20 relative h-20 hidden">
        <form className="max-w-xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="bg-black bg-opacity-50 px-5 py-5 rounded-lg shadow-lg ">
              <div className="flex items-center me-4 mb-5">
                <input
                  id="yellow-radio"
                  type="radio"
                  value="yellow"
                  name="colored-radio"
                  className="hidden"
                ></input>
                <label
                  for="yellow-radio"
                  className="flex items-center cursor-pointer"
                >
                  <div className="mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center">
                    <div
                      id="custom-radio-yellow"
                      className="w-3 h-3  rounded-full transition duration-200 ease-in-out"
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
                ></input>
                <label
                  for="red-radio"
                  className="flex items-center cursor-pointer"
                >
                  <div className="mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center">
                    <div
                      id="custom-radio-red"
                      className="w-3 h-3  rounded-full transition duration-200 ease-in-out"
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
                ></input>
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
                ></input>
                <input
                  type="date"
                  id="start-date"
                  className="text-sm font-medium block p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-s-lg ml-2 focus:outline-none focus:border-yellow-500"
                  required
                ></input>
                <input
                  type="time"
                  id="start-time"
                  className="text-sm font-medium block p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-e-lg  focus:outline-none focus:border-yellow-500"
                  required
                ></input>
                <button className="ml-5 p-3 text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transform transition-transform hover:scale-105 relative overflow-hidden w-36">
                  <span className="relative z-10">Search</span>
                  <span className="absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-0 mix-blend-multiply hover:opacity-50 transition-opacity duration-300"></span>
                </button>
              </div>

              <div className="flex items-center mt-5 mx-5 ">
                <span className="text-base font-medium text-gray-900 dark:text-gray-300 mr-5">
                  More options :
                </span>
                <label
                  for="option1"
                  className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                >
                  <input
                    type="checkbox"
                    id="option1"
                    className="hidden"
                  ></input>
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
                  for="option2"
                  className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                >
                  <input
                    type="checkbox"
                    id="option2"
                    className="hidden"
                  ></input>
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
                  for="option3"
                  className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                >
                  <input
                    type="checkbox"
                    id="option3"
                    className="hidden"
                  ></input>
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
                  for="option4"
                  className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                >
                  <input
                    type="checkbox"
                    id="option4"
                    className="hidden"
                  ></input>
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
                  for="option5"
                  className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                >
                  <input
                    type="checkbox"
                    id="option5"
                    className="hidden"
                  ></input>
                  <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2 ">
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

      <div className="mt-36 h-fit"></div>
      <div className="relative">
        <div className="relative bg-white pt-2">
          <div className="text-center text-2xl font-medium"></div>

          <div className="-mt-32 flex h-32 w-full flex-col items-center justify-end bg-gradient-to-tr from-yellow-300 to-yellow-100 p-12">
            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <div className="relative flex-shrink-0">
                <input
                  type="text"
                  placeholder="Search Bus"
                  className="block h-14 w-full rounded-lg px-4 py-3 text-lg font-medium text-black md:w-96"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-1 flex-shrink-0 items-center justify-center gap-x-1 bg-transparent p-2 font-semibold text-white"
                >
                  <img
                    className="object-contain"
                    width="25"
                    height="25"
                    src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png"
                    alt="search--v1"
                  />
                </button>
              </div>

              <div className="h-14 items-center justify-center rounded-md bg-white p-2 text-center md:w-44">
                <div className="flex justify-center">
                  <img
                    className="object-contain"
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-rounded/24/calendar--v1.png"
                    alt="calendar--v1"
                  />
                  <p className="ml-2 font-medium text-zinc-600">Pick-up date</p>
                </div>
                <p className="text-xs font-medium">Sun, 10 Dec</p>
              </div>

              <div className="h-14 items-center justify-center rounded-md bg-white p-2 text-center md:w-44">
                <div className="flex items-center justify-center">
                  <img
                    className="object-contain"
                    width="20"
                    height="20"
                    src="https://img.icons8.com/windows/32/clock--v1.png"
                    alt="clock--v1"
                  />
                  <p className="ml-2 font-medium text-zinc-600">Time</p>
                </div>
                <p className="text-xs font-medium">10:00 AM</p>
              </div>

              <a href="#">
                <div className="flex h-14 w-full items-center justify-center rounded-lg bg-blue-800 p-2 font-medium text-white md:w-24">
                  <p>Search</p>
                </div>
              </a>
            </div>
          </div>

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
        <div className="relative bg-white pt-2">
          <div className="flex h-full items-center justify-center bg-white p-10">
            <div className="border-t-2 border-yellow-500">
              <div className="md:max-w-fixed flex flex-col items-center rounded-lg md:flex-row dark:bg-white">
                <img
                  className="h-full w-full object-cover md:h-auto md:w-96 md:rounded-none"
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
                <div className="ml-10 mt-4 flex h-full w-full flex-col justify-start">
                  <div className="flex h-full items-start justify-center">
                    <div className="items-left flex flex-col text-left">
                      <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios-filled/50/FAB005/calendar--v1.png"
                        alt="calendar--v1"
                      />
                      <p className="text-center text-2xl font-medium">08</p>
                      <p className="font-medium">March</p>
                    </div>
                    <div className="ml-10 items-center">
                      <p className="whitespace-nowrap text-xl font-bold">
                        PORFOLIO & CONTACT
                      </p>
                      <div className="mt-2 flex items-center">
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                          alt="facebook-new"
                        />
                        <p className="ml-2 font-medium">KAKA Jr</p>
                      </div>
                      <div className="mt-2 flex items-center">
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                          alt="phone--v1"
                        />
                        <p className="ml-2 font-medium">097 777 8888</p>
                      </div>
                      <div className="mb-4 mt-2 flex items-center">
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/windows/32/clock--v1.png"
                          alt="clock--v1"
                        />
                        <p className="ml-2 font-medium">10 AM</p>
                        <div className="ml-4 mt-5 flex">
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                        </div>
                      </div>
                      <div className="my-6 flex items-center justify-center">
                        <a href="/taxi-detail">
                          <button className="h-10 w-28 rounded-3xl border-2 border-black bg-amber-200 text-sm font-medium hover:border-amber-200">
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

          <div className="flex h-full items-center justify-center bg-white p-10">
            <div className="border-t-2 border-yellow-500">
              <div className="md:max-w-fixed flex flex-col items-center rounded-lg md:flex-row dark:bg-white">
                <img
                  className="h-full w-full object-cover md:h-auto md:w-96 md:rounded-none"
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
                <div className="ml-10 mt-4 flex h-full w-full flex-col justify-start">
                  <div className="flex h-full items-start justify-center">
                    <div className="items-left flex flex-col text-left">
                      <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios-filled/50/FAB005/calendar--v1.png"
                        alt="calendar--v1"
                      />
                      <p className="text-center text-2xl font-medium">08</p>
                      <p className="font-medium">March</p>
                    </div>

                    <div className="ml-10 items-center">
                      <p className="whitespace-nowrap text-xl font-bold">
                        PORFOLIO & CONTACT
                      </p>
                      <div className="mt-2 flex items-center">
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                          alt="facebook-new"
                        />
                        <p className="ml-2 font-medium">KAKA Jr</p>
                      </div>
                      <div className="mt-2 flex items-center">
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                          alt="phone--v1"
                        />
                        <p className="ml-2 font-medium">097 777 8888</p>
                      </div>
                      <div className="mb-4 mt-2 flex items-center">
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/windows/32/clock--v1.png"
                          alt="clock--v1"
                        />
                        <p className="ml-2 font-medium">10 AM</p>
                        <div className="ml-4 mt-5 flex">
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                        </div>
                      </div>
                      <div className="my-6 flex items-center justify-center">
                        <a href="/taxi-detail">
                          <button className="h-10 w-28 rounded-3xl border-2 border-black bg-amber-200 text-sm font-medium hover:border-amber-200">
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

          <div className="flex h-full items-center justify-center bg-white p-10">
            <div className="border-t-2 border-yellow-500">
              <div className="md:max-w-fixed flex flex-col items-center rounded-lg md:flex-row dark:bg-white">
                <img
                  className="h-full w-full object-cover md:h-auto md:w-96 md:rounded-none"
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
                <div className="ml-10 mt-4 flex h-full w-full flex-col justify-start">
                  <div className="flex h-full items-start justify-center">
                    <div className="items-left flex flex-col text-left">
                      <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios-filled/50/FAB005/calendar--v1.png"
                        alt="calendar--v1"
                      />
                      <p className="text-center text-2xl font-medium">08</p>
                      <p className="font-medium">March</p>
                    </div>

                    <div className="ml-10 items-center">
                      <p className="whitespace-nowrap text-xl font-bold">
                        PORFOLIO & CONTACT
                      </p>
                      <div className="mt-2 flex items-center">
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                          alt="facebook-new"
                        />
                        <p className="ml-2 font-medium">KAKA Jr</p>
                      </div>
                      <div className="mt-2 flex items-center">
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                          alt="phone--v1"
                        />
                        <p className="ml-2 font-medium">097 777 8888</p>
                      </div>
                      <div className="mb-4 mt-2 flex items-center">
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/windows/32/clock--v1.png"
                          alt="clock--v1"
                        />
                        <p className="ml-2 font-medium">10 AM</p>
                        <div className="ml-4 mt-5 flex">
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                        </div>
                      </div>
                      <div className="my-6 flex items-center justify-center">
                        <a href="/bus-list">
                          <button className="h-10 w-28 rounded-3xl border-2 border-black bg-amber-200 text-sm font-medium hover:border-amber-200">
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

          <div className="flex h-full items-center justify-center bg-white p-10">
            <div className="border-t-2 border-yellow-500">
              <div className="md:max-w-fixed flex flex-col items-center rounded-lg md:flex-row dark:bg-white">
                <img
                  className="h-full w-full object-cover md:h-auto md:w-96 md:rounded-none"
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
                <div className="ml-10 mt-4 flex h-full w-full flex-col justify-start">
                  <div className="flex h-full items-start justify-center">
                    <div className="items-left flex flex-col text-left">
                      <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios-filled/50/FAB005/calendar--v1.png"
                        alt="calendar--v1"
                      />
                      <p className="text-center text-2xl font-medium">08</p>
                      <p className="font-medium">March</p>
                    </div>

                    <div className="ml-10 items-center">
                      <p className="whitespace-nowrap text-xl font-bold">
                        PORFOLIO & CONTACT
                      </p>
                      <div className="mt-2 flex items-center">
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                          alt="facebook-new"
                        />
                        <p className="ml-2 font-medium">KAKA Jr</p>
                      </div>
                      <div className="mt-2 flex items-center">
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                          alt="phone--v1"
                        />
                        <p className="ml-2 font-medium">097 777 8888</p>
                      </div>
                      <div className="mb-4 mt-2 flex items-center">
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/windows/32/clock--v1.png"
                          alt="clock--v1"
                        />
                        <p className="ml-2 font-medium">10 AM</p>
                        <div className="ml-4 mt-5 flex">
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/filled-star--v1.png"
                            alt="filled-star--v1"
                            className="-mt-5 h-5 w-5"
                          />
                        </div>
                      </div>
                      <div className="my-6 flex items-center justify-center">
                        <a href="/bus-list">
                          <button className="h-10 w-28 rounded-3xl border-2 border-black bg-amber-200 text-sm font-medium hover:border-amber-200">
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
