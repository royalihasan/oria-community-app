import React from "react";
import oria from "../assets/icons/oria.png";
import profile from "../assets/images/profile.png";
import Image from "next/image";
const LandingPage = () => {
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
    rel="stylesheet"
  />;

  return (
    <div>
      <style jsx>
        {`
          .logo {
            color: green;
            background: linear-gradient(
              90deg,
              #0b2639 0%,
              #ff5f00 28.65%,
              #21a5ca 65.1%,
              #3e0831 100%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3">
          <div className="flex items-center cursor-pointer ">
            <Image
              className="w-8 h-8 md:w-10 md:h-10 mr-2  "
              src={oria}
              alt="Logo"
            />
            <span
              className={`text-xl font-semibold logo lg:flex md:hidden sm:hidden`}
            >
              Comunnity
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
            <a
              href="#"
              className="text-[#0B2639] hover:text-teal-700 mb-2 md:mb-0 md:mr-4"
            >
              Products
            </a>
            <a
              href="#"
              className="text-[#0B2639] hover:text-teal-700 mb-2 md:mb-0 md:mr-4"
            >
              Message
            </a>
            <div className="w-full md:w-[300px] mx-0 md:mx-4">
              <input
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-full"
                type="text"
                placeholder="Search"
              />
            </div>
            <a
              href="#"
              className="text-teal-950 hover:text-teal-700 mb-2 md:mb-0 md:mr-4"
            >
              Find a Member
            </a>
            <a
              href="#"
              className="text-[#0B2639] hover:text-teal-700 mb-2 md:mb-0 md:mr-4"
            >
              Find a Team
            </a>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-[#0B2639] hover:text-teal-700">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ></svg>
              </a>
              <Image
                className="w-8 h-8 rounded-full cursor-pointer"
                src={profile}
                alt="Profile" 
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingPage;
