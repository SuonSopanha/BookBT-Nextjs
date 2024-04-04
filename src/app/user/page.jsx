const UserProfile = () => {
    return (
      <div>
        <div className="relative mt-20">
          <div className="relative bg-black bg-opacity-50 py-10">
            <div className="mx-auto flex flex-col justify-center space-y-4 p-4 md:flex-row md:space-x-5 md:space-y-0">
              <div className="relative rounded-lg bg-white">
                <div className="flex h-60 w-full items-center justify-center rounded-t-lg bg-slate-600 object-cover text-center align-middle font-medium text-slate-300">
                  <a href="#">Add Profile</a>
                </div>
                <div className="m-4 border-b-2 border-zinc-400 pb-12">
                  <div className="ml-0.5 flex items-center mt-3">
                    <img
                      width="28"
                      height="24"
                      src="https://img.icons8.com/windows/32/FAB005/gender-neutral-user.png"
                      alt="gender-neutral-user"
                    />
                    <input
                      type="text"
                      placeholder="Your name"
                      className="ml-2 font-medium hover:border-b-2 focus:bg-none focus:outline-none"
                    />
                  </div>
                  <div className="ml-1 flex items-center mt-3">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/FAB005/home--v2.png"
                      alt="home--v2"
                    />
                    <input
                      type="text"
                      placeholder="Email address"
                      className="ml-3 font-medium hover:border-b-2 focus:bg-none focus:outline-none"
                    />
                  </div>
                  <div className="ml-1 flex items-center mt-3">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/FAB005/iphone.png"
                      alt="iphone"
                    />
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="ml-3 font-medium hover:border-b-2 focus:bg-none focus:outline-none"
                    />
                  </div>
                </div>
                <a href="#History">
                  {" "}
                  <button
                    id="toggleTables"
                    className="ml-12 font-bold  text-gray-500  hover:text-yellow-500"
                  >
                    View Booking History
                  </button>
                </a>
                <div className="m-8 flex flex-col space-y-2 items-center justify-center">
                  <button className="h-10 w-32 rounded-xl border-2 border-zinc-600 hover:bg-yellow-300">
                    <p className="text-lg font-bold text-yellow-400 hover:text-white">
                      Edit
                    </p>
                  </button>
                  <button className="h-10 w-32 rounded-xl border-2 border-zinc-600 hover:bg-yellow-300">
                    <a
                      href="RegisterDriver.html"
                      className="text-lg font-bold text-yellow-400 hover:text-white"
                    >
                      Join As Driver
                    </a>
                  </button>
                </div>
              </div>
  
              <div className="relative rounded-lg bg-white md:w-1/2">
                <div className="m-4 pb-12 flex flex-col ">
                  <div className="ml-0.5 flex items-center">
                    <p id="History" className="ml-2 text-xl font-bold text-zinc-600">
                      History
                    </p>
                  </div>
                  <div className="ml-0.5 flex items-center">
                    <p className="mb-1 ml-2 mt-5 text-xl font-bold text-zinc-600">
                      Destinaton
                    </p>
                  </div>
                  <div className="mx-auto flex flex-col items-center justify-center space-y-4 overflow-x-scroll bg-white pb-10 md:w-full md:flex-row md:space-x-20 md:space-y-0">
                    <div className="relative mb-4 md:mb-0">
                      <img
                        src="https://lostplate.com/wp-content/uploads/2020/07/24-hours-in-phnom-penh-independence-monument.jpg"
                        className="h-48 w-40 object-cover"
                      />
                      <div className="absolute bottom-0 h-24 w-40 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                        <p className="font-medium text-white">Phnom Penh</p>
                        <div className="flex space-x-6">
                          <p className="text-xs text-yellow-300">
                            popular and fantasy
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative mb-4 md:mb-0">
                      <img
                        src="https://i.pinimg.com/736x/b6/6d/3b/b66d3b45805625e096e054c6c41e1432.jpg"
                        className="h-48 w-40 object-cover"
                      />
                      <div className="absolute bottom-0 h-24 w-40 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                        <p className="font-medium text-white">Battambang</p>
                        <div className="flex space-x-6">
                          <p className="text-xs text-yellow-300">
                            popular and fantasy
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative mb-4 md:mb-0">
                      <img
                        src="https://wallpapercave.com/wp/wp4189806.jpg"
                        className="h-48 w-40 object-cover"
                      />
                      <div className="absolute bottom-0 h-24 w-40 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                        <p className="font-medium text-white">Siem Reap</p>
                        <div className="flex space-x-6">
                          <p className="text-xs text-yellow-300">
                            popular and fantasy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-0.5 flex items-center mb-4">
                    <p
                      id="Text"
                      className="mb-1 ml-8 mt-5 text-xl font-bold text-zinc-600"
                    >
                      Following Taxi
                    </p>
                  </div>
                  <div
                    id="TableContainer"
                    className="flex items-center justify-center mx-8"
                  >
                    <table
                      id="Booking"
                      className="bg-white w-full table-fixed text-sm shadow-md rounded-lg overflow-hidden"
                      style={{ display: "none" }}
                    >
                      <thead className="text-left">
                        <tr className="bg-blue-900 w-1/4 text-white">
                          <th className="p-3">Driver </th>
                          <th className="p-3">Date</th>
                          <th className="p-3">Destination</th>
                          <th className="p-3">Receipt</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200" id="table-body">
                        <tr>
                          <td className="p-3">None</td>
                        </tr>
                        <tr>
                          <td className="p-3">None</td>
                        </tr>
                      </tbody>
                    </table>
  
                    <table
                      id="MainTable"
                      className="bg-white w-full table-fixed text-sm shadow-md rounded-lg overflow-hidden"
                    >
                      <thead className="text-left">
                        <tr className="bg-blue-900 w-1/4 text-white">
                          <th className="p-3">Name</th>
                          <th className="p-3">Route</th>
                          <th className="p-3">Scheduled</th>
                          <th className="p-3">Price</th>
                        </tr>
                      </thead>
                      <tbody
                        className="divide-y divide-gray-200"
                        id="table-body-MainTable"
                      >
                        <tr>
                          <td className="p-3">None</td>
                        </tr>
                        <tr>
                          <td className="p-3">None</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserProfile;