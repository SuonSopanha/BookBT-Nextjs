const ResetPassword = () => {
  return (
    <>
      <div
        className="min-h-screen py-40 bg-cover bg-no-repeat"
        // style={{
        //   backgroundImage: `linear-gradient(rgba(25, 44, 154, 0.444),rgba(0, 0, 0, 0.5)), url('image/Slide_3.jpg')`,
        // }}
      >
        <div className="container max-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `linear-gradient(rgba(34, 98, 215, 0.319),rgba(20, 48, 134, 0.642)), url('image/Slide_3.jpg')`,
              }}
            >
              <h1 className="text-white text-3xl font-medium">
                Password Recovery!
              </h1>
              <div>
                <p className="text-white">
                  Forgot your password? we're here to help you recover access to
                  your account.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl font-medium">Reset Password</h2>
              <p className="mt-4">Please enter your new password.</p>
              <form action="#" method="post">
                <div className="mt-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                    id="password"
                    required
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                    id="confirmPassword"
                    required
                  />
                </div>

                <div
                  id="passwordMismatchAlert"
                  className="text-red-500 mt-2 hidden"
                >
                  Passwords do not match. Please try again.
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    onclick="checkPasswords()"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
