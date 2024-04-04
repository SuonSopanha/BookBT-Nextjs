

const BookingForm = () => {
  return (
    <div className="w-full">
      <div className="h-28"></div>
      <div className="relative overflow-hidden">
        <div className="relative bg-none px-2 py-10 md:px-0">
          <div className="mx-auto flex flex-col justify-center md:flex-row md:space-x-20 md:space-y-0">
            <div className="relative w-full rounded-3xl bg-amber-50 md:w-1/2">
              <div className="pb-12">
                <div className="flex w-full items-center justify-center rounded-full bg-yellow-300 p-2">
                  <p className="ml-2 text-2xl font-bold text-indigo-900">
                    Booking Form
                  </p>
                </div>

                <div className="mt-8 pt-4 text-zinc-600">
                  <div className="flex w-full px-4 md:px-28">
                    <div className="w-full rounded-xl border-2 border-gray-400 px-2 py-4">
                      <div className="pl-4">
                        <p>Phnom Penh - Siem Reap</p>
                        <div className="flex">
                          <p>Date :</p>
                          <p className="ml-2">Monday</p>
                        </div>
                        <div className="flex">
                          <p>Time :</p>
                          <p className="ml-2">10:00 AM</p>
                        </div>
                      </div>

                      <div className="flex-col items-center justify-center px-4 py-4 md:flex md:flex-row md:space-x-9">
                        <div>
                          <p className="text-center md:text-left">
                            Pick up off location
                          </p>
                          <div className="flex w-full items-center justify-center">
                            <p className="relative ">Drop off location</p>
                            <div className="h-auto w-52 rounded-lg bg-gray-300">
                              <img
                                src="https://img.icons8.com/ios-filled/50/228BE6/apple-phone.png"
                                alt="apple-phone"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-center md:text-left">
                            Drop off location
                          </p>
                          <div className="flex w-full items-center justify-center">
                            <p className="relative ">Drop off location</p>
                            <div className="h-auto w-52 rounded-lg bg-gray-300">
                              <img
                                src="https://img.icons8.com/ios-filled/50/228BE6/apple-phone.png"
                                alt="apple-phone"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-28">
                    <div className="w-full rounded-xl px-2 py-4">
                      <div>
                        <p className="py-2 text-sm font-medium">
                          Plan your visit and book your services with ease
                        </p>
                        <div className="w-full">
                          <input
                            type="text"
                            className="w-full rounded-lg border-2 border-gray-500 bg-slate-300 p-2 align-middle font-medium"
                            placeholder=" Name"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-4 py-8">
                        <div className="w-full">
                          <input
                            type="text"
                            className="w-full rounded-lg border-2 border-gray-500 bg-slate-300 p-2 align-middle font-medium"
                            placeholder="Location"
                          />
                        </div>
                        <div className="w-full">
                          <input
                            type="text"
                            className="w-full rounded-lg border-2 border-gray-500 bg-slate-300 p-2 align-middle font-medium"
                            placeholder=" Destination"
                          />
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <div className="w-full">
                          <p className="font-medium">Date</p>
                          <input
                            type="text"
                            className="w-full rounded-lg border-2 border-gray-500 bg-slate-300 p-2 align-middle font-medium"
                            placeholder="dd/mm/yy"
                          />
                        </div>
                        <div className="w-full">
                          <p className="font-medium">Time</p>
                          <input
                            type="text"
                            className="w-full rounded-lg border-2 border-gray-500 bg-slate-300 p-2 align-middle font-medium"
                            placeholder="Time"
                          />
                        </div>
                      </div>

                      <div className="flex w-full space-x-4 py-10">
                        <div className="w-full space-y-4">
                          <input
                            type="text"
                            className="w-full rounded-lg border-2 border-gray-500 bg-slate-300 p-2 align-middle font-medium"
                            placeholder="Contact number"
                          />
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Description"
                            className="h-40 w-full rounded-lg border-2 border-gray-500 bg-slate-300 p-2 font-medium md:h-60"
                          ></textarea>
                        </div>
                        <div className="spa h-full w-full">
                          <div className="flex h-full w-full space-x-4 rounded-lg bg-gray-400 p-4">
                            <div className="text-sm">
                              <p>Only one seat</p>
                              <p>Number of seats</p>
                            </div>
                            <div>
                              <div className="flex items-center justify-center">
                                <input
                                  className="peer/published h-6 w-6"
                                  type="radio"
                                  name="status"
                                />
                              </div>
                              <div className="flex h-full items-center">
                                <input
                                  type="text"
                                  className="h-6 w-10 rounded-full border-2 border-gray-500 bg-white p-2 text-center align-middle font-medium"
                                  placeholder="0"
                                />
                              </div>
                            </div>
                            <div className="w-32">
                              <div className="text-sm">
                                <p>Select your seats</p>
                              </div>
                              <div className="mt-2">
                                <button
                                  id="dropdownDefaultButton"
                                  data-dropdown-toggle="dropdown"
                                  className="inline-flex items-center rounded-lg bg-white px-2 py-2.5 text-center text-sm font-medium text-gray-400 hover:bg-yellow-200 focus:bg-white focus:outline-none focus:ring-4 dark:hover:bg-yellow-200 dark:focus:bg-yellow-200"
                                  type="button"
                                >
                                  Position
                                  <svg
                                    className="ms-3 h-2.5 w-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="m1 1 4 4 4-4"
                                    />
                                  </svg>
                                </button>
                                <div
                                  id="dropdown"
                                  className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                                >
                                  <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDefaultButton"
                                  >
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Front
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Middle
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Back
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        Window
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-44 w-full items-center justify-center">
                            <button className="relative mb-8 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-sm font-medium text-black shadow-lg shadow-slate-500 hover:border-2 hover:border-zinc-400 hover:shadow-none">
                              <a href="bookingRequest.html">Confirm Booking</a>
                              <div className="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-200 bg-opacity-80"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="h-20 w-full bg-sky-950"></div>
        <div className="relative bg-sky-800">
          <div className="mx-auto flex flex-col justify-center space-y-4 p-4 md:flex-row md:space-x-20 md:space-y-0">
            <div className="relative -mt-24 rounded-lg bg-sky-900 text-white">
              <div className="my-2 flex h-20 items-center justify-center">
                <p className="text-4xl font-bold">TaxiBus Service</p>
              </div>

              <div className="m-4 pb-12">
                <div>
                  <p>
                    Laverage agile framworks to provide a <br />
                    robust synopsis for strategy collaborative <br />
                    thinking for further the overall value <br />
                    proposition.
                  </p>
                </div>
                <div className="my-2 flex">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/circled-envelope.png"
                    alt="circled-envelope"
                  />
                  <div className="ml-2">
                    <p className="font-bold">Email</p>
                    <p>TaxiBus777@gmial.com</p>
                  </div>
                </div>
                <div className="my-2 flex">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/ios-filled/50/228BE6/apple-phone.png"
                    alt="apple-phone"
                  />
                  <div className="ml-2">
                    <p className="font-bold">Call Us</p>
                    <p>010 23 1010 / 079 643 5050</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex h-full items-center justify-center">
                <div className="relative w-48 rounded-lg bg-sky-800 p-4 text-white">
                  <div className="items-left flex flex-col space-y-4 font-medium">
                    <p>
                      <a href="#" className="hover:border-b-2">
                        About Us
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Our Team
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Our Project
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Pricing
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Contact
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex h-full items-center justify-center">
                <div className="relative w-48 rounded-lg bg-sky-800 p-4 text-white">
                  <div className="items-left flex flex-col space-y-4 font-medium">
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Style Guide
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Changelog
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        License
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Protected
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Not Found
                      </a>
                    </p>
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

export default BookingForm;
