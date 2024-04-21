const ProfileOverview = () => {
  return (
    <div>
      <main className="flex h-full overflow-hidden pt-16">

        <div className="flex-grow p-4 sm:ml-64">
          <div className="relative w-full mx-auto mt-6">
            <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 overflow-hidden break-words bg-white border-0 dark:bg-slate-850 dark:shadow-dark-xl shadow-3xl rounded-2xl bg-clip-border">
              <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-auto max-w-full px-3">
                  <div className="relative inline-flex items-center justify-center text-white transition-all duration-200 ease-in-out text-base h-19 w-19 rounded-xl">
                    <img
                      src="https://source.unsplash.com/random/100x100?sig=1"
                      alt="profile_image"
                      className="w-full shadow-2xl rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex-none w-auto max-w-full px-3 my-auto">
                  <div className="h-full">
                    <h5 className="mb-1">Sayo Kravits</h5>
                    <p className="mb-0 font-semibold leading-normal dark:opacity-60 text-sm">
                      Public Relations
                    </p>
                  </div>
                </div>
                <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                  <div className="relative right-0">
                    <ul
                      className="relative flex flex-wrap p-1 list-none bg-gray-50 rounded-xl"
                      nav-pills
                      role="tablist"
                    >
                      <li className="z-30 flex-auto text-center">
                        <a
                          className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                          nav-link
                          active
                          href="javascript:;"
                          role="tab"
                          aria-selected="true"
                        >
                          <i className="ni ni-app"></i>
                          <span className="ml-2">App</span>
                        </a>
                      </li>
                      <li className="z-30 flex-auto text-center">
                        <a
                          className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                          nav-link
                          href="javascript:;"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="ni ni-email-83"></i>
                          <span className="ml-2">Messages</span>
                        </a>
                      </li>
                      <li className="z-30 flex-auto text-center">
                        <a
                          className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-colors ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                          nav-link
                          href="javascript:;"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="ni ni-settings-gear-65"></i>
                          <span className="ml-2">Settings</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-6 mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-0">
                <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
                    <div className="flex items-center justify-between">
                      <p className="mb-0 /80">Driver and Service Info</p>
                      <div>
                        <button
                          type="button"
                          className="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                        >
                          Accept
                        </button>
                        <button
                          type="button"
                          className="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-red-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex-auto p-6">
                    <p className="leading-normal uppercase dark:opacity-60 text-sm">
                      Driver Information
                    </p>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="username"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="username"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="email"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Last Name
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="first name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Date of Birth
                          </label>
                          <input
                            type="text"
                            name="first name"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="last name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Gender
                          </label>
                          <input
                            type="text"
                            name="last name"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="first name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="first name"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="last name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Contact Number
                          </label>
                          <input
                            type="text"
                            name="last name"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="first name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            name="first name"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="last name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            name="last name"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

                    <p className="leading-normal uppercase dark:opacity-60 text-sm">
                      Sevice Info
                    </p>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="first name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Location
                          </label>
                          <input
                            type="text"
                            name="first name"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="last name"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Destination
                          </label>
                          <input
                            type="text"
                            name="last name"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="city"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Base Fare
                          </label>
                          <input
                            type="text"
                            name="city"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="country"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Additional Charge
                          </label>
                          <input
                            type="text"
                            name="country"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="postal code"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Solo Charge
                          </label>
                          <input
                            type="text"
                            name="postal code"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                        <div className="mb-4">
                          <label
                            for="address"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Pricing Description
                          </label>
                          <input
                            type="text"
                            name="address"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

                    <p className="leading-normal uppercase dark:opacity-60 text-sm">
                      Schedule
                    </p>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="city"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Day of Week
                          </label>
                          <input
                            type="text"
                            name="city"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="country"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Flee Time
                          </label>
                          <input
                            type="text"
                            name="country"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div className="mb-4">
                          <label
                            for="postal code"
                            className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Arrive Time
                          </label>
                          <input
                            type="text"
                            name="postal code"
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 mt-6 shrink-0 md:w-4/12 md:flex-0 md:mt-0">
                <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <img
                    className="w-full rounded-t-2xl"
                    src="https://source.unsplash.com/random/200x100?sig=2"
                    alt="profile cover image"
                  />

                  <div className="flex-auto p-6 pt-0">
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full max-w-full px-3 flex-1-0">
                        <div className="flex justify-center flex-col mt-4 mx-6">
                          <div className="flex text-center items-center justify-between space-x-5">
                            <span className="leading-normal text-sm opacity-80">
                              Vehicle Type
                            </span>
                            <span className="font-bold text-lg">SUV</span>
                          </div>
                          <div className="flex text-center items-center justify-between space-x-5">
                            <span className="leading-normal text-sm opacity-80">
                              Brand
                            </span>
                            <span className="font-bold text-lg">Masza</span>
                          </div>
                          <div className="flex text-center items-center justify-between space-x-5">
                            <span className="leading-normal text-sm opacity-80">
                              Seats
                            </span>
                            <span className="font-bold text-lg">22</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <h5 className="dark:text-white">
                        Mark Davis
                        <span className="font-light">, 35</span>
                      </h5>
                      <div className="mb-2 font-semibold leading-relaxed text-base dark:text-white/80 text-slate-700">
                        <i className="mr-2 dark:text-white ni ni-pin-3"></i>
                        Bucharest, Romania
                      </div>
                      <div className="mt-6 mb-2 font-semibold leading-relaxed text-base dark:text-white/80 text-slate-700">
                        <i className="mr-2 dark:text-white ni ni-briefcase-24"></i>
                        Solution Manager - Creative Tim Officer
                      </div>
                      <div className="dark:text-white/80">
                        <i className="mr-2 dark:text-white ni ni-hat-3"></i>
                        University of Computer Science
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="pt-4">
              <div className="w-full px-6 mx-auto">
                <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                  <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                    <div className="leading-normal text-center text-sm text-slate-500 lg:text-left">
                      ©
                      2024
                      made with <i className="fa fa-heart"></i> by
                      <a
                        href="https://www.creative-tim.com"
                        className="font-semibold dark:text-white text-slate-700"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                      for a better web.
                    </div>
                  </div>
                  <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                    <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com"
                          className="block px-4 pt-0 pb-1 font-normal transition-colors ease-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          Creative Tim
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/presentation"
                          className="block px-4 pt-0 pb-1 font-normal transition-colors ease-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://creative-tim.com/blog"
                          className="block px-4 pt-0 pb-1 font-normal transition-colors ease-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/license"
                          className="block px-4 pt-0 pb-1 pr-0 font-normal transition-colors ease-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileOverview;
