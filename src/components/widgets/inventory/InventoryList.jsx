"use client";
import React, { useState } from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const InventoryList = () => {
  const [sortOption, setSortOption] = useState("Recommended");
  const [searchQuery, setSearchQuery] = useState("");

  const cars = [
    {
      id: 1,
      name: "Toyota Camry SE 350",
      price: 150,
      category: "Ferrari",
      image: "/car1.jpg",
    },
    {
      id: 2,
      name: "Toyota Camry SE 350",
      price: 80,
      category: "Ferrari",
      image: "/car2.jpg",
    },
    {
      id: 3,
      name: "Toyota Camry SE 350",
      price: 20,
      category: "Ferrari",
      image: "/car3.jpg",
    },
    {
      id: 4,
      name: "Toyota Camry SE 350",
      price: 50,
      category: "Ferrari",
      image: "/car4.jpg",
    },
  ];

  const handleSortChange = (event) => setSortOption(event.target.value);
  const handleSearchChange = (event) =>
    setSearchQuery(event.target.value.toLowerCase());

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      {/* Search and Sort Section */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search cars..."
          onChange={handleSearchChange}
          className="border rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none"
        />
        <FormControl className="ml-4 min-w-[150px]">
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortOption}
            onChange={handleSortChange}
            className="bg-white"
          >
            <MenuItem value="Recommended">Recommended</MenuItem>
            <MenuItem value="Price: Low to High">Price: Low to High</MenuItem>
            <MenuItem value="Price: High to Low">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Car Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg">{car.name}</h2>
              <p className="text-sm text-gray-500">Category: {car.category}</p>
              <p className="text-red-500 font-bold text-xl">
                ${car.price} / Day
              </p>
              <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded-lg w-full">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryList;
