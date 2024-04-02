const BookingReciept = () => {
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
                    Booking Reciept
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
                        <a href="homePage.html">Back</a>
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
      <div class="relative">
        <div class="h-20 w-full bg-sky-950"></div>
        <div class="relative bg-sky-800">
          <div class="mx-auto flex flex-col justify-center space-y-4 p-4 md:flex-row md:space-x-20 md:space-y-0">
            <div class="relative -mt-24 rounded-lg bg-sky-900 text-white">
              <div class="my-2 flex h-20 items-center justify-center">
                <p class="text-4xl font-bold">TaxiBus Service</p>
              </div>

              <div class="m-4 pb-12">
                <div>
                  <p>
                    Laverage agile framworks to provide a <br />
                    robust synopsis for strategy collaborative <br />
                    thinking for further the overall value <br />
                    proposition.
                  </p>
                </div>
                <div class="my-2 flex">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/circled-envelope.png"
                    alt="circled-envelope"
                  />
                  <div class="ml-2">
                    <p class="font-bold">Email</p>
                    <p>TaxiBus777@gmial.com</p>
                  </div>
                </div>
                <div class="my-2 flex">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/ios-filled/50/228BE6/apple-phone.png"
                    alt="apple-phone"
                  />
                  <div class="ml-2">
                    <p class="font-bold">Call Us</p>
                    <p>010 23 1010 / 079 643 5050</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center">
              <div class="flex h-full items-center justify-center">
                <div class="relative w-48 rounded-lg bg-sky-800 p-4 text-white">
                  <div class="items-left flex flex-col space-y-4 font-medium">
                    <p>
                      <a href="#" class="hover:border-b-2">
                        About Us
                      </a>
                    </p>
                    <p>
                      <a href="#" class="hover:border-b-2">
                        Our Team
                      </a>
                    </p>
                    <p>
                      <a href="#" class="hover:border-b-2">
                        Our Project
                      </a>
                    </p>
                    <p>
                      <a href="#" class="hover:border-b-2">
                        Pricing
                      </a>
                    </p>
                    <p>
                      <a href="#" class="hover:border-b-2">
                        Contact
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex h-full items-center justify-center">
                <div class="relative w-48 rounded-lg bg-sky-800 p-4 text-white">
                  <div class="items-left flex flex-col space-y-4 font-medium">
                    <p>
                      <a href="#" class="hover:border-b-2">
                        Style Guide
                      </a>
                    </p>
                    <p>
                      <a href="#" class="hover:border-b-2">
                        Changelog
                      </a>
                    </p>
                    <p>
                      <a href="#" class="hover:border-b-2">
                        License
                      </a>
                    </p>
                    <p>
                      <a href="#" class="hover:border-b-2">
                        Protected
                      </a>
                    </p>
                    <p>
                      <a href="#" class="hover:border-b-2">
                        Not Found
                      </a>
                    </p>
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
