import React, { useEffect } from "react";
import { Button, Chip } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
const CarCard = ({ car }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      offset: 100, // Offset from the top before animation starts
      delay: 0, // Delay in milliseconds
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="shadow-lg rounded-lg overflow-hidden w-[100%] "
      // style={{ margin: "10px", flex: "1 0 auto" }}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={car.image}
          alt={car.brand}
          className="w-full h-48 object-cover "
        />
        <Chip
          label="New Arrival"
          color="success"
          size="small"
          className="absolute top-3 left-3"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{car.brand}</h3>
        {/* Details Section */}
        <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
          <span>🚗 Auto</span>
          <span>👨‍👩‍👧‍👦 5 Persons</span>
          <span>📅 {car.year}</span>
          <span>⛽ {car.fuelType}</span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-black">
            ${car.pricePerDay} / Day
          </span>
          <Button variant="contained" color="error" className="text-white">
            Rent Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
