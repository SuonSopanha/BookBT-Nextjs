const Compare = () => {
  return (
    <div>
      <div className=" mt-20 h-fit text-white text-center">Bus Compare</div>
      <div className="relative">
        <div className="relative bg-black bg-opacity-50 py-10">
          <div className="mx-auto flex flex-col justify-center space-y-4 p-4 md:flex-row md:space-x-20 md:space-y-0">
            <div className="relative rounded-lg bg-white">
              <div className="flex border-1-gray h-auto w-full items-center justify-center rounded-t-lg bg-slate-600 object-fill text-center align-middle font-medium text-slate-300">
                <img
                  src="https://yt3.googleusercontent.com/zVhrm9pQEmydw5480JJkMVXdft3hSOnf1KvleiJsQIDS9PRVk_xTlc6e1wPHvaeEsCtYa9IJYg=s900-c-k-c0x00ffffff-no-rj"
                  className="h-80 w-full rounded-t-lg object-cover"
                />
              </div>

              <div className="flex items-center justify-center">
                <div className="m-4 border-b-2 border-zinc-400 pb-12">
                  <div className="flex items-center">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/FAB005/signpost-tourist.png"
                      alt="signpost-tourist"
                    />
                    <p className="text-xl font-bold text-zinc-600">Direction</p>
                  </div>
                  <div className="flex flex-col">
                    <button className="mb-4 h-10 w-60 rounded-lg bg-orange-300 px-2 text-left font-bold">
                      <p>Phnom Penh - Siem Reap</p>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/FAB005/clock.png"
                      alt="clock"
                    />
                    <p className="text-xl font-bold text-zinc-600">Time</p>
                  </div>
                  <div className="flex flex-col">
                    <button className="mb-4 h-10 w-60 rounded-lg bg-orange-300 px-2 text-left font-bold">
                      <p>8 : 00 AM - 12 : 30 AM</p>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/color/48/bus.png"
                      alt="bus"
                    />
                    <p className="text-xl font-bold text-zinc-600">Travel by</p>
                  </div>
                  <div className="flex flex-col">
                    <button className="mb-4 h-10 w-60 rounded-lg bg-orange-300 px-2 text-left font-bold">
                      <p>Bus</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg bg-white">
              <img
                src="https://easycdn.blob.core.windows.net/profile-img/mekong-ekspress01.jpg"
                className="flex h-60 w-full items-center justify-center rounded-t-lg bg-slate-600 object-cover text-center align-middle font-medium text-slate-300"
              />

              <div className="m-4 border-b-2 pb-12">
                <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-2 shadow hover:bg-gray-100 md:max-w-xl md:flex-row">
                  <img
                    className="h-40 w-36 rounded-lg object-cover"
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="font-medium">Driver's name: Dr.Sanin</p>
                    <p className="font-medium">Company: Individual</p>
                    <p className="font-medium">Time: 8: 00 AM - 12 : 30 AM</p>
                    <p className="font-medium">Tell: 088 777 3698</p>
                  </div>
                </div>
                <div className="my-5">
                  <div className="ml-10 font-medium text-black">
                    <p>Price : 10 $</p>
                    <p>Vehicle: Bus</p>
                    <p>Time: 8 : 00 AM</p>
                    <p>Seat: 15</p>
                    <div className="flex">
                      <p className="mr-2">Rating:</p>
                      <img
                        width="auto"
                        height="18"
                        src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                        alt="filled-star"
                      />
                      <img
                        width="auto"
                        height="18"
                        src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                        alt="filled-star"
                      />
                      <img
                        width="auto"
                        height="18"
                        src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                        alt="filled-star"
                      />
                      <img
                        width="auto"
                        height="18"
                        src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                        alt="filled-star"
                      />
                      <img
                        width="auto"
                        height="18"
                        src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                        alt="filled-star"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="relative mb-8 ml-8 mt-5 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-400 text-sm font-medium text-black shadow-lg shadow-black">
                  <div className="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-100 bg-opacity-60"></div>
                  <a href="bookingForm.html">BOOKING NOW</a>
                </button>
              </div>
            </div>

            <div className="relative rounded-lg bg-white">
              <img
                src="https://easycdn.blob.core.windows.net/profile-img/mekong-ekspress01.jpg"
                className="flex h-60 w-full items-center justify-center rounded-t-lg bg-slate-600 object-cover text-center align-middle font-medium text-slate-300"
              />

              <div className="m-4 border-b-2 pb-12">
                <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-2 shadow hover:bg-gray-100 md:max-w-xl md:flex-row">
                  <img
                    className="h-40 w-36 rounded-lg object-cover"
                    src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="font-medium">Driver's name: Dr.Panha</p>
                    <p className="font-medium">Company: Individual</p>
                    <p className="font-medium">Time: 8: 00 AM - 12 : 30 AM</p>
                    <p className="font-medium">Tell: 088 777 3698</p>
                  </div>
                </div>
                <div className="my-5">
                  <div className="ml-10 font-medium text-black">
                    <p>Price : 10 $</p>
                    <p>Vehicle: Bus</p>
                    <p>Time: 8 : 00 AM</p>
                    <p>Seat: 24</p>
                    <div className="flex">
                      <p className="mr-2">Rating:</p>
                      <img
                        width="auto"
                        height="18"
                        src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                        alt="filled-star"
                      />
                      <img
                        width="auto"
                        height="18"
                        src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                        alt="filled-star"
                      />
                      <img
                        width="auto"
                        height="18"
                        src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                        alt="filled-star"
                      />
                      <img
                        width="auto"
                        height="18"
                        src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                        alt="filled-star"
                      />
                      <img
                        width="auto"
                        height="18"
                        src="https://img.icons8.com/material-outlined/24/FAB005/filled-star.png"
                        alt="filled-star"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="relative mb-8 ml-8 mt-5 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-400 text-sm font-medium text-black shadow-lg shadow-black">
                  <div className="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-100 bg-opacity-60"></div>
                  <a href="bookingForm.html">BOOKING NOW</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;