//Need to  fix

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

                      <div class="flex-col items-center justify-center px-4 py-4 md:flex md:flex-row md:space-x-2">        
                      <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
                        <p class="text-lg font-semibold text-center md:text-left">Pick Up Location</p>
                        <div class="flex items-center justify-center mt-4">
                          <input type="text" class="rounded-lg h-8 w-full md:w-32 bg-gray-200 px-4" placeholder="Enter location" />
                        </div>
                      </div>
                      <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center mt-4 md:mt-0">
                        <p class="text-lg font-semibold text-center md:text-left">Drop Off Location</p>
                        <div class="flex items-center justify-center mt-4">
                          <input type="text" class="rounded-lg h-8 w-full md:w-32 bg-gray-200 px-4" placeholder="Enter location" />
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
                            className="w-full rounded-lg border-2 border-gray-400 bg-gray-200 p-2 align-middle font-medium"
                            placeholder=" Name"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-4 py-5">
                        <div className="w-full">
                          <input
                            type="text"
                            className="w-full rounded-lg border-2 border-gray-400 bg-gray-200 p-2 align-middle font-medium"
                            placeholder="Location"
                          />
                        </div>
                        <div className="w-full">
                          <input
                            type="text"
                            className="w-full rounded-lg border-2 border-gray-400 bg-gray-200 p-2 align-middle font-medium"
                            placeholder=" Destination"
                          />
                        </div>
                      </div>

                      <div className="flex space-x-4 ">
                        <div className="w-full">
                         
                          <input
                            type="text"
                            className="w-full rounded-lg border-2 border-gray-400 bg-gray-200 p-2 align-middle font-medium"
                            placeholder="dd/mm/yy"
                          />
                        </div>
                        <div className="w-full">
                
                          <input
                            type="text"
                            className="w-full rounded-lg border-2 border-gray-400 bg-gray-200 p-2 align-middle font-medium"
                            placeholder="Time"
                          />
                        </div>
                      </div>

                      <div className="flex w-full space-x-4 py-5">
                        <div className="w-full space-y-4">
                          <input
                            type="text"
                            className="w-full rounded-lg border-2 border-gray-400 bg-gray-200 p-2 align-middle font-medium"
                            placeholder="Contact number"
                          />
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Description"
                            className="h-20 w-full rounded-lg border-2 border-gray-400 bg-gray-200 p-2 font-medium md:h-30"
                          ></textarea>
                        </div>
                      
                      </div>
                      <div class="spa h-full w-full">
  <div class="  w-full rounded-lg shadow-lg bg-white p-4">
    <div class="justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
     
      <div class="flex items-center space-x-4">
      <p>Only one seat</p>
        <input
          class="peer h-6 w-6"
          type="radio"
          name="status"
        />
        <p>Number of seats</p>
        <input
          type="text"
          class="h-6 w-10 rounded-full border-2 border-gray-400 bg-white p-2 text-center font-medium"
          placeholder="0"
        />
      </div>
      <div class="flex items-center w-full md:w-auto py-5 space-x-4">
      <p>Select your seats</p>
        <div class="mt-2">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="inline-flex items-center rounded-lg bg-gray-300 px-2 py-2.5 text-center text-sm font-medium text-gray-400 hover:bg-yellow-200 focus:bg-white focus:outline-none focus:ring-4 dark:hover:bg-yellow-200 dark:focus:bg-yellow-200"
            type="button"
          >
            Position
            <svg
              class="ms-3 h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="flex w-full items-center justify-center mt-4">
      <button class="relative flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-sm font-medium text-black shadow-lg hover:border-2 hover:border-zinc-400 hover:shadow-none">
        <a href="bookingRequest.html">Confirm Booking</a>
        <div class="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-200 bg-opacity-80"></div>
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
    </div>
          
  
  );
};

export default BookingForm;
