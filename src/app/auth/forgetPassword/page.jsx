const ForgetPassword = () => {
  return (
    <div>
      <div
        className="min-h-screen py-40 bg-cover bg-no-repeat"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(rgba(25, 44, 154, 0.444), rgba(0, 0, 0, 0.5)), url(image/Slide_3.jpg)",
        //   // Add other styles here as needed
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
              <h1 className="text-white text-3xl font-medium">
                Password Recovery!
              </h1>
              <div>
                <p className="text-white">
                  Please enter your email address below, and we ll guide you
                  through the process of resetting your password.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl font-medium">Forgot Password</h2>
              <p className="mt-4">Please login to your account to continue.</p>
              <form action="#" method="post">
                <div className="mb-4 mt-4">
                  <label
                    for="email"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  ></input>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                  >
                    Reset Password
                  </button>
                  <a href="#" className="text-blue-500 hover:underline">
                    Back to Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
