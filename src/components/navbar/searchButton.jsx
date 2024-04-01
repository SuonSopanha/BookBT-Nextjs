"use client";

const SearchButton = () => {
  return (
    <button
      type="button"
      className="ml-2 rounded bg-white p-2 hover:bg-yellow-500"
      id="search"
      onClick={() => console.log("Button clicked!")}
    >
      <div className="text-black">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-5-5M11 15c-3.5 0-6.5-3-6.5-6.5S7.5 2 11 2s6.5 3 6.5 6.5-3 6.5-6.5 6.5z"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default SearchButton;