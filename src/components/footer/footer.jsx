import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <div className="h-20 w-full bg-sky-950"></div>
        <div className="relative bg-sky-800">
          <div className="mx-auto flex flex-col justify-center space-y-4 p-4 md:flex-row md:space-x-20 md:space-y-0">
            <div className="relative -mt-24 rounded-lg bg-sky-900 text-white">
              <div className="my-2 flex h-20 items-center justify-center">
                <p className="text-4xl font-bold">TaxiBus Service</p>
              </div>

              <div className="m-4 pb-12">
                <div>
                  <p>
                    Laverage agile framworks to provide a <br />
                    robust synopsis for strategy collaborative <br />
                    thinking for further the overall value <br />
                    proposition.
                  </p>
                </div>
                <div className="my-2 flex">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/circled-envelope.png"
                    alt="circled-envelope"
                  />
                  <div className="ml-2">
                    <p className="font-bold">Email</p>
                    <p>TaxiBus777@gmial.com</p>
                  </div>
                </div>
                <div className="my-2 flex">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/ios-filled/50/228BE6/apple-phone.png"
                    alt="apple-phone"
                  />
                  <div className="ml-2">
                    <p className="font-bold">Call Us</p>
                    <p>010 23 1010 / 079 643 5050</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex h-full items-center justify-center">
                <div className="relative w-48 rounded-lg bg-sky-800 p-4 text-white">
                  <div className="items-left flex flex-col space-y-4 font-medium">
                    <p>
                      <a href="#" className="hover:border-b-2">
                        About Us
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Our Team
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Our Project
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Pricing
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Contact
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex h-full items-center justify-center">
                <div className="relative w-48 rounded-lg bg-sky-800 p-4 text-white">
                  <div className="items-left flex flex-col space-y-4 font-medium">
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Style Guide
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Changelog
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        License
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Protected
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover:border-b-2">
                        Not Found
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
