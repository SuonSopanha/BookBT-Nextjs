const BusProfile = () => {
  return (
    <div>
      <div className="h-96 flex flex-col items-center justify-center">
        <p className=" font-bold text-lg text-white">Taxi or Bus</p>
      </div>
      <div className="relative">
        <div className="relative bg-black bg-opacity-50 py-24">
          <div className="mx-auto flex flex-col justify-center space-y-4 p-4 md:flex-row md:space-x-5 md:space-y-0">
            <div className="relative rounded-lg bg-white">
              <div className="flex bg-slate-600 h-auto w-full items-center justify-center rounded-t-lg bg-slate-fw-full0 object-cover text-center align-middle font-medium text-slate-300">
                <img
                  src="https://yt3.googleusercontent.com/zVhrm9pQEmydw5480JJkMVXdft3hSOnf1KvleiJsQIDS9PRVk_xTlc6e1wPHvaeEsCtYa9IJYg=s900-c-k-c0x00ffffff-no-rj"
                  className="h-80 w-full rounded-t-lg object-cover"
                />
              </div>
              <div className="top-fw-full m-4 text-xl font-bold text-black ">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-48 bg-slate-fw-full0 hover:border-b-2 focus:bg-Add focus:outline-Add"
                />
              </div>
              <div className="m-4 border-b-2 border-zinc-400 pb-12">
                <div className="ml-0.5 flex items-center">
                  <img
                    width="28"
                    height="24"
                    src="https://img.icons8.com/windows/32/FAB005/gender-neutral-user.png"
                    alt="gender-neutral-user"
                  />
                  <input
                    type="text"
                    placeholder="Taxi or Bus Driver"
                    className="ml-2 font-medium hover:border-b-2 focus:bg-Add focus:outline-Add"
                  />
                </div>
                <div className="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/home--v2.png"
                    alt="home--v2"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="ml-3 font-medium hover:border-b-2 focus:bg-Add focus:outline-Add"
                  />
                </div>
                <div className="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/iphone.png"
                    alt="iphone"
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="ml-3 font-medium hover:border-b-2 focus:bg-Add focus:outline-Add"
                  />
                </div>
              </div>

              <div className="m-4 border-b-2 border-zinc-400 pb-12">
                <div className="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/signpost-tourist.png"
                    alt="signpost-tourist"
                  />
                  <p className="ml-4 text-xl font-medium text-zinc-fw-full0">
                    Direction
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="From ... to ..."
                  className="ml-11 font-medium hover:border-b-2 focus:bg-Add focus:outline-Add"
                />
                <div className="ml-1 flex items-center">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/FAB005/clock.png"
                    alt="clock"
                  />
                  <p className="ml-4 text-xl font-medium text-zinc-fw-full0">
                    Departure time
                  </p>
                </div>
                <div>
                  <div>
                    <input
                      type="text"
                      placeholder="From .. to ... : time AM/PM"
                      className="ml-11 font-medium hover:border-b-2 focus:bg-Add focus:outline-Add"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="From .. to ... : time AM/PM"
                      className="ml-11 font-medium hover:border-b-2 focus:bg-Add focus:outline-Add"
                    />
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

            <div className="relative w-full sm:w-1/2 rounded-lg bg-white">
              <div className="m-4 pb-12">
                <div className="ml-0.5 flex items-center">
                  <p className="ml-2 text-xl font-bold text-zinc-fw-full0">
                    Taxi provide profile
                  </p>
                </div>
                <div className="my-6 ml-1 flex">
                  <div className="flex h-auto w-2/4 items-center justify-center object-cover rounded-lg bg-slate-200 border-2 text-xl font-medium">
                    <img
                      className="border border-gray-600"
                      src="https://img.icons8.com/material-outlined/24/FAB005/clock.png"
                      alt="clock"
                    />
                  </div>
                  <div className="ml-4 flex flex-col">
                    <input
                      type="text"
                      className="mb-4 h-10 w-full rounded-lg border-2 border-slate-400 bg-slate-200 px-2 text-center font-medium text-black hover:border-blue-600 focus:bg-Add focus:outline-Add"
                      placeholder=" Add info"
                    />
                    <input
                      type="text"
                      className="mb-4 h-10 w-full rounded-lg border-2 border-slate-400 bg-slate-200 px-2 text-center font-medium text-black hover:border-blue-600 focus:bg-Add focus:outline-Add"
                      placeholder=" Add info"
                    />
                    <input
                      type="text"
                      className="mb-4 h-10 w-full rounded-lg border-2 border-slate-400 bg-slate-200 px-2 text-center font-medium text-black hover:border-blue-600 focus:bg-Add focus:outline-Add"
                      placeholder=" Add info"
                    />
                    <input
                      type="text"
                      className="mb-4 h-10 w-full rounded-lg border-2 border-slate-400 bg-slate-200 px-2 text-center font-medium text-black hover:border-blue-600 focus:bg-Add focus:outline-Add"
                      placeholder=" Add info"
                    />
                  </div>
                </div>
                <table
                  id="Booking"
                  className=" bg-white w-full table-fixed text-sm shadow-md rounded-lg overflow-hidden"
                >
                  <colgroup>
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                  </colgroup>
                  <thead className="text-left" id="table-header">
                    <tr className="text-slate-700">
                      <th
                        className="p-3 cursor-pointer bg-blue-900 text-white"
                        onclick="toggleTableVisibility('Scheduled', this)"
                      >
                        Scheduled
                      </th>
                      <th
                        className="p-3 cursor-pointer "
                        onclick="toggleTableVisibility('Route', this)"
                      >
                        Route
                      </th>
                      <th
                        className="p-3 cursor-pointer "
                        onclick="toggleTableVisibility('Vehicles', this)"
                      >
                        Vehicles
                      </th>
                      <th
                        className="p-3 cursor-pointer "
                        onclick="toggleTableVisibility('Price', this)"
                      >
                        Price
                      </th>
                      <th
                        className="p-3 cursor-pointer "
                        onclick="toggleTableVisibility('BookingTB', this)"
                      >
                        Booking
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 active" id="Scheduled">
                    <tr className="bg-blue-900 text-white ">
                      <th className="p-3">ID</th>
                      <th className="p-3" colspan="2">
                        Flee
                      </th>
                      <th className="p-3" colspan="2">
                        Arrive
                      </th>
                    </tr>
                    <tr className="text-center">
                      <td className="p-3">1</td>
                      <td className="p-3" colspan="2">
                        Phnom Penh
                      </td>
                      <td className="p-3" colspan="2">
                        Siem Reap
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-3">2</td>
                      <td className="p-3" colspan="2">
                        Phnom Penh
                      </td>
                      <td className="p-3" colspan="2">
                        Svay Rieng
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-3">3</td>
                      <td className="p-3" colspan="2">
                        Phnom Penh
                      </td>
                      <td className="p-3" colspan="2">
                        Khos kong
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-3">4</td>
                      <td className="p-3" colspan="2">
                        Phnom Penh
                      </td>
                      <td className="p-3" colspan="2">
                        Prey Verng
                      </td>
                    </tr>
                  </tbody>

                  <tbody
                    className=" divide-y divide-gray-200  hidden"
                    id="BookingTB"
                  >
                    <tr className="bg-blue-900 text-white font-medium text-center">
                      <td className="p-3">Username</td>
                      <td className="p-3">Time</td>
                      <td className="p-3" colspan="2">
                        Direction
                      </td>
                      <td className="p-3">Request</td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-3">
                        <a
                          className="underline text-blue-600 bold"
                          href="bookingRequest.html"
                        >
                          Kola
                        </a>
                      </td>
                      <td className="p-3">Jan - 10 Mon 08:00 AM</td>
                      <td className="p-3" colspan="2">
                        Svay Rieng - Phnom Penh
                      </td>
                      <td className="p-3 font-bold ">
                        <button className="text-red-600 mr-6">Decline</button>
                        <button className="text-green-600">Accept</button>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-3">
                        <a
                          className="underline text-blue-600 bold"
                          href="bookingRequest.html"
                        >
                          Kola
                        </a>
                      </td>
                      <td className="p-3">Jan - 10 Mon 08:00 AM</td>
                      <td className="p-3" colspan="2">
                        Svay Rieng - Phnom Penh
                      </td>
                      <td className="p-3 font-bold ">
                        <button className="text-red-600 mr-6">Decline</button>
                        <button className="text-green-600">Accept</button>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-3">
                        <a
                          className="underline text-blue-600 bold"
                          href="bookingRequest.html"
                        >
                          Kola
                        </a>
                      </td>
                      <td className="p-3">Jan - 10 Mon 08:00 AM</td>
                      <td className="p-3" colspan="2">
                        Svay Rieng - Phnom Penh
                      </td>
                      <td className="p-3 font-bold ">
                        <button className="text-red-600 mr-6">Decline</button>
                        <button className="text-green-600">Accept</button>
                      </td>
                    </tr>
                  </tbody>

                  <tbody className=" divide-y divide-gray-200 hidden" id="Route">
                    <tr className="bg-blue-900 text-white">
                      <th className="p-3">Time</th>
                      <th className="p-3" colspan="2">
                        Location
                      </th>
                      <th className="p-3" colspan="2">
                        Direction
                      </th>
                    </tr>
                    <tr className="text-center">
                      <td className="p-3">08:00 AM</td>
                      <td className="p-3" colspan="2">
                        Pnom Penh
                      </td>
                      <td className="p-3" colspan="2">
                        Svay Rieng
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-3">01:00 PM</td>
                      <td className="p-3" colspan="2">
                        Svay Rieng
                      </td>
                      <td className="p-3" colspan="2">
                        Phnom Penh
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-3">08:00 AM</td>
                      <td className="p-3" colspan="2">
                        Svay Rieng
                      </td>
                      <td className="p-3" colspan="2">
                        Bavet
                      </td>
                    </tr>
                  </tbody>

                  <tbody className=" divide-y divide-gray-200 hidden" id="Vehicles">
                    <tr className="bg-blue-900 text-white">
                      <th className="p-3" colspan="3">
                        Vehicle
                      </th>
                      <th className="p-3" colspan="1">
                        Seat
                      </th>
                      <th className="p-3" colspan="1">
                        Type
                      </th>
                    </tr>
                    <tr></tr>
                  </tbody>

                  <tbody className=" divide-y divide-gray-200 hidden" id="Price">
                    <tr className="bg-blue-900 text-white">
                      <th className="p-3">Time</th>
                      <th className="p-3" colspan="2">
                        Direction
                      </th>
                      <th className="p-3" colspan="2">
                        Price
                      </th>
                    </tr>
                    <tr className="text-center">
                      <td className="p-3">08:00 AM</td>
                      <td className="p-3" colspan="2">
                        Svay Rieng
                      </td>
                      <td className="p-3" colspan="2">
                        $6
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-3">08:00 AM</td>
                      <td className="p-3" colspan="2">
                        Svay Rieng
                      </td>
                      <td className="p-3" colspan="2">
                        $6
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-3">08:00 AM</td>
                      <td className="p-3" colspan="2">
                        Svay Rieng
                      </td>
                      <td className="p-3" colspan="2">
                        $6
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusProfile;
