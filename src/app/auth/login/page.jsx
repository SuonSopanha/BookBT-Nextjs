"use client"

import { useState } from 'react';
import axios from 'axios';
import { redirect } from 'next/navigation';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const response = await axios.post('http://localhost:8000/api/v1/auth/login', {
        email : email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token); // Store the token in local storage 
       // Redirect to the dashboard page upon successful login
      window.location.href = '/user';
    } catch (error) {
      // Handle network errors or HTTP errors
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with error:', error.response.data);
        setError(error.response.data.message); // Set error message from server response
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        setError('An error occurred. Please try again later.');
      } else {
        // Something else happened
        console.error('Something else happened:', error);
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen py-40 bg-cover bg-no-repeat">
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
              <form onSubmit={handleLogin}>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="email"
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
                {error && <div className="text-red-500 mt-2">{error}</div>}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Logging in...' : 'Login'}
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
