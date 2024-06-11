"use client"

import { useState } from 'react';
import axios from 'axios';
import { redirect } from 'next/navigation';

const Signup = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const handleSignup = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }     
  
    try {
      setIsSubmitting(true); // Set isSubmitting to true when form is submitted
  
      const response = await axios.post('http://localhost:8000/api/v1/auth/signup', {
        fullname: name,
        email,
        password,
        confirm_password: confirmPassword
      });
  
      console.log(response.data);
  
      // Redirect to the login page after successful signup
      window.location.href = '/auth/login';
    } catch (error) {
      // Handle network errors or HTTP errors
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with error:', error.response.data);
        setError(error.response.data.message); // Set error message from server response
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from server');
        setError('Failed to connect to the server');
      } else {
        // Something else happened while setting up the request
        console.error('Error setting up the request:', error.message);
        setError('An unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false); // Reset isSubmitting to false regardless of success or failure
    }
  };

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
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12  rounded-xl mx-auto shadow-lg overflow-hidden">
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
            <div className="w-full lg:w-1/2 py-16 px-12 bg-white">
              <h2 className="text-3xl font-medium">Register</h2>
              <p className="mt-4 text-xs">
                Create your account. It's free and only takes a minute.
              </p>
              <form id="registrationForm" onSubmit={handleSignup}>

                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-gray-400 py-1 px-2 w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    disabled={isSubmitting} // Disable the button when isSubmitting is true
                  >
                    {isSubmitting ? 'Signing Up...' : 'Register'}
                  </button>
                </div>
                {error && <p className="text-red-500 mt-4">{error}</p>}
              </form>
              <div class="flex items-center mt-4">
                  <div class="flex-grow border-t border-gray-400"></div>
                  <span class="mx-2 text-xs text-gray-500">   OR   </span>
                  <div class="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="mt-4">
                <button
                  type="submit"
                  className="w-full border border-blue-500 hover:bg-blue-300 text-blue-500 text-sm py-2 px-4 rounded flex items-center justify-center space-x-2"
                  disabled={isSubmitting}
                >
                  <svg
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a9 9 0 00-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 00-9-9zm0 16v-5h2.25l.34-2.5H10V8.62c0-.68.19-1.14 1.15-1.14h1.23V5.15A16.87 16.87 0 0010 5a3.22 3.22 0 00-3.44 3.45V8h-2v2.5h2V17h2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Register with Facebook</span>
                </button>

                </div>

                <div className="mt-4 ">
                  <span className="ml-2 text-xs">
                    Already have an account?
                    <a href="/auth/login" className="text-blue-500">
                      {" "}
                      Sign In
                    </a>
                  </span>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
