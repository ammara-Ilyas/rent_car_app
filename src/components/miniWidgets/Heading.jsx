import React from "react";

const Heading = ({ title, para }) => {
  return (
    <div className=" mx-auto font-medium   mb-10 text-white flex flex-col items-center justify-between">
      <p className="text-gray-100 font-semibold mb-2 font-sans bg-gradient-to-r from-gray-300 via-red-500 to-white text-transparent bg-clip-text">
        {para}
      </p>
      <h3 className="capitalize text-5xl font-sans  font-bold text-white bg-gradient-to-r from-pink-700 via-red-500 to-pink-700 text-transparent bg-clip-text">
        {title}
      </h3>
    </div>
  );
};

export default Heading;
