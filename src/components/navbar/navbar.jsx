"use client";
import { useState, useEffect } from "react";
import SearchButton from "./searchButton";
import SearchBar from "../searchBar/searchBar";


const Header = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleMenu = () => {
    console.log("clicked")
    setOpen(!open);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'KH' : 'EN'));
  };

  return (

    <>
      <header className="antialiased bg-white bg-opacity-80 dark-mode:bg-gray-900">
        <div className="w-full text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <a
                href="/"
                className="text-lg font-extrabold tracking-tight uppercase rounded-lg focus:outline-none focus:shadow-outline transform transition-all hover:scale-105 "
              >
                <span className=" dark:text-yellow-400 hover:text-yellow-500 ">BookingBT</span>
              </a>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => toggleMenu()}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  )}
                </svg>
              </button>
            </div>
            <div className={`flex-col flex-grow ${open ? 'flex' : 'hidden'} md:flex md:flex-row`}>
              <nav className="flex flex-col md:flex-row md:mr-auto ">
                <a
                  href="/"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-orange-400 focus:text-orange-400 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                >
                  Home
                </a>
                <a
                  href="/bus/list"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-orange-400 focus:text-orange-400 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                >
                  Booking
                </a>
                <a
                  href="/bus/list"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-orange-400 focus:text-orange-400 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                >
                  Services
                </a>
                <a
                  href="/user"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-orange-400 focus:text-orange-400 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                >
                  Account
                </a>
              </nav>
              <div className="flex flex-col md:flex-row md:ml-auto">

                <button
                  className="flex items-center px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-orange-400 focus:text-orange-400 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                  id="search"
                  onClick={() => toggleMenu()}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 21l-4.35-4.35" />
                    <circle cx="10.5" cy="10.5" r="7.5" />
                  </svg>
                  Search
                </button>

                <button
                  onClick={toggleLanguage}
                  className="flex items-center px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-orange-400 focus:text-orange-400 hover:bg-gray-100 focus:bg-gray-100 focus:outline-bgray-100 focus:shadow-outline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                    />
                  </svg>

                  <span>{language}</span>
                </button>


                <button
                  className="px-4 py-2  border-2  border-orange-400 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-orange-400 focus:text-orange-400 hover:bg-gray-100 focus:bg-gray-100 focus:outline-bgray-100 focus:shadow-outline"
                >
                  <a href="/auth/login">
                    Login
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`left-0 top-16 h-full w-full -mt-12 ${open ? "block" : "hidden"
        }`}
      >
        <SearchBar />
      </div>
    </>



  );
};

export default Header;
