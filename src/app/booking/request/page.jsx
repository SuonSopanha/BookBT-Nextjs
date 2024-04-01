const BookingRequest = () => {
  return (
    <div className="w-full">
      <div class="h-28"></div>
      <div class="relative overflow-hidden">
        <div class="relative bg-none px-2 py-10 md:px-0">
          <div class="mx-auto flex flex-col justify-center md:flex-row md:space-x-20 md:space-y-0">
            <div class="relative w-full rounded-3xl bg-amber-50 md:w-1/2">
              <div class="pb-12">
                <div class="flex w-full items-center justify-center rounded-full bg-yellow-300 p-2">
                  <p class="ml-2 text-2xl font-bold text-indigo-900">
                    Booking Request
                  </p>
                </div>

                <div class="mt-8 pt-4 text-zinc-600">
                  <div class="flex w-full px-4 md:px-28">
                    <div class="flex w-full border-t-4 border-yellow-400 px-2 pt-4">
                      <div>
                        <p>Location :</p>
                      </div>
                      <div class="ml-2 font-medium">
                        <p>Phnom Penh</p>
                      </div>
                    </div>
                    <div class="flex w-full items-center justify-end border-t-4 border-yellow-400 px-2 pt-4 italic">
                      <p>ServiceID :</p>
                      <p class="ml-2">39473940232</p>
                    </div>
                  </div>
                  <div class="flex w-full px-4 md:px-28">
                    <div class="flex w-full px-2 pb-4">
                      <div>
                        <p>Destination :</p>
                      </div>
                      <div class="ml-2 font-medium">
                        <p>Siem Reap</p>
                      </div>
                    </div>
                    <div class="flex w-full items-center justify-end px-2 pb-4 italic">
                      <p>Invoice Date :</p>
                      <p class="ml-2">January 12, 2024</p>
                    </div>
                  </div>
                </div>
                <div class="text-zinc-600">
                  <div class="flex w-full px-4 md:px-28">
                    <div class="flex w-full border-t-2 border-yellow-400 px-2 pt-4">
                      <div>
                        <p>User Name :</p>
                      </div>
                      <div class="ml-2 font-medium">
                        <p>Heng Sovanna</p>
                      </div>
                    </div>
                    <div class="flex w-full items-center justify-end border-t-2 border-yellow-400 pt-4">
                      <div class="flex w-full items-center justify-end">
                        <div class="flex w-full items-center justify-end">
                          <p>Tel :</p>
                        </div>
                        <div class="flex w-full items-center justify-center">
                          <p class="ml-2 font-medium">094 686 1232</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-full px-4 md:px-28">
                    <div class="flex w-full px-2 pb-4">
                      <div>
                        <p>Driver Name :</p>
                      </div>
                      <div class="ml-2 font-medium">
                        <p>Leng Kola</p>
                      </div>
                    </div>
                    <div class="flex w-full items-center justify-end pb-4">
                      <div class="flex w-full items-center justify-end">
                        <p>Tel :</p>
                      </div>
                      <div class="flex w-full items-center justify-center">
                        <p class="ml-2 font-medium">088 654 8899</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex w-full px-4 md:px-28">
                    <div class="flex w-full bg-yellow-200 px-2 py-2">
                      <div class="font-medium">
                        <p>Date :</p>
                      </div>
                      <div class="ml-2 font-medium">
                        <p>January 12, 2024</p>
                      </div>
                    </div>
                    <div class="flex w-full items-center justify-end bg-yellow-200 px-2">
                      <div class="flex w-28 items-center justify-end font-medium md:w-full">
                        <p>Time :</p>
                      </div>
                      <div class="flex w-full items-center justify-center">
                        <p class="ml-2 font-medium">8:00 - 12:00 AM</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex w-full px-4 md:px-28">
                    <div class="flex w-96 px-2 py-2 md:w-full">
                      <div class="font-medium">
                        <p>Vehicle :</p>
                      </div>
                      <div class="ml-2 font-medium">
                        <p>SUV</p>
                      </div>
                    </div>
                    <div class="flex w-28 items-center justify-center px-2 md:w-36">
                      <div class="flex w-12 items-center justify-center font-medium md:w-full">
                        <p>Seats :</p>
                      </div>
                      <div class="flex w-8 items-center justify-center md:w-12">
                        <p class="ml-2 font-medium">2</p>
                      </div>
                    </div>
                    <div class="flex w-full items-center justify-end px-2">
                      <div class="flex w-24 items-center justify-end font-medium md:w-full">
                        <p>Seat type :</p>
                      </div>
                      <div class="flex items-center justify-center md:w-full">
                        <p class="ml-2 font-medium">Front-Seat</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex w-full px-4 md:px-28">
                    <div class="flex w-full bg-yellow-200 px-2 py-2">
                      <div class="font-medium">
                        <p>Seat Price :</p>
                      </div>
                      <div class="ml-2 font-medium">
                        <p>10 $</p>
                      </div>
                    </div>
                    <div class="flex w-full items-center justify-end bg-yellow-200 px-2 text-lg">
                      <div class="flex w-full items-center justify-end font-bold">
                        <p>X 2</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex w-full px-4 md:px-28">
                    <div class="flex w-52 border-b-2 border-yellow-400 px-2 py-2 font-medium">
                      <div>
                        <p>Total Price :</p>
                      </div>
                      <div class="ml-2 font-medium">
                        <p>20 $</p>
                      </div>
                    </div>
                    <div class="flex w-full items-center border-b-2 border-yellow-400 p-2">
                      <div class="flex w-full items-center justify-end font-medium">
                        <p>Payment method :</p>
                      </div>
                      <div class="flex w-full items-center justify-end font-bold">
                        <p class="ml-2">pay-on-pickup</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex w-full px-4 md:px-28">
                    <div class="flex w-52 py-8 font-medium">
                      <button class="relative mb-8 mt-5 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-sm font-medium text-black shadow-lg shadow-slate-500 hover:border-2 hover:border-zinc-400 hover:shadow-none">
                        <a href="bookingReceipt.html">Accept Booking</a>
                        <div class="absolute right-0 mt-12 h-20 w-20 translate-x-1/2 transform rounded-full bg-yellow-200 bg-opacity-80"></div>
                      </button>
                    </div>
                    <div class="flex w-52 py-8 font-medium">
                      <button class="relative mb-8 mt-5 flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-sm font-medium text-black shadow-lg shadow-slate-500 hover:border-2 hover:border-zinc-400 hover:shadow-none">
                        <a href="bookingForm.html">Decline Booking</a>
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
  );
};

export default BookingRequest;
