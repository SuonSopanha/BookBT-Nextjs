const RequestTable = () => {
  return (
    <div>
      <main className="flex h-full overflow-hidden pt-16">

        <div className="flex-grow p-4">
          <div className="w-full px-6 py-6 mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <h6 class>Authors table</h6>
                  </div>
                  <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                      <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 ">
                        <thead className="align-bottom">
                          <tr>
                            <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">
                              Driver
                            </th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">
                              Service
                            </th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">
                              Vehicle
                            </th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">
                              Request Register
                            </th>
                            <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 tracking-none whitespace-nowrap  opacity-70">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <div className="flex px-2 py-1">
                                <div>
                                  <img
                                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-2.jpg"
                                    className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt="user1"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 text-sm leading-normal">
                                    {" "}
                                    <a href="adminTaxiProfileVeiw.html">
                                      John Michael
                                    </a>
                                  </h6>
                                  <p className="mb-0 text-xs leading-tight dark:opacity-80 ">
                                    john@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <p className="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                Phnom Penh
                              </p>
                              <p className="mb-0 text-xs leading-tight dark:opacity-80 ">
                                Takeo
                              </p>
                            </td>
                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-4 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Bus
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="text-xs font-semibold leading-tight dark:opacity-80 ">
                                23/04/18
                              </span>
                            </td>
                            <td className="p-1 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center space-x-5">
                              <a
                                href="javascript:;"
                                className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-green-500 py-2 px-4"
                              >
                                {" "}
                                Accept{" "}
                              </a>
                              <a
                                href="javascript:;"
                                className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-red-500 py-2 px-4"
                              >
                                {" "}
                                Decline{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <div className="flex px-2 py-1">
                                <div>
                                  <img
                                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-3.jpg"
                                    className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt="user2"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 text-sm leading-normal">
                                    {" "}
                                    <a href="adminTaxiProfileVeiw.html">
                                      John Michael
                                    </a>
                                  </h6>
                                  <p className="mb-0 text-xs leading-tight dark:opacity-80 ">
                                    alexa@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <p className="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                Phnom Penh
                              </p>
                              <p className="mb-0 text-xs leading-tight dark:opacity-80 ">
                                Takeo
                              </p>
                            </td>
                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-4 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Taxi
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="text-xs font-semibold leading-tight dark:opacity-80 ">
                                11/01/19
                              </span>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center space-x-5">
                              <a
                                href="javascript:;"
                                className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-green-500 py-2 px-4"
                              >
                                {" "}
                                Accept{" "}
                              </a>
                              <a
                                href="javascript:;"
                                className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-red-500 py-2 px-4"
                              >
                                {" "}
                                Decline{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <div className="flex px-2 py-1">
                                <div>
                                  <img
                                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg"
                                    className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt="user3"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 text-sm leading-normal">
                                    {" "}
                                    <a href="adminTaxiProfileVeiw.html">
                                      John Michael
                                    </a>
                                  </h6>
                                  <p className="mb-0 text-xs leading-tight dark:opacity-80 ">
                                    laurent@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <p className="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                Phnom Penh
                              </p>
                              <p className="mb-0 text-xs leading-tight dark:opacity-80 ">
                                Takeo
                              </p>
                            </td>
                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-4 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Bus
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="text-xs font-semibold leading-tight dark:opacity-80 ">
                                19/09/17
                              </span>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center space-x-5">
                              <a
                                href="javascript:;"
                                className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-green-500 py-2 px-4"
                              >
                                {" "}
                                Accept{" "}
                              </a>
                              <a
                                href="javascript:;"
                                className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-red-500 py-2 px-4"
                              >
                                {" "}
                                Decline{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <div className="flex px-2 py-1">
                                <div>
                                  <img
                                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-3.jpg"
                                    className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt="user4"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 text-sm leading-normal">
                                    {" "}
                                    <a href="adminTaxiProfileVeiw.html">
                                      John Michael
                                    </a>
                                  </h6>
                                  <p className="mb-0 text-xs leading-tight dark:opacity-80 ">
                                    michael@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <p className="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                Phnom Penh
                              </p>
                              <p className="mb-0 text-xs leading-tight dark:opacity-80 ">
                                Takeo
                              </p>
                            </td>
                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-4 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Bus
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="text-xs font-semibold leading-tight dark:opacity-80 ">
                                24/12/08
                              </span>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center space-x-5">
                              <a
                                href="javascript:;"
                                className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-green-500 py-2 px-4"
                              >
                                {" "}
                                Accept{" "}
                              </a>
                              <a
                                href="javascript:;"
                                className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-red-500 py-2 px-4"
                              >
                                {" "}
                                Decline{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <div className="flex px-2 py-1">
                                <div>
                                  <img
                                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg"
                                    className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt="user5"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 text-sm leading-normal">
                                    {" "}
                                    <a href="adminTaxiProfileVeiw.html">
                                      John Michael
                                    </a>
                                  </h6>
                                  <p className="mb-0 text-xs leading-tight dark:opacity-80 ">
                                    richard@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <p className="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                Phnom Penh
                              </p>
                              <p className="mb-0 text-xs leading-tight dark:opacity-80 ">
                                Takeo
                              </p>
                            </td>
                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-4 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Taxi
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                              <span className="text-xs font-semibold leading-tight dark:opacity-80 ">
                                04/10/21
                              </span>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center space-x-5">
                              <a
                                href="javascript:;"
                                className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-green-500 py-2 px-4"
                              >
                                {" "}
                                Accept{" "}
                              </a>
                              <a
                                href="javascript:;"
                                className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-red-500 py-2 px-4"
                              >
                                {" "}
                                Decline{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <div className="flex px-2 py-1">
                                <div>
                                  <img
                                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-1.jpg"
                                    className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                    alt="user6"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 text-sm leading-normal">
                                    {" "}
                                    <a href="adminTaxiProfileVeiw.html">
                                      John Michael
                                    </a>
                                  </h6>
                                  <p className="mb-0 text-xs leading-tight dark:opacity-80 ">
                                    miriam@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <p className="mb-0 text-xs font-semibold leading-tight dark:opacity-80">
                                Phnom Penh
                              </p>
                              <p className="mb-0 text-xs leading-tight dark:opacity-80 ">
                                Takeo
                              </p>
                            </td>
                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-4 text-xs rounded-1.8 py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                Taxi
                              </span>
                            </td>
                            <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                              <span className="text-xs font-semibold leading-tight dark:opacity-80 ">
                                14/09/20
                              </span>
                            </td>
                            <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent text-center space-x-5">
                              <a
                                href="javascript:;"
                                className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-green-500 py-2 px-4"
                              >
                                {" "}
                                Accept{" "}
                              </a>
                              <a
                                href="javascript:;"
                                className="text-xs font-semibold leading-tight dark:opacity-80 text-white bg-red-500 py-2 px-4"
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

            <footer className="pt-4">
              <div className="w-full px-6 mx-auto">
                <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                  <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                    <div className="text-sm leading-normal text-center text-slate-500 lg:text-left">
                      2024 made with <i className="fa fa-heart"></i> by
                      <a
                        href="https://www.creative-tim.com"
                        className="font-semibold text-slate-700 dark:text-white"
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
                          className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          Creative Tim
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/presentation"
                          className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://creative-tim.com/blog"
                          className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/license"
                          className="block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-in-out text-slate-500"
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

export default RequestTable;
