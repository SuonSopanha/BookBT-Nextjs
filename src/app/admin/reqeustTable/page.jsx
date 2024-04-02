const AdminRequestTable = () => {
  return (
    <div>
      <main class="flex h-full overflow-hidden pt-16">
        <aside
          id="default-sidebar"
          class="fixed left-0 z-20 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  href="adminDashboard.html"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span class="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Report</span>
                  <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Pro
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="adminTable.html"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Request</span>
                  <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div class="flex-grow p-4 sm:ml-64">
          <div class="relative w-full mx-auto mt-6">
            <div class="relative flex flex-col flex-auto min-w-0 p-4 mx-6 overflow-hidden break-words bg-white border-0 dark:bg-slate-850 dark:shadow-dark-xl shadow-3xl rounded-2xl bg-clip-border">
              <div class="flex flex-wrap -mx-3">
                <div class="flex-none w-auto max-w-full px-3">
                  <div class="relative inline-flex items-center justify-center text-white transition-all duration-200 ease-in-out text-base h-19 w-19 rounded-xl">
                    <img
                      src="https://source.unsplash.com/random/100x100?sig=1"
                      alt="profile_image"
                      class="w-full shadow-2xl rounded-xl"
                    />
                  </div>
                </div>
                <div class="flex-none w-auto max-w-full px-3 my-auto">
                  <div class="h-full">
                    <h5 class="mb-1">Sayo Kravits</h5>
                    <p class="mb-0 font-semibold leading-normal dark:opacity-60 text-sm">
                      Public Relations
                    </p>
                  </div>
                </div>
                <div class="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                  <div class="relative right-0">
                    <ul
                      class="relative flex flex-wrap p-1 list-none bg-gray-50 rounded-xl"
                      nav-pills
                      role="tablist"
                    >
                      <li class="z-30 flex-auto text-center">
                        <a
                          class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                          nav-link
                          active
                          href="javascript:;"
                          role="tab"
                          aria-selected="true"
                        >
                          <i class="ni ni-app"></i>
                          <span class="ml-2">App</span>
                        </a>
                      </li>
                      <li class="z-30 flex-auto text-center">
                        <a
                          class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                          nav-link
                          href="javascript:;"
                          role="tab"
                          aria-selected="false"
                        >
                          <i class="ni ni-email-83"></i>
                          <span class="ml-2">Messages</span>
                        </a>
                      </li>
                      <li class="z-30 flex-auto text-center">
                        <a
                          class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-colors ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                          nav-link
                          href="javascript:;"
                          role="tab"
                          aria-selected="false"
                        >
                          <i class="ni ni-settings-gear-65"></i>
                          <span class="ml-2">Settings</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-6 mx-auto">
            <div class="flex flex-wrap -mx-3">
              <div class="w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-0">
                <div class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
                    <div class="flex items-center justify-between">
                      <p class="mb-0 /80">Driver and Service Info</p>
                      <div>
                        <button
                          type="button"
                          class="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                        >
                          Accept
                        </button>
                        <button
                          type="button"
                          class="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-red-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="flex-auto p-6">
                    <p class="leading-normal uppercase dark:opacity-60 text-sm">
                      Driver Information
                    </p>
                    <div class="flex flex-wrap -mx-3">
                      <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="username"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="username"
                            value="lucky.jesse"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="email"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Last Name
                          </label>
                          <input
                            type="email"
                            name="email"
                            value="jesse@example.com"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="first name"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Date of Birth
                          </label>
                          <input
                            type="text"
                            name="first name"
                            value="Jesse"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="last name"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Gender
                          </label>
                          <input
                            type="text"
                            name="last name"
                            value="Lucky"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="first name"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="first name"
                            value="Jesse"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="last name"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Contact Number
                          </label>
                          <input
                            type="text"
                            name="last name"
                            value="Lucky"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="first name"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            name="first name"
                            value="Jesse"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="last name"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            name="last name"
                            value="Lucky"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <hr class="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

                    <p class="leading-normal uppercase dark:opacity-60 text-sm">
                      Sevice Info
                    </p>
                    <div class="flex flex-wrap -mx-3">
                      <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="first name"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Location
                          </label>
                          <input
                            type="text"
                            name="first name"
                            value="Jesse"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="last name"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Destination
                          </label>
                          <input
                            type="text"
                            name="last name"
                            value="Lucky"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div class="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="city"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Base Fare
                          </label>
                          <input
                            type="text"
                            name="city"
                            value="New York"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="country"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Additional Charge
                          </label>
                          <input
                            type="text"
                            name="country"
                            value="United States"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="postal code"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Solo Charge
                          </label>
                          <input
                            type="text"
                            name="postal code"
                            value="437300"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div class="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                        <div class="mb-4">
                          <label
                            for="address"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Pricing Description
                          </label>
                          <input
                            type="text"
                            name="address"
                            value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <hr class="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

                    <p class="leading-normal uppercase dark:opacity-60 text-sm">
                      Schedule
                    </p>
                    <div class="flex flex-wrap -mx-3">
                      <div class="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="city"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Day of Week
                          </label>
                          <input
                            type="text"
                            name="city"
                            value="New York"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="country"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Flee Time
                          </label>
                          <input
                            type="text"
                            name="country"
                            value="United States"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                        <div class="mb-4">
                          <label
                            for="postal code"
                            class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 /80"
                          >
                            Arrive Time
                          </label>
                          <input
                            type="text"
                            name="postal code"
                            value="437300"
                            class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full max-w-full px-3 mt-6 shrink-0 md:w-4/12 md:flex-0 md:mt-0">
                <div class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <img
                    class="w-full rounded-t-2xl"
                    src="https://source.unsplash.com/random/200x100?sig=2"
                    alt="profile cover image"
                  />

                  <div class="flex-auto p-6 pt-0">
                    <div class="flex flex-wrap -mx-3">
                      <div class="w-full max-w-full px-3 flex-1-0">
                        <div class="flex justify-center flex-col mt-4 mx-6">
                          <div class="flex text-center items-center justify-between space-x-5">
                            <span class="leading-normal text-sm opacity-80">
                              Vehicle Type
                            </span>
                            <span class="font-bold text-lg">SUV</span>
                          </div>
                          <div class="flex text-center items-center justify-between space-x-5">
                            <span class="leading-normal text-sm opacity-80">
                              Brand
                            </span>
                            <span class="font-bold text-lg">Masza</span>
                          </div>
                          <div class="flex text-center items-center justify-between space-x-5">
                            <span class="leading-normal text-sm opacity-80">
                              Seats
                            </span>
                            <span class="font-bold text-lg">22</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-6 text-center">
                      <h5 class="dark:text-white">
                        Mark Davis
                        <span class="font-light">, 35</span>
                      </h5>
                      <div class="mb-2 font-semibold leading-relaxed text-base dark:text-white/80 text-slate-700">
                        <i class="mr-2 dark:text-white ni ni-pin-3"></i>
                        Bucharest, Romania
                      </div>
                      <div class="mt-6 mb-2 font-semibold leading-relaxed text-base dark:text-white/80 text-slate-700">
                        <i class="mr-2 dark:text-white ni ni-briefcase-24"></i>
                        Solution Manager - Creative Tim Officer
                      </div>
                      <div class="dark:text-white/80">
                        <i class="mr-2 dark:text-white ni ni-hat-3"></i>
                        University of Computer Science
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer class="pt-4">
              <div class="w-full px-6 mx-auto">
                <div class="flex flex-wrap items-center -mx-3 lg:justify-between">
                  <div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                    <div class="leading-normal text-center text-sm text-slate-500 lg:text-left">
                      ©
                      <script>
                        document.write(new Date().getFullYear() + ",");
                      </script>
                      made with <i class="fa fa-heart"></i> by
                      <a
                        href="https://www.creative-tim.com"
                        class="font-semibold dark:text-white text-slate-700"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                      for a better web.
                    </div>
                  </div>
                  <div class="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                    <ul class="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                      <li class="nav-item">
                        <a
                          href="https://www.creative-tim.com"
                          class="block px-4 pt-0 pb-1 font-normal transition-colors ease-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          Creative Tim
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="https://www.creative-tim.com/presentation"
                          class="block px-4 pt-0 pb-1 font-normal transition-colors ease-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="https://creative-tim.com/blog"
                          class="block px-4 pt-0 pb-1 font-normal transition-colors ease-in-out text-sm text-slate-500"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="https://www.creative-tim.com/license"
                          class="block px-4 pt-0 pb-1 pr-0 font-normal transition-colors ease-in-out text-sm text-slate-500"
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

export default AdminRequestTable;
