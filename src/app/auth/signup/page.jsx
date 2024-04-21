const Signup = () => {
  return (
    <>
      <div
        className="min-h-screen py-40 bg-cover bg-no-repeat"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(rgba(25, 44, 154, 0.444), rgba(0, 0, 0, 0.5)), url(image/Slide_3.jpg)",
        // }}
      >
        <div className="container max-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(34, 98, 215, 0.319), rgba(20, 48, 134, 0.642)), url(image/Slide_3.jpg)",
              }}
            >
              <h1 className="text-white text-3xl font-medium">Welcome</h1>
              <div>
                <p className="text-white">
                  To Create an account. It's free and only takes a minute and
                  we'll be glad to keep your information safe.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl font-medium">Register</h2>
              <p className="mt-4">
                Create your account. It's free and only takes a minute.
              </p>
              <form id="registrationForm" action="#">

                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-gray-400 py-1 px-2 w-full"
                  ></input>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="border border-gray-400 py-1 px-2"
                  ></input>
                  <select
                    placeholder="Gender"
                    className="border border-gray-400 py-1 px-2"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full"
                  ></input>
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                  ></input>
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                  ></input>
                </div>
                <div className="mt-4">
                  <input type="checkbox" className="border border-gray-400"></input>
                  <span className="ml-2">
                    I agree with the{" "}
                    <a href="/terms" className="text-blue-500">
                      terms and conditions
                    </a>
                  </span>
                </div>
                <div className="mt-8">
                  <a
                    href="RegisterDriver.html"
                    id="registerButton"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Register
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
