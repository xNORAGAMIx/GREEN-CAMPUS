import React from "react";

const Banner = () => {
  return (
    <div className="bg-green-600 flex lg:flex-row flex-col justify-around items-center py-8 mt-16 space-y-6">
      <h1 className="text-2xl font-bold text-white">
        Join the Green Revolution Today
      </h1>
      <button className="hover:bg-green-100 bg-green-200 rounded-full font-bold text-green-700 py-4 px-8 text-2xl ">Get Invloved!</button>
    </div>
  );
};

export default Banner;
