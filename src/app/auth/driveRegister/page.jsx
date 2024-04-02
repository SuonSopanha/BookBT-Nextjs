const DriveRegister = () => {
  return (
    <>
      <div class="bg-white mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-start">
        <h1 class="text-3xl text-gray-700 pt-20 pb-8">Driver Information</h1>
        <hr class="-mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20" />
        <div class="py-8">
          <div class="flex mb-4 px-1 ">
            <span class="flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
              1
            </span>
            <span class="text-gray-700 font-bold">Personal Information</span>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
              <label class="text-gray-600 font-light">First Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div class="w-full sm:w-1/2 pl-0 sm:pl-4">
              <label class="text-gray-600 font-light">Last Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
          </div>
          <div class="flex flex-wrap mt-4">
            <div class="w-full sm:w-2/4 mb-4 sm:mb-0 pr-0 sm:pr-4">
              <label class="text-gray-600 font-light">
                Company Name (optional)
              </label>
              <input
                type="text"
                placeholder="Enter Company Name (optional)"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div class="w-full sm:w-1/4 pl-0 sm:pl-4">
              <label class="text-gray-600 font-light">Date of Birth</label>
              <input
                type="date"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div class="w-full sm:w-1/4 pl-0 sm:pl-4">
              <label class="text-gray-600 font-light">Gender</label>
              <select class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div class="flex flex-wrap mt-4">
            <div class="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
              <label class="text-gray-600 font-light">Contact Number</label>
              <input
                type="text"
                placeholder="Enter your Contact Number"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div class="w-full sm:w-1/2 pl-0 sm:pl-4">
              <label class="text-gray-600 font-light">Email</label>
              <input
                type="text"
                placeholder="Enter your Email"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
          </div>
          <div class="flex flex-wrap mt-4">
            <div class="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
              <label class="text-gray-600 font-light">Address</label>
              <input
                type="text"
                placeholder="Enter your Address"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div class="w-full sm:w-1/2 pl-0 sm:pl-4">
              <label class="text-gray-600 font-light">Location</label>
              <input
                type="text"
                placeholder="Enter your Location"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
          </div>

          <div class="flex flex-wrap mt-4">
            <div class="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
              <label class="block text-gray-700 text-sm font-semibold mb-2">
                Add Profile
              </label>
              <label class="w-1/3 flex flex-col items-center justify-center bg-slate-100 border-dashed border-2 border-gray-400 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-300 h-32 relative">
                <input
                  type="file"
                  class="hidden"
                  onchange="showImagePreview(this, 'preview1', 'fileLabel1')"
                ></input>
                <span
                  id="fileLabel1"
                  class="text-gray-600 font-bold py-2 px-4 hover:text-blue-700"
                >
                  Choose a file
                </span>
                <img id="preview1" class="hidden mt-2" alt="Preview"></img>
              </label>
            </div>
            <div class="w-full sm:w-1/2 pl-0 sm:pl-4">
              <label class="block text-gray-700 text-sm font-semibold mb-2">
                Add your car
              </label>
              <label class="w-1/3 flex flex-col items-center justify-center bg-slate-100 border-dashed border-2 border-gray-400 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-300 h-32 relative">
                <input
                  type="file"
                  class="hidden"
                  onchange="showImagePreview(this, 'preview2', 'fileLabel2')"
                ></input>
                <span
                  id="fileLabel2"
                  class="text-gray-600 font-bold py-2 px-4 hover:text-blue-700"
                >
                  Choose a file
                </span>
                <img id="preview2" class="hidden mt-2" alt="Preview"></img>
              </label>
            </div>
          </div>

          <div class="flex mb-4 px-1 mt-8">
            <span class="flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
              2
            </span>
            <span class="text-gray-700 font-bold">Vehicle Information</span>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
              <label class="text-gray-600 font-light">Destination</label>
              <input
                type="text"
                placeholder="Enter your Destination"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div class="w-full sm:w-1/2 pl-0 sm:pl-4">
              <label class="text-gray-600 font-light">Vehicle type</label>
              <input
                type="text"
                placeholder="Enter your Vehicle type"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
          </div>
          <div class="flex flex-wrap mt-4">
            <div class="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
              <label class="text-gray-600 font-light">Vehicle Count</label>
              <input
                type="text"
                placeholder="Enter your Vehicle Count"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div class="w-full sm:w-1/2 pl-0 sm:pl-4">
              <label class="text-gray-600 font-light">Base fare</label>
              <input
                type="text"
                placeholder="Enter your Base fare"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
          </div>
          <div class="flex flex-wrap mt-4">
            <div class="w-full sm:w-1/2 mb-4 sm:mb-0 pr-0 sm:pr-4">
              <label class="text-gray-600 font-light">Additional charges</label>
              <input
                type="text"
                placeholder="Enter your Additional charges"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div class="w-full sm:w-1/2 pl-0 sm:pl-4">
              <label class="text-gray-600 font-light">
                Pricing Description
              </label>
              <input
                type="text"
                placeholder="Enter your Pricing Description"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
          </div>
          <div class="flex flex-wrap mt-4">
            <div class="w-full sm:w-1/3 mb-4 sm:mb-0 pr-0 sm:pr-4">
              <label class="text-gray-600 font-light">Day of week</label>
              <input
                type="text"
                placeholder="Enter your Day of week "
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div class="w-full sm:w-1/3 pl-0 sm:pl-4">
              <label class="text-gray-600 font-light">Fleet time</label>
              <input
                type="text"
                placeholder="Enter your Fleet time"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
            <div class="w-full sm:w-1/3 pl-0 sm:pl-4">
              <label class="text-gray-600 font-light">Arrive time</label>
              <input
                type="text"
                placeholder="Enter arrive time"
                class="w-full mt-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 bg-slate-100"
              ></input>
            </div>
          </div>

          <div class="flex justify-center mt-4">
            <button class="w-full sm:w-1/5 lg:w-1/5 h-16 mt-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriveRegister;
