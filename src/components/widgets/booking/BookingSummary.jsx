import React from "react";

const BookingSummary = () => {
  return (
    <div className="bg-white shadow-md rounded-lg ">
      <h2 className="text-lg font-bold bg-black text-white py-2 px-4 rounded-t-lg">
        Location: Jaipur
      </h2>
      <div className="flex justify-between font-semibold mb-4 p-4">
        <div>
          <div className="text-sm text-gray-500">Sat, 05 Aug 2023</div>
          <div className="text-base font-medium">09:30 AM</div>
        </div>
        <div className=" rounded-full font-medium bg-black text-white px-3 flex justify-center items-center  ">
          To
        </div>
        <div>
          <div className="text-sm text-gray-500">Tue, 08 Aug 2023</div>
          <div className="text-base font-medium">06:30 PM</div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
