import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTwitch,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-between items-center space-y-16 py-20">
      <nav className="flex flex-wrap justify-center space-x-4 text-3xl md:text-5xl">
        <NavLink className="hover:text-gray-300 hover:underline" to="/">
          Home
        </NavLink>
        <NavLink className="hover:text-gray-300 hover:underline" to="/events">
          Events
        </NavLink>
        <NavLink className="hover:text-gray-300 hover:underline" to="/">
          Contact
        </NavLink>
      </nav>

      <div className="flex flex-wrap justify-center space-x-4">
        <div className="cursor-pointer w-12 h-12 md:w-16 md:h-16 flex justify-center items-center rounded-full bg-slate-100">
          <FaFacebookF className="text-3xl md:text-4xl text-black" />
        </div>

        <div className="cursor-pointer w-12 h-12 md:w-16 md:h-16 flex justify-center items-center rounded-full bg-slate-100">
          <FaTwitter className="text-3xl md:text-4xl text-black" />
        </div>

        <div className="cursor-pointer w-12 h-12 md:w-16 md:h-16 flex justify-center items-center rounded-full bg-slate-100">
          <FaInstagram className="text-3xl md:text-4xl text-black" />
        </div>

        <div className="cursor-pointer w-12 h-12 md:w-16 md:h-16 flex justify-center items-center rounded-full bg-slate-100">
          <FaLinkedinIn className="text-3xl md:text-4xl text-black" />
        </div>

        <div className="cursor-pointer w-12 h-12 md:w-16 md:h-16 flex justify-center items-center rounded-full bg-slate-100">
          <FaTwitch className="text-3xl md:text-4xl text-black" />
        </div>
      </div>

      <p className="text-lg md:text-2xl text-center">
        &#169; 2024 Green Community Hub. Created By Debugging Dynamos!
      </p>
    </div>
  );
};

export default Footer;
