import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTwitch,
} from "react-icons/fa";

const Connect = () => {
  return (
    <div className="flex flex-col justify-between items-center mt-16 space-y-16 mb-8">
      <h1 className="font-extrabold text-4xl lg:text-6xl">Connect With Us!</h1>

      <div className="flex space-x-4">
        <div className="cursor-pointer w-16 h-16 flex justify-center items-center rounded-full bg-slate-100">
          <FaFacebookF className="text-4xl text-violet-950" />
        </div>

        <div className="cursor-pointer w-16 h-16 flex justify-center items-center rounded-full bg-slate-100">
          <FaTwitter className="text-4xl text-violet-950" />
        </div>

        <div className="cursor-pointer w-16 h-16 flex justify-center items-center rounded-full bg-slate-100">
          <FaInstagram className="text-4xl text-violet-950" />
        </div>

        <div className="cursor-pointer w-16 h-16 flex justify-center items-center rounded-full bg-slate-100">
          <FaLinkedinIn className="text-4xl text-violet-950" />
        </div>

        <div className="cursor-pointer w-16 h-16 flex justify-center items-center rounded-full bg-slate-100">
          <FaTwitch className="text-4xl text-violet-950" />
        </div>
      </div>
    </div>
  );
};

export default Connect;
