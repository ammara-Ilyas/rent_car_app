import React, { useEffect } from "react";
import { Button, Chip } from "@mui/material";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const CarCard = ({ car }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out", // Animation easing
      offset: 100, // Offset from the top before animation starts
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={200}
      className="shadow-lg rounded-lg overflow-hidden w-[100%] "
      // style={{ margin: "10px", flex: "1 0 auto" }}
    >
      {/* Image Section */}
      <div className="relative">
        <Image
          src={car.image}
          alt={car.brand}
          className="w-full h-48 object-cover "
          width={200}
          height={200}
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
