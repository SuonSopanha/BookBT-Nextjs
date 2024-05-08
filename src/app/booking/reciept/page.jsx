const BookingReciept = () => {
  return (
    <div className="w-full">
      <div className="h-28"></div>
      <div class="relative overflow-hidden">
    <div class="relative bg-none px-2 pb-10 md:px-0">
        <div class="mx-auto flex flex-col justify-center md:flex-row md:space-x-20 md:space-y-0 md:px-2 px-2">
            <div class="relative w-full rounded-3xl bg-amber-50 sm:w-full md:w-4/5">
                <div class="pb-12">
                  <div class="flex w-full items-center justify-center rounded-full bg-yellow-300 p-2">
                      <p class="ml-2 text-xl sm:text-2xl font-bold text-indigo-900">
                        Booking Receipt
                      </p>
                  </div>
                <div className="mt-8 pt-4 text-zinc-600">
                  <div className="flex w-full px-4 md:px-10">
                    <div className="flex w-full border-t-4 border-yellow-400 px-2 pt-4">
                      <div>
                        <p class="text-xs sm:text-base">Location :</p>
                      </div>
                      <div className="ml-2 font-bold">
                        <p class="text-xs sm:text-base">Phnom Penh</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end border-t-4 border-yellow-400 px-2 pt-4 italic">
                      <p class="text-xs sm:text-base mr-2 sm:mr-0">ServiceID :</p>
                      <p className="ml-2 text-xs sm:text-base">39473940232</p>
                    </div>
                  </div>
                  <div className="flex w-full px-4 md:px-10">
                    <div className="flex w-full px-2 pb-4">
                      <div>
                        <p class="text-xs sm:text-base">Destination :</p>
                      </div>
                      <div className="ml-2 font-bold">
                        <p class="text-xs sm:text-base">Siem Reap</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end px-2 pb-4 italic">
                      <p class="text-xs sm:text-base">Invoice Date:</p>
                      <p className="ml-1 sm:ml-2 text-xs sm:text-base">Jan 12, 2024</p>
                    </div>
                  </div>
                </div>
                <div className="text-zinc-600">
                  <div className="flex w-full px-4 md:px-10">
                    <div className="flex w-full border-t-2 border-yellow-400 px-2 pt-4">
                      <div>
                        <p class="text-xs sm:text-base">User Name:</p>
                      </div>
                      <div className="ml-2 font-bold">
                        <p class="text-xs sm:text-base">Heng Sovanna</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end border-t-2 border-yellow-400 pt-4">
                      <div className="flex w-full items-center justify-end">
                        <div className="flex w-full items-center justify-end">
                          <p class="text-xs sm:text-base">Tel:</p>
                        </div>
                        <div className="flex w-full items-center justify-end">
                          <p className="ml-0 sm:ml-2 font-medium text-xs sm:text-base">094 686 1232</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full px-4 md:px-10">
                    <div className="flex w-full px-2 pb-4">
                      <div>
                        <p class="text-xs sm:text-base">Driver Name:</p>
                      </div>
                      <div className="ml-2 font-bold">
                        <p class="text-xs sm:text-base">Leng Kola</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end pb-4">
                      <div className="flex w-full items-center justify-end">
                        <p class="text-xs sm:text-base">Tel:</p>
                      </div>
                      <div className="flex w-full items-center justify-end">
                        <p className="ml-0 sm:ml-2 font-medium text-xs sm:text-base">088 654 8899</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-10">
                    <div className="flex w-full bg-yellow-200 px-2 py-2">
                      <div className="font-medium">
                        <p class="text-xs sm:text-base">Date:</p>
                      </div>
                      <div className="ml-2 font-medium">
                        <p class="text-xs sm:text-base">January 12, 2024</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end bg-yellow-200 px-2">
                      <div className="flex w-28 items-center justify-end font-medium md:w-full">
                        <p class="text-xs sm:text-base">Time:</p>
                      </div>
                      <div className="flex w-full items-center justify-end">
                        <p className="ml-0 sm:ml-2 font-medium text-xs sm:text-base">8:00-12:00 AM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-10">
                    <div className="flex w-96 px-2 py-2 md:w-full">
                      <div>
                        <p class="text-xs sm:text-base">Vehicle:</p>
                      </div>
                      <div className="ml-2 font-bold">
                        <p class="text-xs sm:text-base">SUV</p>
                      </div>
                    </div>
                    <div className="flex w-28 items-center justify-center px-2 md:w-36">
                      <div className="flex w-12 items-center sm:justify-center justify-end md:w-full">
                        <p class="text-xs sm:text-base">Seats :</p>
                      </div>
                      <div className="flex w-8 items-center sm:justify-center justify-end md:w-12">
                        <p className="ml-0 sm:ml-2 font-bold text:xs sm:text-base">2</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end px-2">
                      <div className="flex w-24 items-center sm:justify-start justify-end md:w-full">
                        <p class="text-xs sm:text-base">type:</p>
                      </div>
                      <div className="flex items-center justify-end md:w-full">
                        <p className="ml-1 sm:ml-2 font-bold text-xs sm:text-base">Front</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-10">
                    <div className="flex w-full bg-yellow-200 px-2 py-2">
                      <div className="font-medium">
                        <p class="text-xs sm:text-base">Seat Price :</p>
                      </div>
                      <div className="ml-2 font-bold">
                        <p class="text-xs sm:text-base">10 $</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end bg-yellow-200 px-2 text-lg">
                      <div className="flex w-full items-center justify-end font-bold">
                        <p class="text-xs sm:text-base font-bold">X 2</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-10">
                    <div className="flex w-52 border-b-2 border-yellow-400 px-2 py-2 font-medium">
                      <div>
                        <p class="text-xs sm:text-base">Total Price :</p>
                      </div>
                      <div className="ml-2 font-medium">
                        <p class="text-xs sm:text-base font-bold">20 $</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center border-b-2 border-yellow-400 p-2">
                      <div className="flex w-full items-center justify-end">
                        <p class="text-xs sm:text-base">Payment:</p>
                      </div>
                      <div className="flex w-full items-center justify-end font-bold">
                        <p className="ml-0 sm:ml-2 text-xs sm:text-base">pay-on-pickup</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full px-4 md:px-10">
                    <div className="flex w-52 py-8 font-medium">
                      <button className="relative mb-8 mt-5 flex h-8 w-28 sm:h-12 sm:w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-sm font-medium text-black shadow-lg shadow-slate-500 hover:border-2 hover:border-zinc-400 hover:shadow-none">
                        <a href="homePage.html">Back</a>
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

export default BookingReciept;
