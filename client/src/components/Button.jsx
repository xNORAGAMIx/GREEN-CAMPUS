import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-green-200 mb-5 rounded-full border text-green-800 font-medium px-6 py-3 hover:bg-green-100 text-2xl ">
      {text}
    </button>
  );
};

export default Button;
