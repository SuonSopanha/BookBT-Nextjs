const NotificationPage = () => {
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
                      Notifications
                    </p>
                  </div>
                  <div className="mt-8 pt-4 text-zinc-600">
                    <div className="flex w-full px-4 md:px-16">
                      <div className="flex w-full border-t-4 border-yellow-400 px-2 pt-4">
                        <div>
                          <p className="text-xs sm:text-base">Title:</p>
                        </div>
                        <div className="ml-2 font-bold">
                          <p className="text-xs sm:text-base">New Booking Available</p>
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-end border-t-4 border-yellow-400 px-2 pt-4 italic">
                        <p className="text-xs sm:text-base mr-2 sm:mr-0">Date:</p>
                        <p className="ml-2 text-xs sm:text-base font-medium">June 12, 2024</p>
                      </div>
                    </div>
                    <div className="flex w-full px-4 md:px-16">
                      <div className="flex w-full px-2 pb-4">
                        <div>
                          <p className="text-xs sm:text-base">Message:</p>
                        </div>
                        <div className="ml-2">
                          <p className="text-xs sm:text-base">
                            You have a new booking from Phnom Penh to Siem Reap on January 12, 2024. Please check your booking details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col  w-full px-4 md:px-16">
                    <div className="flex space-x-2 w-52 py-8 font-medium">
                      <button className="relative mb-8 mt-5 flex h-8 w-28 sm:h-12 sm:w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 text-xl font-medium text-black shadow-lg shadow-slate-500 hover:border-2 hover:border-zinc-400 hover:shadow-none">
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
    );
  };
  
  export default NotificationPage;
  