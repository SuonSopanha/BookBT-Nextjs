
const Login = () => {
  return (
    <>
      <div
        className="min-h-screen py-40 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(25, 44, 154, 0.444), rgba(0, 0, 0, 0.5)), url(image/Slide_3.jpg)",
        }}
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
                  Welcome to our website login page we are glad to have you here
                  to visit our website. We'll be glad to keep your information
                  safe.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl font-medium">Login</h2>
              <p className="mt-4">Please login to your account to continue.</p>
              <form action="#">
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="border border-gray-400 py-1 px-2 w-full"
                  ></input>
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                  ></input>
                </div>
                <div id="passwordAlert" className="text-red-500 mt-2 hidden">
                  Incorrect password. Please try again.
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    onclick="checkPassword()"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Login
                  </button>
                </div>
                <div className="mt-4">
                  <span className="ml-2">
                    Don't have an account?
                    <a href="/signup" className="text-blue-500">
                      {" "}
                      Create an account
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
