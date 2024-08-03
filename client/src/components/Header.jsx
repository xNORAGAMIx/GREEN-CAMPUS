import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ isOpen, setIsOpen }) => {
  //const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white opacity-80 shadow-2xl rounded-full z-50 mt-4 lg:mx-56 mx-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-4xl font-extrabold text-green-500 ">
            GreenHub
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-800 font-extrabold text-2xl hover:text-green-600"
            >
              Home
            </a>
            <a
              href="#maps"
              className="text-gray-800 hover:text-green-600 font-extrabold text-2xl"
            >
              Maps
            </a>
            <a
              href="#event"
              className="text-gray-800 hover:text-green-600 font-extrabold text-2xl"
            >
              Event
            </a>
          </nav>
          <button className="hidden md:inline-flex font-bold py-4 px-8 bg-green-300 text-green-700 rounded-full text-xl hover:bg-green-200">
            Join Us
          </button>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-green-600 focus:outline-none focus:text-green-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-3xl z-40"
            onClick={closeMenu}
          ></div>
          <div className="md:hidden dropdown-menu absolute top-0 w-11/12 bg-white bg-opacity-90 backdrop-blur-3xl shadow-transparent rounded-xl ml-4 z-50 ">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="flex justify-end">
                <button
                  onClick={closeMenu}
                  className=" text-gray-800 hover:text-green-600 focus:outline-none focus:text-green-600 mt-4"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col space-y-6 px-6 mb-6">
                <a
                  href="#home"
                  className="text-gray-800 font-extrabold text-2xl"
                >
                  Home
                </a>
                <a
                  href="#maps"
                  className="text-gray-800 font-extrabold text-2xl"
                >
                  Maps
                </a>
                <a
                  href="#event"
                  className="text-gray-800 font-extrabold text-2xl"
                >
                  Event
                </a>
                <button className="font-bold py-4 px-8 bg-green-400 text-green-700 rounded-full text-xl focus:bg-green-200">
                  Join Us
                </button>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
