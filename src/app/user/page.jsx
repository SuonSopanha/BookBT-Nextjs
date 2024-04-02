const UserProfile = () => {
    return (
      <div>
        <div class="relative mt-20">
          <div class="relative bg-black bg-opacity-50 py-10">
            <div class="mx-auto flex flex-col justify-center space-y-4 p-4 md:flex-row md:space-x-5 md:space-y-0">
              <div class="relative rounded-lg bg-white">
                <div class="flex h-60 w-full items-center justify-center rounded-t-lg bg-slate-600 object-cover text-center align-middle font-medium text-slate-300">
                  <a href="#">Add Profile</a>
                </div>
                <div class="m-4 border-b-2 border-zinc-400 pb-12">
                  <div class="ml-0.5 flex items-center mt-3">
                    <img
                      width="28"
                      height="24"
                      src="https://img.icons8.com/windows/32/FAB005/gender-neutral-user.png"
                      alt="gender-neutral-user"
                    />
                    <input
                      type="text"
                      placeholder="Your name"
                      class="ml-2 font-medium hover:border-b-2 focus:bg-none focus:outline-none"
                    />
                  </div>
                  <div class="ml-1 flex items-center mt-3">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/FAB005/home--v2.png"
                      alt="home--v2"
                    />
                    <input
                      type="text"
                      placeholder="Email address"
                      class="ml-3 font-medium hover:border-b-2 focus:bg-none focus:outline-none"
                    />
                  </div>
                  <div class="ml-1 flex items-center mt-3">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/FAB005/iphone.png"
                      alt="iphone"
                    />
                    <input
                      type="text"
                      placeholder="Phone number"
                      class="ml-3 font-medium hover:border-b-2 focus:bg-none focus:outline-none"
                    />
                  </div>
                </div>
                <a href="#History">
                  {" "}
                  <button
                    id="toggleTables"
                    class="ml-12 font-bold  text-gray-500  hover:text-yellow-500"
                  >
                    View Booking History
                  </button>
                </a>
                <div class="m-8 flex flex-col space-y-2 items-center justify-center">
                  <button class="h-10 w-32 rounded-xl border-2 border-zinc-600 hover:bg-yellow-300">
                    <p class="text-lg font-bold text-yellow-400 hover:text-white">
                      Edit
                    </p>
                  </button>
                  <button class="h-10 w-32 rounded-xl border-2 border-zinc-600 hover:bg-yellow-300">
                    <a
                      href="RegisterDriver.html"
                      class="text-lg font-bold text-yellow-400 hover:text-white"
                    >
                      Join As Driver
                    </a>
                  </button>
                </div>
              </div>
  
              <div class="relative rounded-lg bg-white md:w-1/2">
                <div class="m-4 pb-12 flex flex-col ">
                  <div class="ml-0.5 flex items-center">
                    <p id="History" class="ml-2 text-xl font-bold text-zinc-600">
                      History
                    </p>
                  </div>
                  <div class="ml-0.5 flex items-center">
                    <p class="mb-1 ml-2 mt-5 text-xl font-bold text-zinc-600">
                      Destinaton
                    </p>
                  </div>
                  <div class="mx-auto flex flex-col items-center justify-center space-y-4 overflow-x-scroll bg-white pb-10 md:w-full md:flex-row md:space-x-20 md:space-y-0">
                    <div class="relative mb-4 md:mb-0">
                      <img
                        src="https://lostplate.com/wp-content/uploads/2020/07/24-hours-in-phnom-penh-independence-monument.jpg"
                        class="h-48 w-40 object-cover"
                      />
                      <div class="absolute bottom-0 h-24 w-40 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                        <p class="font-medium text-white">Phnom Penh</p>
                        <div class="flex space-x-6">
                          <p class="text-xs text-yellow-300">
                            popular and fantasy
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="relative mb-4 md:mb-0">
                      <img
                        src="https://i.pinimg.com/736x/b6/6d/3b/b66d3b45805625e096e054c6c41e1432.jpg"
                        class="h-48 w-40 object-cover"
                      />
                      <div class="absolute bottom-0 h-24 w-40 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                        <p class="font-medium text-white">Battambang</p>
                        <div class="flex space-x-6">
                          <p class="text-xs text-yellow-300">
                            popular and fantasy
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="relative mb-4 md:mb-0">
                      <img
                        src="https://wallpapercave.com/wp/wp4189806.jpg"
                        class="h-48 w-40 object-cover"
                      />
                      <div class="absolute bottom-0 h-24 w-40 bg-gradient-to-t from-slate-950 to-transparent pl-5 pt-12">
                        <p class="font-medium text-white">Siem Reap</p>
                        <div class="flex space-x-6">
                          <p class="text-xs text-yellow-300">
                            popular and fantasy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ml-0.5 flex items-center mb-4">
                    <p
                      id="Text"
                      class="mb-1 ml-8 mt-5 text-xl font-bold text-zinc-600"
                    >
                      Following Taxi
                    </p>
                  </div>
                  <div
                    id="TableContainer"
                    class="flex items-center justify-center mx-8"
                  >
                    <table
                      id="Booking"
                      class="bg-white w-full table-fixed text-sm shadow-md rounded-lg overflow-hidden"
                      style={{ display: "none" }}
                    >
                      <thead class="text-left">
                        <tr class="bg-blue-900 w-1/4 text-white">
                          <th class="p-3">Driver </th>
                          <th class="p-3">Date</th>
                          <th class="p-3">Destination</th>
                          <th class="p-3">Receipt</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200" id="table-body">
                        <tr>
                          <td class="p-3">None</td>
                        </tr>
                        <tr>
                          <td class="p-3">None</td>
                        </tr>
                      </tbody>
                    </table>
  
                    <table
                      id="MainTable"
                      class="bg-white w-full table-fixed text-sm shadow-md rounded-lg overflow-hidden"
                    >
                      <thead class="text-left">
                        <tr class="bg-blue-900 w-1/4 text-white">
                          <th class="p-3">Name</th>
                          <th class="p-3">Route</th>
                          <th class="p-3">Scheduled</th>
                          <th class="p-3">Price</th>
                        </tr>
                      </thead>
                      <tbody
                        class="divide-y divide-gray-200"
                        id="table-body-MainTable"
                      >
                        <tr>
                          <td class="p-3">None</td>
                        </tr>
                        <tr>
                          <td class="p-3">None</td>
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