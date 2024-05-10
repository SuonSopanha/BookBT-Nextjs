const BookingRequest = () => {
  return (
    <div className="w-full">
      <div className="h-28"></div>
      <div className="relative overflow-hidden">
        <div className="relative bg-none px-2 pb-10 md:px-0">
          <div className="mx-auto flex flex-col justify-center md:flex-row md:space-x-20 md:space-y-0 md:px-2 px-2">
              <div className="relative w-full rounded-3xl bg-amber-50 sm:w-full md:w-4/5">
                  <div className="pb-12">
                    <div className="flex w-full items-center justify-center rounded-full bg-yellow-300 p-2">
                        <p className="ml-2 text-xl sm:text-2xl font-bold text-indigo-900">
                          Booking Request
                        </p>
                    </div>

                <div className="mt-8 pt-4 text-zinc-600">
                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-full border-t-4 border-yellow-400 px-2 pt-4">
                      <div className="text-xs sm:text-base">
                        <p>Location :</p>
                      </div>
                      <div className="ml-2 font-bold text-xs sm:text-base">
                        <p>Phnom Penh</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end border-t-4 border-yellow-400 px-2 pt-4 italic">
                      <p className="text-xs sm:text-base">ServiceID:</p>
                      <p className="ml-1 sm:ml-2 text-xs sm:text-base font-medium">39473940232</p>
                    </div>
                  </div>
                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-full px-2 pb-4">
                      <div className="text-xs sm:text-base">
                        <p>Destination:</p>
                      </div>
                      <div className="ml-2 font-bold text-xs sm:text-base">
                        <p>Siem Reap</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end px-2 pb-4 italic">
                      <p className="text-xs sm:text-base">Invoice Date:</p>
                      <p className="ml-1 sm:ml-2 text-xs sm:text-base">Jan 12, 2024</p>
                    </div>
                  </div>
                </div>
                <div className="text-zinc-600">
                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-full border-t-2 border-yellow-400 px-2 pt-4">
                      <div className="text-xs sm:text-base">
                        <p>User Name:</p>
                      </div>
                      <div className="ml-1 sm:ml-2 font-bold text-xs sm:text-base">
                        <p>Heng Sovanna</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end border-t-2 border-yellow-400 pt-4">
                      <div className="flex w-full items-center justify-end">
                        <div className="flex w-full items-center justify-end text-xs sm:text-base">
                          <p>Tel :</p>
                        </div>
                        <div className="flex w-full items-center justify-end">
                          <p className="ml-1 sm:ml-2 font-bold text-xs sm:text-base">094 686 1232</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-full px-2 pb-4">
                      <div className="text-xs sm:text-base">
                        <p>Driver Name :</p>
                      </div>
                      <div className="ml-2 font-bold text-xs sm:text-base">
                        <p>Leng Kola</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end pb-4">
                      <div className="flex w-full items-center justify-end text-xs sm:text-base">
                        <p>Tel :</p>
                      </div>
                      <div className="flex w-full items-center justify-end">
                        <p className="ml-1 sm:ml-2 font-bold text-xs sm:text-base">088 654 8899</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-full bg-yellow-200 px-2 py-2">
                      <div className="text-xs sm:text-base">
                        <p>Date:</p>
                      </div>
                      <div className="ml-2 font-medium text-xs sm:text-base">
                        <p>January 12, 2024</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end bg-yellow-200 px-2">
                      <div className="flex w-28 items-center justify-end md:w-full text-xs sm:text-base">
                        <p>Time :</p>
                      </div>
                      <div className="flex w-full items-center justify-end ">
                        <p className="ml-2 font-medium text-xs sm:text-base ">8:00-12:00 AM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-96 px-2 py-2 md:w-full">
                      <div className="text-xs sm:text-base">
                        <p>Vehicle :</p>
                      </div>
                      <div className="ml-1 sm:ml-2 font-bold text-xs sm:text-base">
                        <p>SUV</p>
                      </div>
                    </div>
                    <div className="flex w-28 items-center justify-center px-2 md:w-36">
                      <div className="flex w-12 items-center justify-center md:w-full text-xs sm:text-base">
                        <p>Seats :</p>
                      </div>
                      <div className="flex w-8 items-center justify-center md:w-12">
                        <p className="ml-2 font-bold text-xs sm:text-base">2</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end px-2">
                      <div className="flex w-24 items-center justify-end md:w-full text-xs sm:text-base">
                        <p>type:</p>
                      </div>
                      <div className="flex items-center justify-end md:w-full">
                        <p className="ml-1 sm:ml-2 font-bold text-xs sm:text-base">Front</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-full bg-yellow-200 px-2 py-2">
                      <div className="text-xs sm:text-base">
                        <p>Seat Price :</p>
                      </div>
                      <div className="ml-2 font-bold text-xs sm:text-base">
                        <p>10 $</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end bg-yellow-200 px-2 text-lg">
                      <div className="flex w-full items-center justify-end font-bold text-xs sm:text-base">
                        <p>X 2</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-52 border-b-2 border-yellow-400 px-2 py-2">
                      <div className="text-xs sm:text-base">
                        <p>Total Price :</p>
                      </div>
                      <div class="ml-2 font-bold text-xs sm:text-base text-green-600 bg-yellow-200 px-2">
                        <p>20 $</p>
                      </div>

                    </div>
                    <div className="flex w-full items-center border-b-2 border-yellow-400 p-2">
                      <div className="flex w-full items-center justify-end text-xs sm:text-base">
                        <p>Payment:</p>
                      </div>
                      <div className="flex w-full items-center justify-end font-bold text-xs sm:text-base">
                        <p className="ml-1 sm:ml-2">pay-on-pickup</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-16">
                    <div className="flex w-52 py-8 font-medium">
                      <button className="relative mb-8 mt-5 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-sm font-medium text-black shadow-lg shadow-slate-500 hover:border-2 hover:border-zinc-400 hover:shadow-none">
                        <a href="bookingReceipt.html">Accept Booking</a>
                        <div className="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-200 bg-opacity-80"></div>
                      </button>
                    </div>
                    <div className="flex w-52 py-8 font-medium">
                      <button className="relative mb-8 mt-5 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-sm font-medium text-black shadow-lg shadow-slate-500 hover:border-2 hover:border-zinc-400 hover:shadow-none">
                        <a href="bookingForm.html">Decline Booking</a>
                        <div className="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-200 bg-opacity-80"></div>
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
  );
};

export default BookingRequest;
