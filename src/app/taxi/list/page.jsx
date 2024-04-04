
const TaxiList = () => {
    return (
        <>
          <div id="searchSection" className="mt-20 relative h-20 hidden">
            <form className="max-w-xl mx-auto">
              <div className="flex items-center justify-center">
                <div className="bg-black bg-opacity-50 px-5 py-5 rounded-lg shadow-lg ">
                  <div className="flex items-center me-4 mb-5">
                    <input
                      id="yellow-radio"
                      type="radio"
                      value="yellow"
                      name="colored-radio"
                      className="hidden"
                    ></input>
                    <label
                      for="yellow-radio"
                      className="flex items-center cursor-pointer"
                    >
                      <div className="mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center">
                        <div
                          id="custom-radio-yellow"
                          className="w-3 h-3  rounded-full transition duration-200 ease-in-out"
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        TXAI Service
                      </span>
                    </label>
                    <input
                      id="red-radio"
                      type="radio"
                      value="red"
                      name="colored-radio"
                      className="hidden"
                    ></input>
                    <label for="red-radio" className="flex items-center cursor-pointer">
                      <div className="mx-5 w-6 h-6 border-2 border-yellow-300 rounded-full flex-shrink-0 mr-2 flex justify-center items-center">
                        <div
                          id="custom-radio-red"
                          className="w-3 h-3  rounded-full transition duration-200 ease-in-out"
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        BUS Service
                      </span>
                    </label>
                  </div>
    
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="start-location"
                      className="text-sm font-medium block w-64 p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-s-lg focus:outline-none focus:border-yellow-500"
                      placeholder="Start Location"
                      required
                    ></input>
                    <button
                      type="button"
                      className="p-2.5 text-sm font-medium bg-gray-900 bg-opacity-50 text-yellow-300 border-2 border-yellow-300 hover:bg-yellow-500 hover:bg-opacity-30 hover:text-yellow-600 focus:outline-none focus:bg-yellow-400 focus:bg-opacity-50 focus:border-yellow-600"
                    >
                      <svg
                        className="w-4 h-4 inline-block text-white"
                        aria-hidden="true"
                        fill="none"
                        viewBox="0 0 16 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="end-location"
                      className="text-sm font-medium block w-64 p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-e-lg focus:outline-none focus:border-yellow-500"
                      placeholder="End Location"
                      required
                    ></input>
                    <input
                      type="date"
                      id="start-date"
                      className="text-sm font-medium block p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-s-lg ml-2 focus:outline-none focus:border-yellow-500"
                      required
                    ></input>
                    <input
                      type="time"
                      id="start-time"
                      className="text-sm font-medium block p-2.5 text-white bg-gray-900 bg-opacity-50 border-2 border-yellow-300 rounded-e-lg  focus:outline-none focus:border-yellow-500"
                      required
                    ></input>
                    <button className="ml-5 p-3 text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transform transition-transform hover:scale-105 relative overflow-hidden w-36">
                      <span className="relative z-10">Search</span>
                      <span className="absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-0 mix-blend-multiply hover:opacity-50 transition-opacity duration-300"></span>
                    </button>
                  </div>
    
                  <div className="flex items-center mt-5 mx-5 ">
                    <span className="text-base font-medium text-gray-900 dark:text-gray-300 mr-5">
                      More options :
                    </span>
                    <label
                      for="option1"
                      className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                    >
                      <input type="checkbox" id="option1" className="hidden"></input>
                      <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                        <svg
                          className="w-5 h-5 text-yellow-300 hidden checkmark"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                          />
                        </svg>
                      </div>
                      Affordable
                    </label>
                    <label
                      for="option2"
                      className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                    >
                      <input type="checkbox" id="option2" className="hidden"></input>
                      <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                        <svg
                          className="w-5 h-5 text-yellow-300 hidden checkmark"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                          />
                        </svg>
                      </div>
                      Avaiabliity
                    </label>
                    <label
                      for="option3"
                      className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                    >
                      <input type="checkbox" id="option3" className="hidden"></input>
                      <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                        <svg
                          className="w-5 h-5 text-yellow-300 hidden checkmark"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                          />
                        </svg>
                      </div>
                      Nearby
                    </label>
                    <label
                      for="option4"
                      className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                    >
                      <input type="checkbox" id="option4" className="hidden"></input>
                      <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2">
                        <svg
                          className="w-5 h-5 text-yellow-300 hidden checkmark"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                          />
                        </svg>
                      </div>
                      High Rating
                    </label>
                    <label
                      for="option5"
                      className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center cursor-pointer bg-gray-500 bg-opacity-50 px-3 py-3 rounded-lg"
                    >
                      <input type="checkbox" id="option5" className="hidden"></input>
                      <div className="w-5 h-5 border-2 border-yellow-300 flex justify-center items-center mr-2 ">
                        <svg
                          className="w-5 h-5 text-yellow-300 hidden checkmark"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M1 13.5l2-2 4 4 8-8 2 2-10 10-6-6z"
                          />
                        </svg>
                      </div>
                      Popular
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
    
          <div className=" mt-48 h-fit"></div>
          <div className="relative">
            <div className="relative bg-white pt-2">
              <div className="text-center text-2xl font-medium"></div>
    
              <div className="-mt-32 flex h-32 w-full flex-col items-center justify-end bg-gradient-to-tr from-yellow-300 to-yellow-100 p-12">
                <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                  <div className="relative flex-shrink-0">
                    <input
                      type="text"
                      placeholder="Search Bus"
                      className="block h-14 w-full rounded-lg px-4 py-3 text-lg font-medium text-black md:w-96"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-1 flex-shrink-0 items-center justify-center gap-x-1 bg-transparent p-2 font-semibold text-white"
                    >
                      <img
                        className="object-contain"
                        width="25"
                        height="25"
                        src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png"
                        alt="search--v1"
                      />
                    </button>
                  </div>
    
                  <div className="h-14 items-center justify-center rounded-md bg-white p-2 text-center md:w-44">
                    <div className="flex justify-center">
                      <img
                        className="object-contain"
                        width="20"
                        height="20"
                        src="https://img.icons8.com/material-rounded/24/calendar--v1.png"
                        alt="calendar--v1"
                      />
                      <p className="ml-2 font-medium text-zinc-600">Pick-up date</p>
                    </div>
                    <p className="text-xs font-medium">Sun, 10 Dec</p>
                  </div>
    
                  <div className="h-14 items-center justify-center rounded-md bg-white p-2 text-center md:w-44">
                    <div className="flex items-center justify-center">
                      <img
                        className="object-contain"
                        width="20"
                        height="20"
                        src="https://img.icons8.com/windows/32/clock--v1.png"
                        alt="clock--v1"
                      />
                      <p className="ml-2 font-medium text-zinc-600">Time</p>
                    </div>
                    <p className="text-xs font-medium">10:00 AM</p>
                  </div>
    
                  <a href="#">
                    <div className="flex h-14 w-full items-center justify-center rounded-lg bg-blue-800 p-2 font-medium text-white md:w-24">
                      <p>Search</p>
                    </div>
                  </a>
                </div>
              </div>
    
              <div className="bg-white p-5">
                <div className="text-center text-4xl font-medium">
                  <p className="inline border-b-4 border-yellow-500">Taxi Services</p>
                  <div className="flex justify-center bg-white pt-5">
                    <span className="w-2 bg-yellow-400"></span>
                    <p className="w-fit bg-gray-300 px-5 text-sm font-medium">
                      View Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-white pt-2">
              <div className="flex h-full items-center justify-center bg-white p-10">
                <div className="border-t-2 border-yellow-500">
                  <div className="md:max-w-fixed flex flex-col items-center rounded-lg md:flex-row dark:bg-white">
                    <img
                      className="h-full w-full object-cover md:h-auto md:w-96 md:rounded-none"
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaGhoaHBocGhweHBocGRkcHBgYGhocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJSs0NDQ0MTc0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOAA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAEQQAAIBAgMFAwsBBQcDBQEAAAECEQADBBIhBTFBUWFxgZEGEyIyQlKhscHR8JIUYnKi4RUjM1OC0vGTssIWJERUYwf/xAAbAQACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAC8RAAICAQMDAwMDAwUAAAAAAAABAhEDBCExEkFRBRNhIoGRFDJxQlKxM1Oh0fD/2gAMAwEAAhEDEQA/AMKKmKrFSFJseTFSFRqQqBEhUwKgKsUVCHoFSArypqKhZGKrxFuVNERXZalllGGMqD0otKFwywWXkfgaMUVTCjwWKoqq4NavUVVeFCmE+DoqSrUVrs1ECSqQuGqy9RL1KJZeHXivhVi20O4/nfQeavCapwTCU2g8WCKvWeVLbd9huNG2sdp6S+H2qlBIjydReHqRYHeAe2uS+jbiJ5cavTDAjXfU6QbFt3ZtpvYynmvon4UHf2KT6rhh7rrP8wp4+EbgQaoKMN4iiUpRKcYsyWK2SV9a2y/vJ6S+G8UC2CJ9Vg/TcfA1vBcofE4K0/rIJ5jQ+Ipsc7XIqWBPgw37G/uGva139hW/eufqrqZ+oQv9OxAKkKrU1NTWYai0VJagtWLULJLViioLVqiqsskBUgtcoq1VqWWRArxBPLx7PuKtCVVicKGEHSpZCh/QuA8xH1o21dU6TB5GhMTbhE1nJAnmBp8oq02Aw61ZaDglVX1oQB05keIr18XIgiDVUXZBr4FRF+hmWuAorRFFhXnq8N2h8pqLGpaKcWFecr0XKBzV55w8NaLYFpjBGkxRyLpFA4ZCACd/5pVvnstKlK+BuONK2TuWyTFF2Lzr7UjkfvvqGGcOJHAxRYt0HU0McYvcLw2JLaRrRKXAaDsCGFdjMIy3iykgPD6cz6wPfPjWnT4/ebjdMwazN+nSlVphb4dTwoe5gzw1r1MWJg69R8aMQyJGoq8mCUOUVh1UMn7WLf2VuVdTLzldSaNHUfMw1WK1ADP0qa5+n530VC0/gYK1XIaVs7qJMAfnWh22mw3RUUW+COaRoENXqayRx1w+2aqe+50LEjqaNYmD7q8GzOIQb2A491EKKwCsRqKNTa90GQ3dvHhzqPE+xay+Ubda9JrLYbbbtock9dJ+NMBisRwRT40txaDU0xniVlG7K9wyyoPSlj4q+VKm2uoiddO6mWBByKDvAoWqDTsIuerA3nQdpMD51fjdh72QMUGjHVvSiSBAncQZJjWoWgZB3wQRPStNs7aoQZWXSSZH7xJPbvjuqkRmDuYQjUajpVGQjfX0rHW7FxSVUFzpIEEcy0RmHQ76S2bPnBlewqZdPWDMANFWY0YiDxgdoqy1JmPK1BhWxfYVs7iR4Ghbvk9yZO+R8qgXUZXLUSlP02GC2rZR728RzHT7UatqxaHoJnYe2/0FXZLTAUwruJUQvvHQfHWq7qWk3nO38v8AWpYvFO5iZ+AHdQ2FtSQx11js1iflQ0XdBeAZifS9rhy5Cm9u3Rey9nKUMj0mBgxqsbiPnU7Fru5jkRvHjQ8snVsRTC7qNxmGL2gdxUwew6fOKJsWqNw9oEMh4j/inYpOElJGbVQWXG4sRYbZqHj2fMimNrChdw+Y3dhrrNkKdBRlpdB+b6fPLKT3ZixYIwVEPMiuqv8AaRzrqEbsfDBcPOpedI41NcBc9Em04DzlJEAwYMdhqjHWXRfSQrrGvMcKHa6D6l5KL98v2CqQhNeoJp/sfBaZiNTu7KZJqKJGLk6FVnZ9w7ljtq07HuRwrYYfCTwov9hPKkvKzQsC8nz1sDcUaoYodlM7or6K2D6UBidkoZkUSzeSpabwzDskU42VtJkXLM9DJjlB5RFTx+xyuq+FLcMIcBhMkDXQSTAo21JbCXGUHuaJduGYyg+NMsDjlcwRkY89x766zscoD/dtPVGUD+X7UNfwjkzKDgBMeE0hpMam13H73EtgFiATuH1qK7QT3hSF8NdI1GaN2s/Kh7lhhvVl7RVdKDcmaV9oINc0UNd2/knK89N/iDWczsOJphsxEuEl5LqOPu8wajVblptjHD+Ut4n1EI6gg/A0a3lBHr2Z3QAfR7TQCMnsmewT8d1EhDElTl5/ccKCyy3F7SzKGMS0kjkAYUc6Ew20LAc+dV3AGgSIJnjqPnVePtjIxHKleGERO4/0pkWkJyyaqmPMXtZL7gJZFpUSFA1kA72gAA6/1q7ZFgOz2zpmXMvbuI+XhWdbHInpZgY1gHWDvEdhrRYR8ro665SD2g7x3gkd9BbbthYZ9SaZs9lKCiNHpEa9CNGEcBINV43C5XJ4N6Xfub6H/VUsLiraM4zAK0XF7xDDxg99VYnbdpmVFJLZhr26a8QO2N1Wgy+whFHIIINU21ogrR0LvsUYi1Dk89fGpAQv5yqy5BjoPgfw1W6wInhRiGqKvNjkPCuoePya6ioX1GWw+0VzW8gESfWALZmtjMZM+0xIFZny+geaAAkliSI49w51fhrpAEHcwYd4/pSfymvu5thgPaM892+skFKWVSb4sutxfs3C5mE7q2WAwegG7hSDyesZm14a1rrZAp83bNmFUhthcGq0W9lY4UvsY2dBu58KNTUaEHoCJ8KGtuA7+QW5hxQ13DdKPuIZrmQmhoYmZvHYXwrIbWwcelHQ/et7jx6JBpBjbIdWHNT8qKLpg5YqUT6J5P3CbFok5i2GsMTzJRZ7d9WC9mLIwkzmg66QB9BQvk3dzYbDMP8A6tsHtQZT/wBtMCgzswiYnupLe7+GZZrZMg+y8OzqHtJJiCEGumskCqcR5PWDOUOhn2bjR+liR8KaYZTmkjgvcY/4r25x7aZFunZMW9mL2h5MiCVdX1Ih1CtoJ9dI114qaRYrY72WnKV4ZpDqeYFxeH8QFbzGMcjEDc57T6K660mXEZiVLSPSbjvykkSeOlTroCU5RlQDsrFWxC3Eyngw1B/OlOLltCIBBHJdfgKIxWy7ThMgRGaDmGkgccuoc9d/WgXwt20TALoBOZQTA6r6w7s3aKkelvwN65VdAGJ2YzyqIVBn14APUA61nsTsHEaI67hGjLBA0nfW4wGJVyNfzoeNN1tJ7ShgefDqOR61rhihzJv7GLJmyPZJX8nzXA+SNxyAAoniSY8QIp7b2W9hUR2DaEBgIGh3dwitwHKiAMyjdA9Idqj1h1GvTjSnbeZkDqgcE6MG0WAZJCzMwBPCRpzXljH+lP7j9JKcpKLat/YzC7LdmJz6H2dY8P6U4wWylWJI7h+fKvdjo10E5GQQDJYEGSRoQNfVbw605TAR7R8KVGN7mvLeKTjLZr7l9gg1ddcBZNUJhwPaNTe0CNZI5TyNF2oR1K7KMHczksN0QDzMkmiS3Th3VC0IERHZuqxquPAE3bsq810rqtiuoxex8ZuO+iiRpPcJP1rzHYN3QSczLDCd40ggcx9qKx6Nntg+6F7tftXoxLEkiIBj6aUmK2s3KEemqA/J7TN21rLGElQW8KQbGsekerE/GtfZw2ZYI0q3uyR2iUf+0ykOyggEwGI0G86HdqNaXphMOWz22nkZmOxuNPcVsiy6BGRlylipQkQW9bQaGYE86HsbHUZVQEKogabxxk8TxnrRN7Eit9w7ZySN8jhRN10UaxROAw4RI5CsbtJ3uXmVdQJgAgFo4SdKBhqmynbe1ApPoEjjG/40kt7RRw/RHbwUzWne1eR0QIgRozOUzADLJOYNMgyIgTpG+lLFGuZrwCKjgOwUtmTMM2VRqcyyO+ipICTb4N7sfZ7WsPZQggpaRT25RPxmjfNNr6PfI6aUdhr6XUS6hJVxmUkEGDzB3Gp5eppbirYGzVMCto44Ebp1HDhXOaMygDfQeJEjQjxqkuSJRjweWUMgxMTroKi2FJaSBoZ4RqCI3a1fgwRIYQJ0/OVENA6+P0oXBN2TojJ9RQtvU+iBwHSeWlQyEDWO7p/SiSupqF3XSrS3sLpS4FGM2Qjkvpbcmcy7yf31mDu37+RFDK9y1/iLK++uo7+I7/E0/uuVUsEZzMBQQpJAkksQYAGu6l1zbFxRrYQg8BfY7wpg/wB2B7Ud1FGUob3sLyLHLZlmGvAgMpmhtq7RW2MwnzjcBorjiXH1GtZrZd5/OXCmgBJyTIEEyo6QVojHXyzrcZCNV3j0TlOoB3c6c8rUbRl9pdQy2JtYehbcQfVD5pmNFzaDWIE1pGQbxNZIOMReXKmUeiIHAAyWMART26z2tTmuWuY1e2P3gPXXqNeYOpo8Tc40+3cCf0yvyMCtePaqOEvKyBkcMh1BnTtB5USCOBqpRaDjK0CG1UwlXNFSFAmE0UZK6iI7K6isqj43tdy4R11Knlz3Dd2jvoPC5l1AlWntWQYrUlFIyEiOwb+emlCPs7Q5QB1nTtikQltRvYLsW3J7K3OCtSutYzY3rVs8Ne0olyR8Fvm6JtAAbqGtsWNQxzhIBs3bpPC2F0HOXYD40ZQQ7b+ysY+l5uGtbXDFCk+mOjiCOhFZHHpbN5gbqqT6okSTyA40EkGhgNV1rN7ZsH0go1IgdSd0d9P8HigfQYekNCRu041Zs3Bi5iUTQgHOQTvCENHiBUKlsrNottbaIi+iqKqADgFAAHwqszqJq26mvKqzbA3d9UzNuUEkAkyRzqtl3NqDvGm+edEi3pOu/lXC38d8fmnbQl1uVoOHLjHSpgn85V6LYnT8+9TyfkVLLVng6j/mpADj/WvDbH5vr1RO7tqrCUmC7XJ82oUT6bRv3ZRr0pBjWIyqdNJPOcx+1ai6pIGgJBkAkga7xMdB8aR3tlnTMj6TqgzLqxb2Zga6dlSS6lsKkt2I9i6Yi4v7w/mQfVTWpZ7aYZzdjIpJMifWIA0HUjxrPWrATEyJh1G/fKNB4D3xTPyjMYS7/oHi6U1fsdhYMfXnhF92kR2RdXJmtlXUaPkBBDDjrqw404tXgwlTWd8gHGS6vFWDdzLH/jT3GWgsuhCkAkjg0cIHHsqYsjSSY31DRxxZpRj28lV3Z8MXsEI51ZD/AIdw82A9Rv3x3g1fs/Eh3KEG3dA1ttvI5qZh16j51HBYsOJylTyIj41ZjraOhzrmK6pBh1bgUYaqeytV2tjl1TD3tkQTXgShMNi3CKGRnIgHVc8c/SIB39KL88ORHbH0NZ5RkmaYyi0dlPI+H9a6p+dTm353V1VUi9vJ8qRn43bJ7c30AohLrT/jWPBvvWC864Gq/wAwqL7QI0AoUl2SHqM2ursa3Y16TJ5ya1WHaRpWD2VeykTuNbLAvuNRjlwN8Picu/Qc4MDtPCmFrEqRo6fqFU4RNJrrllOKDtGh8RTIsCkyGJUOCCZHMH6isvisKEJKiJ48e804xNlIkkwOtZrEJmcwzgcpH0FDJDemlyWWMUFmN9aTyVtIEN53ZHYsogKfQ095TqSD3CsxgsF5y4ttOJ1PID1jTTHBbV3zTlgoUFcpjMJIGvdrVJdxGaW1GyOIT/NfwX/bXefT/MfwT/bWTW7h/cY9tx/oakHw/uH/AKj/AO6jteDNXyao4hP8x/5PtXoxVr33Pev0FZQNh/cP63/3V3nLH+X/ADv/ALqm3gm/k1hxdr3n/UPtXoxVrm/6x9qyguWP8sfqf/dU0e1wtgn+JvvUpE3NSMRb/f8A1/0rxriHcX/WazL3UWMyIvbcj/yqyzetN6vDfluSRwmJNSl4KtmhzLzf/qN9DUSqDUs4j/8AR/vSnMo3XHHbBHypbjNos2RQcylonKRMA9TpIokldEbdWX7UxFkurqzl1DICXZgc0EqAxJJlR6oO6l+29o3HsOrABSVnQTo4I4nlVKYbM4MaxA6QefDgaK8ocOEw0DViyyeW8wPCjyKKg68D/T23q8d+UC+RRYvcgwMqz11MfWtWU51k/IpDnuDXRV+ZrX3HKjUiJA101OgFBp/9Nfc1+vK9a67pFqboqWXpVdpx2VfOhO+BMc+lP6kcZRfg5SeB+H2ivS7DqOh+hqnDYsMgYoyE+y2Wf5SRXC4SfyBS5TSGRxSfJf5yvKhlP5NdQdY32T4JcQhCeNAYYZmmn6rpFA/smRv3Tu6dKz4ZXdnovUdJKEIyhwlT/wCx5suyGWDTjB4hrRhpK8DQuyQMvWmLqIj/AIplHKRpNkbRRoAI6U4ZVI1r5pewpBzIxQ79DR9jbt5BBKt1II8Yqk6Kcb4NZd2bZPsCs5td7dsELAjfQmJ29eiJUTxG/upFjsLcvQVM6n0SSCxMRlnRiOUzruq66uAox3Sk6F2MxrO0qSoE6SQSDoSY5iil2jdYLndnCj0QxJid8Tu3CglskH0gQwMEEQRzBB3VeEgUtyfY9Bp9JBx3SaGFjasKMwJPTieyjrO0AY0IJ0jfPhSVVkjpWi8lMDnvZjuSCP4zOU9wDP8A6KOFy2A1Pp2lx45ZZLhdvIVjLZtxnZQTuXUmBoToI3yO41QlwGIPKnGIwXnHLkablHJRoo8KMwmyFHCrk99jzaxRrcS2rTNuUmihgLnKNx8DNai1h1XhVj2walsixxRmF2cxADbgAPAQPhROH2Uo4U2dIqSLQ2OUYrhAS7NX3asGz14Cma9lTValEFTYHpXDAU0aKqa4BUZEwNMH1oe9hg11EkEKC5HXcv1PdRz3eQpH+3ZcS4YhZQDUwNIO81Lofig5Ny7pWPUtVblikN7ygtJvvW+wXFP1qeB8o0uSVQuqiSyekAOZ4cDx4GrVvgzNJcjS63KrLDgChsNibd0ZkdWH5oeRq1rcSR86qy+lBXnxyPga6l/nutdVWF0HycoQYIgjSrAoOh3U02rhizNcRfS9Z0G8c7ie8jb5G6aUK1U4PHKmev0+fHqcVrvyvHww3BPk09n5U1V5FI0eirN2N3hTOeDlav0xr6sf4D3IoYtXG9NQ7qE47Ti6ZSySaXpimDlkOh0KnVWA95Toab7TYW7DOImPiTA7d9L0wylQUBWQCVOqhuITjHGDumN1FUmvp5N/p+JZMjjJWqDb2OtvaOZf7zQLMmP4H3wBPoPI5HhSuN1VuCCJ/Ov0rxX1ikylJ/u5O1gxQwpxjdXx4CU4mt35PYfzeGB9p/S/XoP5Fn/XWKwdrO6IPaYL2SYnurb7Q2giFEBAAGaOQIAQfoVPGnwVRcvsc/1nN9McS7u3/A2wyaUwsxWWXbaAesPGvf8A1NbG918aFHCZq3qtaylzy0sj2p7BNVL5d2fdftirqwbS7mtZKmoFZJvLmzGgc/6TSzE+Xhn0bLEdo+U1XSy+uK7n0VWFVvdAr52vl8h3o4PLT714/luT6qE9pH0qdMvBXXHybq5f61ndr+VCWzkDS3TWOprF7U8p79yVzZF5Lv8AGs6twzqdefOjWJ9xcs6/pPpmJL37Ye1iGLjXLMI37sDd3zWV21tB3ULu1ZXB95RHyNL8BtF7ZJQxI3daktolVXexJYzxLR9jQZpRSUVybvTISblkk9qopwGEztG5Rv0+3SvouG2cnmwMO5yxquaJMQTynoenKsVbuIkpyiRuY8cynj2dm7iywN69ccm0yl1WWiQzydxBGUtv0MExWzBj6I33OPrc/u5HXC4CrObDXHYIHUxnX0lcddDI7dRFai1iFuoro11VZcxDFZA8N3zmkFrbCPC4hMrqRDkMIM7s2hWTwO+nN45kKoQSYmDrHQDeKKcYN7oTinkiqTK/OWfffxH2rqX/ALKvN/zur2h9qHgZ72TyJ8FtF7ahZ0XVSPWSTJyncVkTlPwq3G4dbs3LI13ug4HiyDiNDpvHZRd/ZKNulT03eH2pe+DvWjmUZgNZXU960ltSVS4/wevw59LLJ7mF9MnynsmALVgpxYu2MRo8Jc3ZhoGPWeP8W/mKD2hs17J9ISvBuHSeR6Huml+24q1ujq4tXCcuiWz+e/8ADKEfnRVh14kg8DpB7eXx7qABqWaKtU+SajQYs27W/kt8oFL2sqiYZZjoeVcVGkVXZvhp1Po89JHMTUbtwblIk9RTE4xVoVpdLHTtyTtMoxpnd7P4TVFjZ126x80haBrBAjlqSPwVeRvo7yexJS5pxGo5xSJR6pW+4Gvco4XOPKV/gL2Lsq9afPdTKAIkMpjNox9E+6SO0jlRN/ZAd2e45LOcxCgQvJATMhQAs9K0LuHTMNxGtJmeJ6U5Ko9J43Pq8maXW3vVfYy+N2fDMFOgJieVLGin964HDCROo141mryOpgqR3aeNTpE9bfJIv0qOajtl7Fv39VXKvvvIHdxburYbM8krCQbn94372i/oG/vmqJZjsDhmuaICx/dEx28qMxHk/iVYZbbspWSYUEGTpv8Aya+j28iLACqo4CAB3VZaxaHdr2Ax47qYmq4BbPkeMwbJ/io6cJZSPBog1Zhth3n9TUddPjX1jEIrqVKyCIIIEEdRWc2uGsgBFhG0kcD7vSpGr3AlJ9jDX9k3FMMUB/in5CidleSl/EsVtldIljIVZ3Sd57ADV2JxUzlgjmePYOVa/wD/AJ1ivQuAxOeT2ZRHyNXIKG4ht+R7JiRhw63Gyh3MZApgnKAWJMAAz13UFirIs5yTqGyKep9YgUU+1289cvqxVnZoYEghToBI1jLFRxF8XY84qtyCgqCfe3A8N3Kuaskfc6pcJno56bLHTrHCt0vz3sUps17jKUUsVG9fVIP73A8AaPt4DGL6OVsjshcqVz+gQAZB3gCRwMA7612zcKqIBGu88pPADgPnRnmRyrqwm5Lqex5ueNRfSnddwe/Yt3wWuoUdWJVtxyofR84PbLbxA0B1hhrW2KyGHEDeJAiOY5HTdvFGCR17avtIjaEDXeDuNK1OBZ0mm01wxmmy+y2mrT7CT+10/Hf/AHV1aD+yLH+Un6F+1eVm/S5v72a/1WD/AGxKDUgaUYXbKHRxkPP2T38O+mitOoMimJ2DlwZcLqcaZTi8Cj+svpe8ND4jfQxt4lEKI63EOgV1BKjkpOkdN3Sma1IndVrbgKGqnCk9/h/+2MZfZwxzKFPISAOyeFR8+eVbK/ZVxDKD+fClGJ2PxQ/6T9D96FRa4Z6PS+r451Gbp/8AAjLTvqBw431ddslTBBBqDmIqmv7jq/TJXyeqIMV7g2i4vbHjpXimY7KhMNPI0VbJidSk8Ul2p/4NhgMVlMeyd4+tDbVBUsBxGhO7XSoYAKdWJpnicPZuKFfMQP3o7tBupi3Pn7MPY2fiGcpkIje5ICdoPHurT7N2ZbTV2zsOfqjsH3pxaWyogDTqTVyXLXBEn+EE+NX0snUBtjp0RS3YNPHdXLavPvBUdASft86aLi+X2qxcX+T9qnTRLbE/7PkIzq08C4PwnTwpjhlmp47GKyEEd9VYV6pLcp2M7aVDHYFLiMjDRgQfuOtWWaIC1bRS3PjO2cI+HuNbbhuPBl4EU48kyyYbFXwY0yD+LITPb6a1rvK7YAxNr0dLiSUPPmh6H5xXzXZePdEvYYAlbhQtOhV0aN3M7iOlDkf0Nj9MrzJfKLmtgCYkfKjdisDcgncCQOz/AJ+FF+VWzVsXBZQn1FJniYlj2aVnPJ6/mupJAJLACd+h061iwYHJ2+zPRa7XY446V3JbfB9GwEsYHGjmttrEGOH9ap2IYzc8pii7W49n1FdRvweZoHTUTVgWpusMe35gT8Zr2mRBZ5Jrq9rqIo+a6GrcPddPUaB7p1Xw4d1UkVwJrnKS7o+j5MUMiqatD7C7ZU6OMh5+z48O+mauDrWPBq/D33T1Ggct48PtRc8HC1Poqf1YXXwzVF65jSnD7TVtHGU/Dx4UfmH596hw82DJhlU1RDFWlcQwnkeIrPY3CFeq8/vT+49A3HqmrNWl1+TA65XdCXcR31G+8a1fi0yMGG4/A0q2he0Enefl+CovB3s+rhPSSnF8r8DFdpRx8KtTajGkKXBVyXgKYkeNdGhs7QbnR1vGseJrO4Z2b1VZv4VJ+QpxhsFfbdbgc2IHw3/CmpAMZpiDzq/9qjeaos7MPt3AP3UEn9R+1NMJgEUyqAn3nMkeOg7qFoikU2Az6wQvM+12dOtOcNbA3+HGvbdob2aeg+9FIwXcoFVwR3IvtdF8aIAPQUvfFRxoa5jTzqnIJRGz3QBqw+FfNtvG2bhdFCh7gkj2iBBb85zxp7tPGEjJmylok8QCQPrWGXEM7sXMFXChIMKomDPMmlZVeJv4NeiSWoj/ACNds4gvdd2JJFtuP7sD5msjgCExFlkJK501Ij1jB05a1pySHc6E5DowlZEaMDvHSlAwGRlZ49E6RoWMhl4bt/cKmkSeFyb7jvUr99RS7G/wd/K0imIvjeKR2Ho+09aV8nPfIar1YGoVXqeanJgtF2auqjNXVCjACpCo17WCJ9LOKV5lrs1e56L6QdjsxG+mOHx6i2VAhwRlOsESJnkYml+avCQd4o4y6b735Mmr0mPUpRn2aaGqY4MNdD8O41VfaljdK8GIYaHUc+X3oGjja30tRTni/ATfTOCvQ/0qWAw9rKPOWw7b/SVDE8BJ0rsOQYIM0BdvkMwncTVJb2cZ5ZLG8fZu/wADxMNhT/8AGT9CfQ0Rb2RhH08xHZI/7WrPWcU3OnODxTc6YkZmj3blt7JV1Ym3ooAJUoQOY59eVQwe1AdHZz2tP0qXlDigbDTvlY7cwrJ2sRBLGdKKKtUU5NKuxtv7aRBwUczpXYbyhtE+v4ggeJFYZc9w5t/yHSpuhXePCmKC7sXb7I+nJtXT0Y7R965sUzca+ebP2v5rQyUPDkeY6VHGbTd3Lq7KBAUBogDoDvqvabdWF1pI+gviQoJZoAEmhl29Y3Z1nrp86w97abuhQuxBmZjwnlS65JAbiu8cxUWHbcr3bZtcdjVNwNMqRlMcQdD8xS3amGyv5wa5yuaN2YTLdAwg9uYcKUYbErkgk+kRB4AiZn4URcxbCFM6EGOvOs2dOMWvKOjo+mU4u90x9idGQx6yBu2QfqKRX7rXGLMenQDgq9KbYi8Clt59WUPQA5h3ekaWF0U5QuZp4+qD2ce+smBSlBxjsrOhq3DHlU5K3VL5ZpsI/og9B8RR9t6X4YkIFYQ0Ce2r7T104cHDm9xgHqWegxcoXGbRVBvk8qJsGxpnrqzH9rv7vx/pXUFsh//Z"
                      alt=""
                    />
                    <div className="ml-10 mt-4 flex h-full w-full flex-col justify-start">
                      <div className="flex h-full items-start justify-center">
                        <div className="items-left flex flex-col text-left">
                          <img
                            width="50"
                            height="50"
                            src="https://img.icons8.com/ios-filled/50/FAB005/calendar--v1.png"
                            alt="calendar--v1"
                          />
                          <p className="text-center text-2xl font-medium">08</p>
                          <p className="font-medium">March</p>
                        </div>
                        <div className="ml-10 items-center">
                          <p className="whitespace-nowrap text-xl font-bold">
                            PORFOLIO & CONTACT
                          </p>
                          <div className="mt-2 flex items-center">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                              alt="facebook-new"
                            />
                            <p className="ml-2 font-medium">KAKA Jr</p>
                          </div>
                          <div className="mt-2 flex items-center">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                              alt="phone--v1"
                            />
                            <p className="ml-2 font-medium">097 777 8888</p>
                          </div>
                          <div className="mb-4 mt-2 flex items-center">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/windows/32/clock--v1.png"
                              alt="clock--v1"
                            />
                            <p className="ml-2 font-medium">10 AM</p>
                            <div className="ml-4 mt-5 flex">
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                            </div>
                          </div>
                          <div className="my-6 flex items-center justify-center">
                            <a href="/taxi-detail">
                              <button className="h-10 w-28 rounded-3xl border-2 border-black bg-amber-200 text-sm font-medium hover:border-amber-200">
                                View Details
                              </button>
                            </a>
                          </div>
                        </div>
                        <a href="compareTaxi.html" className="ml-10">
                          <img
                            width="30"
                            height="30"
                            src="https://img.icons8.com/ios-glyphs/30/more.png"
                            alt="more"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="flex h-full items-center justify-center bg-white p-10">
                <div className="border-t-2 border-yellow-500">
                  <div className="md:max-w-fixed flex flex-col items-center rounded-lg md:flex-row dark:bg-white">
                    <img
                      className="h-full w-full object-cover md:h-auto md:w-96 md:rounded-none"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <div className="ml-10 mt-4 flex h-full w-full flex-col justify-start">
                      <div className="flex h-full items-start justify-center">
                        <div className="items-left flex flex-col text-left">
                          <img
                            width="50"
                            height="50"
                            src="https://img.icons8.com/ios-filled/50/FAB005/calendar--v1.png"
                            alt="calendar--v1"
                          />
                          <p className="text-center text-2xl font-medium">08</p>
                          <p className="font-medium">March</p>
                        </div>
    
                        <div className="ml-10 items-center">
                          <p className="whitespace-nowrap text-xl font-bold">
                            PORFOLIO & CONTACT
                          </p>
                          <div className="mt-2 flex items-center">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                              alt="facebook-new"
                            />
                            <p className="ml-2 font-medium">KAKA Jr</p>
                          </div>
                          <div className="mt-2 flex items-center">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                              alt="phone--v1"
                            />
                            <p className="ml-2 font-medium">097 777 8888</p>
                          </div>
                          <div className="mb-4 mt-2 flex items-center">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/windows/32/clock--v1.png"
                              alt="clock--v1"
                            />
                            <p className="ml-2 font-medium">10 AM</p>
                            <div className="ml-4 mt-5 flex">
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                            </div>
                          </div>
                          <div className="my-6 flex items-center justify-center">
                            <a href="/taxi-detail">
                              <button className="h-10 w-28 rounded-3xl border-2 border-black bg-amber-200 text-sm font-medium hover:border-amber-200">
                                View Details
                              </button>
                            </a>
                          </div>
                        </div>
                        <a href="compareTaxi.html" className="ml-10">
                          <img
                            width="30"
                            height="30"
                            src="https://img.icons8.com/ios-glyphs/30/more.png"
                            alt="more"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="flex h-full items-center justify-center bg-white p-10">
                <div className="border-t-2 border-yellow-500">
                  <div className="md:max-w-fixed flex flex-col items-center rounded-lg md:flex-row dark:bg-white">
                    <img
                      className="h-full w-full object-cover md:h-auto md:w-96 md:rounded-none"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <div className="ml-10 mt-4 flex h-full w-full flex-col justify-start">
                      <div className="flex h-full items-start justify-center">
                        <div className="items-left flex flex-col text-left">
                          <img
                            width="50"
                            height="50"
                            src="https://img.icons8.com/ios-filled/50/FAB005/calendar--v1.png"
                            alt="calendar--v1"
                          />
                          <p className="text-center text-2xl font-medium">08</p>
                          <p className="font-medium">March</p>
                        </div>
    
                        <div className="ml-10 items-center">
                          <p className="whitespace-nowrap text-xl font-bold">
                            PORFOLIO & CONTACT
                          </p>
                          <div className="mt-2 flex items-center">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                              alt="facebook-new"
                            />
                            <p className="ml-2 font-medium">KAKA Jr</p>
                          </div>
                          <div className="mt-2 flex items-center">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                              alt="phone--v1"
                            />
                            <p className="ml-2 font-medium">097 777 8888</p>
                          </div>
                          <div className="mb-4 mt-2 flex items-center">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/windows/32/clock--v1.png"
                              alt="clock--v1"
                            />
                            <p className="ml-2 font-medium">10 AM</p>
                            <div className="ml-4 mt-5 flex">
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                            </div>
                          </div>
                          <div className="my-6 flex items-center justify-center">
                            <a href="/bus-list">
                              <button className="h-10 w-28 rounded-3xl border-2 border-black bg-amber-200 text-sm font-medium hover:border-amber-200">
                                View Details
                              </button>
                            </a>
                          </div>
                        </div>
                        <a href="compareTaxi.html" className="ml-10">
                          <img
                            width="30"
                            height="30"
                            src="https://img.icons8.com/ios-glyphs/30/more.png"
                            alt="more"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="flex h-full items-center justify-center bg-white p-10">
                <div className="border-t-2 border-yellow-500">
                  <div className="md:max-w-fixed flex flex-col items-center rounded-lg md:flex-row dark:bg-white">
                    <img
                      className="h-full w-full object-cover md:h-auto md:w-96 md:rounded-none"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <div className="ml-10 mt-4 flex h-full w-full flex-col justify-start">
                      <div className="flex h-full items-start justify-center">
                        <div className="items-left flex flex-col text-left">
                          <img
                            width="50"
                            height="50"
                            src="https://img.icons8.com/ios-filled/50/FAB005/calendar--v1.png"
                            alt="calendar--v1"
                          />
                          <p className="text-center text-2xl font-medium">08</p>
                          <p className="font-medium">March</p>
                        </div>
    
                        <div className="ml-10 items-center">
                          <p className="whitespace-nowrap text-xl font-bold">
                            PORFOLIO & CONTACT
                          </p>
                          <div className="mt-2 flex items-center">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
                              alt="facebook-new"
                            />
                            <p className="ml-2 font-medium">KAKA Jr</p>
                          </div>
                          <div className="mt-2 flex items-center">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                              alt="phone--v1"
                            />
                            <p className="ml-2 font-medium">097 777 8888</p>
                          </div>
                          <div className="mb-4 mt-2 flex items-center">
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/windows/32/clock--v1.png"
                              alt="clock--v1"
                            />
                            <p className="ml-2 font-medium">10 AM</p>
                            <div className="ml-4 mt-5 flex">
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/filled-star--v1.png"
                                alt="filled-star--v1"
                                className="-mt-5 h-5 w-5"
                              />
                            </div>
                          </div>
                          <div className="my-6 flex items-center justify-center">
                            <a href="/bus-list">
                              <button className="h-10 w-28 rounded-3xl border-2 border-black bg-amber-200 text-sm font-medium hover:border-amber-200">
                                View Details
                              </button>
                            </a>
                          </div>
                        </div>
                        <a href="compareTaxi.html" className="ml-10">
                          <img
                            width="30"
                            height="30"
                            src="https://img.icons8.com/ios-glyphs/30/more.png"
                            alt="more"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <nav
                aria-label="Page navigation example"
                className="flex items-center justify-center p-4"
              >
                <ul className="inline-flex -space-x-px text-sm">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-yellow-700 bg-yellow-200 border border-e-0 border-yellow-300 rounded-s-lg hover:bg-yellow-100 hover:text-yellow-600 dark:bg-yellow-200 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white"
                    >
                      Previous
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-700 bg-yellow-200 border border-yellow-300 hover:bg-yellow-100 hover:text-yellow-600 dark:bg-yellow-200 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-700 bg-yellow-200 border border-yellow-300 hover:bg-yellow-100 hover:text-yellow-600 dark:bg-yellow-200 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="flex items-center justify-center px-3 h-8 text-blue-600 border border-yellow-300 bg-yellow-200 hover:bg-yellow-100 hover:text-yellow-600 dark:border-yellow-700 dark:bg-yellow-500 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-700 bg-yellow-200 border border-yellow-300 hover:bg-yellow-100 hover:text-yellow-600 dark:bg-yellow-200 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-700 bg-yellow-200 border border-yellow-300 hover:bg-yellow-100 hover:text-yellow-600 dark:bg-yellow-200 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white"
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-yellow-700 bg-yellow-200 border border-yellow-300 rounded-e-lg hover:bg-yellow-100 hover:text-yellow-600 dark:bg-yellow-200 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
    
        </>
      );
}


export default TaxiList;