const AdminProfileView = () => {
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
                  <span class="ms-3 text-white">Dashboard</span>
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
          <div class="w-full px-6 py-6 mx-auto">
            <div class="flex flex-wrap -mx-3">
              <div class="flex-none w-full max-w-full px-3">
                <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <h6 class>Authors table</h6>
                  </div>
                  <div class="flex-auto px-0 pt-0 pb-2">
                    <div class="p-0 overflow-x-auto">
                      <table class="items-center w-full mb-0 align-top border-collapse dark:border-white/40 ">
                        <thead class="align-bottom">
                          <tr>
                            <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">
                              Driver
                            </th>
                            <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">
                              Service
                            </th>
                            <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">
                              Vehicle
                            </th>
                            <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">
                              Request Register
                            </th>
                            <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 tracking-none whitespace-nowrap  opacity-70">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <div class="flex px-2 py-1">
                                <div>
                                  <img
                                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-2.jpg"
                                    class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt="user1"
                                  />
                                </div>
                                <div class="flex flex-col justify-center">
                                  <h6 class="mb-0 text-sm leading-normal">
                                    {" "}
                                    <a href="adminTaxiProfileVeiw.html">
                                      John Michael
                                    </a>
                                  </h6>
                                  <p class="mb-0 text-xs leading-tight dark:opacity-80 ">
                                    john@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                Phnom Penh
                              </p>
                              <p class="mb-0 text-xs leading-tight dark:opacity-80 ">
                                Takeo
                              </p>
                            </td>
                            <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span class="bg-gradient-to-tl from-emerald-500 to-teal-400 px-4 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Bus
                              </span>
                            </td>
                            <td class="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span class="text-xs font-semibold leading-tight dark:opacity-80 ">
                                23/04/18
                              </span>
                            </td>
                            <td class="p-1 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center space-x-5">
                              <a
                                href="javascript:;"
                                class="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-green-500 py-2 px-4"
                              >
                                {" "}
                                Accept{" "}
                              </a>
                              <a
                                href="javascript:;"
                                class="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-red-500 py-2 px-4"
                              >
                                {" "}
                                Decline{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <div class="flex px-2 py-1">
                                <div>
                                  <img
                                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-3.jpg"
                                    class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt="user2"
                                  />
                                </div>
                                <div class="flex flex-col justify-center">
                                  <h6 class="mb-0 text-sm leading-normal">
                                    {" "}
                                    <a href="adminTaxiProfileVeiw.html">
                                      John Michael
                                    </a>
                                  </h6>
                                  <p class="mb-0 text-xs leading-tight dark:opacity-80 ">
                                    alexa@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                Phnom Penh
                              </p>
                              <p class="mb-0 text-xs leading-tight dark:opacity-80 ">
                                Takeo
                              </p>
                            </td>
                            <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span class="bg-gradient-to-tl from-slate-600 to-slate-300 px-4 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Taxi
                              </span>
                            </td>
                            <td class="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span class="text-xs font-semibold leading-tight dark:opacity-80 ">
                                11/01/19
                              </span>
                            </td>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center space-x-5">
                              <a
                                href="javascript:;"
                                class="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-green-500 py-2 px-4"
                              >
                                {" "}
                                Accept{" "}
                              </a>
                              <a
                                href="javascript:;"
                                class="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-red-500 py-2 px-4"
                              >
                                {" "}
                                Decline{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <div class="flex px-2 py-1">
                                <div>
                                  <img
                                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg"
                                    class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt="user3"
                                  />
                                </div>
                                <div class="flex flex-col justify-center">
                                  <h6 class="mb-0 text-sm leading-normal">
                                    {" "}
                                    <a href="adminTaxiProfileVeiw.html">
                                      John Michael
                                    </a>
                                  </h6>
                                  <p class="mb-0 text-xs leading-tight dark:opacity-80 ">
                                    laurent@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                Phnom Penh
                              </p>
                              <p class="mb-0 text-xs leading-tight dark:opacity-80 ">
                                Takeo
                              </p>
                            </td>
                            <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span class="bg-gradient-to-tl from-emerald-500 to-teal-400 px-4 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Bus
                              </span>
                            </td>
                            <td class="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span class="text-xs font-semibold leading-tight dark:opacity-80 ">
                                19/09/17
                              </span>
                            </td>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center space-x-5">
                              <a
                                href="javascript:;"
                                class="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-green-500 py-2 px-4"
                              >
                                {" "}
                                Accept{" "}
                              </a>
                              <a
                                href="javascript:;"
                                class="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-red-500 py-2 px-4"
                              >
                                {" "}
                                Decline{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <div class="flex px-2 py-1">
                                <div>
                                  <img
                                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-3.jpg"
                                    class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt="user4"
                                  />
                                </div>
                                <div class="flex flex-col justify-center">
                                  <h6 class="mb-0 text-sm leading-normal">
                                    {" "}
                                    <a href="adminTaxiProfileVeiw.html">
                                      John Michael
                                    </a>
                                  </h6>
                                  <p class="mb-0 text-xs leading-tight dark:opacity-80 ">
                                    michael@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                Phnom Penh
                              </p>
                              <p class="mb-0 text-xs leading-tight dark:opacity-80 ">
                                Takeo
                              </p>
                            </td>
                            <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span class="bg-gradient-to-tl from-emerald-500 to-teal-400 px-4 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Bus
                              </span>
                            </td>
                            <td class="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span class="text-xs font-semibold leading-tight dark:opacity-80 ">
                                24/12/08
                              </span>
                            </td>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center space-x-5">
                              <a
                                href="javascript:;"
                                class="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-green-500 py-2 px-4"
                              >
                                {" "}
                                Accept{" "}
                              </a>
                              <a
                                href="javascript:;"
                                class="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-red-500 py-2 px-4"
                              >
                                {" "}
                                Decline{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <div class="flex px-2 py-1">
                                <div>
                                  <img
                                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg"
                                    class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt="user5"
                                  />
                                </div>
                                <div class="flex flex-col justify-center">
                                  <h6 class="mb-0 text-sm leading-normal">
                                    {" "}
                                    <a href="adminTaxiProfileVeiw.html">
                                      John Michael
                                    </a>
                                  </h6>
                                  <p class="mb-0 text-xs leading-tight dark:opacity-80 ">
                                    richard@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                Phnom Penh
                              </p>
                              <p class="mb-0 text-xs leading-tight dark:opacity-80 ">
                                Takeo
                              </p>
                            </td>
                            <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span class="bg-gradient-to-tl from-slate-600 to-slate-300 px-4 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Taxi
                              </span>
                            </td>
                            <td class="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span class="text-xs font-semibold leading-tight dark:opacity-80 ">
                                04/10/21
                              </span>
                            </td>
                            <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center space-x-5">
                              <a
                                href="javascript:;"
                                class="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-green-500 py-2 px-4"
                              >
                                {" "}
                                Accept{" "}
                              </a>
                              <a
                                href="javascript:;"
                                class="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-red-500 py-2 px-4"
                              >
                                {" "}
                                Decline{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <div class="flex px-2 py-1">
                                <div>
                                  <img
                                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-1.jpg"
                                    class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt="user6"
                                  />
                                </div>
                                <div class="flex flex-col justify-center">
                                  <h6 class="mb-0 text-sm leading-normal">
                                    {" "}
                                    <a href="adminTaxiProfileVeiw.html">
                                      John Michael
                                    </a>
                                  </h6>
                                  <p class="mb-0 text-xs leading-tight dark:opacity-80 ">
                                    miriam@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                Phnom Penh
                              </p>
                              <p class="mb-0 text-xs leading-tight dark:opacity-80 ">
                                Takeo
                              </p>
                            </td>
                            <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <span class="bg-gradient-to-tl from-slate-600 to-slate-300 px-4 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Taxi
                              </span>
                            </td>
                            <td class="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <span class="text-xs font-semibold leading-tight dark:opacity-80 ">
                                14/09/20
                              </span>
                            </td>
                            <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent text-center space-x-5">
                              <a
                                href="javascript:;"
                                class="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-green-500 py-2 px-4"
                              >
                                {" "}
                                Accept{" "}
                              </a>
                              <a
                                href="javascript:;"
                                class="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-red-500 py-2 px-4"
                              >
                                {" "}
                                Decline{" "}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer class="pt-4">
              <div class="w-full px-6 mx-auto">
                <div class="flex flex-wrap items-center -mx-3 lg:justify-between">
                  <div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                    <div class="text-sm leading-normal text-center text-slate-500 lg:text-left">
                      2024 made with <i class="fa fa-heart"></i> by
                      <a
                        href="https://www.creative-tim.com"
                        class="font-semibold text-slate-700 dark:text-white"
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
                          class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          Creative Tim
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="https://www.creative-tim.com/presentation"
                          class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="https://creative-tim.com/blog"
                          class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="https://www.creative-tim.com/license"
                          class="block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-in-out text-slate-500"
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

export default AdminProfileView;
