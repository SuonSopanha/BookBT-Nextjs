
const BusProfile = () => {
  return (
    <div>
      <div className="relative">
        <div className="relative py-4">
          <div className="mx-auto flex flex-col justify-center space-y-4 p-4 md:flex-row md:space-x-5 md:space-y-0">
            <div className="relative rounded-lg bg-white">
              <div className="flex bg-slate-600 h-auto w-full items-center justify-center rounded-t-lg bg-slate-fw-full0 object-cover text-center align-middle font-medium text-slate-300">
                <img
                  src="https://yt3.googleusercontent.com/zVhrm9pQEmydw5480JJkMVXdft3hSOnf1KvleiJsQIDS9PRVk_xTlc6e1wPHvaeEsCtYa9IJYg=s900-c-k-c0x00ffffff-no-rj"
                  className="h-80 w-full rounded-t-lg object-cover"
                />
              </div>
              <div className="top-fw-full m-4 text-xl font-bold text-black">
                <div className="w-48 bg-slate-fw-full0 hover:border-b-2 focus:bg-Add focus:outline-Add">
                  Your Name
                </div>
              </div>
              <div className="m-4 border-b-2 border-zinc-400 pb-12">
                <div className="ml-0.5 flex items-center">
                  <img
                    width="28"
                    height="24"
                    src="https://img.icons8.com/windows/32/FAB005/gender-neutral-user.png"
                    alt="gender-neutral-user"
                  />
                  <div className="ml-2 font-medium hover:border-b-2 focus:bg-Add focus:outline-Add">
                    Taxi or Bus Driver
                  </div>
                </div>
                <div className="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/home--v2.png"
                    alt="home--v2"
                  />
                  <div className="ml-3 font-medium hover:border-b-2 focus:bg-Add focus:outline-Add">
                    Address
                  </div>
                </div>
                <div className="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/iphone.png"
                    alt="iphone"
                  />
                  <div className="ml-3 font-medium hover:border-b-2 focus:bg-Add focus:outline-Add">
                    Phone number
                  </div>
                </div>
              </div>

              <div className="m-2 flex items-center justify-center">
                <a href="/bus-feedback">
                  <button className=" font-medium hover:text-yellow-300">
                    View Feedback
                  </button>
                </a>
              </div>
              <div className="m-8 flex items-center justify-center">
                <button className="h-10 w-32 rounded-xl border-2 border-zinc-fw-full0 hover:bg-yellow-300">
                  <p className="text-lg font-bold text-yellow-400 hover:text-white">
                    Edit
                  </p>
                </button>
              </div>
            </div>

            <div className="relative w-full sm:w-1/2 rounded-lg bg-white shadow-lg">
              <div className="m-4 pb-12">
                {/* Taxi Provider Profile Section */}
                <div className="ml-0.5 flex items-center">
                  <p className="ml-2 text-xl font-bold text-gray-700">
                    Taxi Provider Profile
                  </p>
                </div>
                <div className="my-3 ml-1 flex">
                  <div className="w-full overflow-x-auto">
                    <table className="bg-white w-full table-fixed text-sm shadow-md rounded-lg overflow-hidden">
                      <thead className="bg-blue-900 text-white">
                        <tr>
                          <th className="p-3">ID</th>
                          <th className="p-3">Location</th>
                          <th className="p-3">Destination</th>
                          <th className="p-3">Flee Time</th>
                          <th className="p-3">Max Seat</th>
                          <th className="p-3">Category</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {/* Example rows - replace these with dynamic data */}
                        <tr className="hover:bg-slate-100">
                          <td className="p-3 text-center">1</td>
                          <td className="p-3 text-center">Location 1</td>
                          <td className="p-3 text-center">Destination 1</td>
                          <td className="p-3 text-center">10:00 AM</td>
                          <td className="p-3 text-center">30</td>
                          <td className="p-3 text-center">Category 1</td>
                        </tr>
                        <tr className="hover:bg-slate-100">
                          <td className="p-3 text-center">2</td>
                          <td className="p-3 text-center">Location 2</td>
                          <td className="p-3 text-center">Destination 2</td>
                          <td className="p-3 text-center">11:00 AM</td>
                          <td className="p-3 text-center">25</td>
                          <td className="p-3 text-center">Category 2</td>
                        </tr>
                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Booking Section */}
                <div className="ml-0.5 flex items-center mt-6 border-t-4">
                  <p className="ml-2 text-xl font-bold text-gray-700">
                    Booking
                  </p>
                </div>
                <div className="my-3 ml-1 flex">
                  <div className="w-full overflow-x-auto">
                    <table className="bg-white w-full table-fixed text-sm shadow-md rounded-lg overflow-hidden">
                      <thead className="bg-blue-900 text-white">
                        <tr>
                          <th className="p-3">User</th>
                          <th className="p-3">Service</th>
                          <th className="p-3">Date</th>
                          <th className="p-3">Status</th>
                          <th className="p-3">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {/* Example rows - replace these with dynamic data */}
                        <tr className="hover:bg-slate-100">
                          <td className="p-3 text-center">User 1</td>
                          <td className="p-3 text-center">Service 1 Service 2</td>
                          <td className="p-3 text-center">2024-06-14 12:00</td>
                          <td className="p-3 text-center">Confirmed</td>
                          <td className="p-3 text-center">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-100">
                          <td className="p-3 text-center">User 2</td>
                          <td className="p-3 text-center">Service 2 Service 2</td>
                          <td className="p-3 text-center">2024-06-15 12:00</td>
                          <td className="p-3 text-center">Confirmed</td>
                          <td className="p-3 text-center">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700">
                              View
                            </button>
                          </td>
                        </tr>
                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
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

export default BusProfile;
