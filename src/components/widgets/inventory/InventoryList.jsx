"use client";
import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useCarContext } from "@/contextApi/CarContext";
import { SortComponent } from "./FilterComponent";
import { Button, Rating, CircularProgress, Pagination } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
const InventoryList = () => {
  const { inventory, loading, forFilteredInventory } = useCarContext();
  const [isGrid, setIsGrid] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Handle Pagination
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      offset: 100, // Offset from the top before animation starts
      delay: 0, // Delay in milliseconds
    });
  }, []);
  console.log("data in list", inventory, "filter", forFilteredInventory);

  // Calculate Paginated Items
  const currentItems = useMemo(() => {
    if (!inventory || inventory.length === 0) return [];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return inventory.slice(indexOfFirstItem, indexOfLastItem);
  }, [inventory, currentPage]);

  return (
    <div className="p-4 max-w-screen-lg mx-auto w-full mt-28">
      <SortComponent setIsGrid={setIsGrid} isGrid={isGrid} />

      {/* Loading Indicator */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress />
        </div>
      ) : (
        <div
          className={`${
            isGrid === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : ""
          } grid grid-cols-1 gap-6 `}
        >
          {inventory ? (
            currentItems.map((car) => (
              <div
                // data-aos="zoom-in-down"
                className={`${
                  isGrid === "grid" ? "w-[310px] flex-col " : "w-[90%] flex-row"
                } flex w-[310px] mx-auto rounded-lg shadow-lg overflow-hidden`}
                key={car.id}
              >
                {/* Image Section */}
                <div
                  className={`${
                    isGrid === "grid" ? "w-full " : "w-[40%] "
                  } relative`}
                >
                  <Image
                    src={car.image}
                    alt={car.model}
                    className="w-full h-48 object-cover"
                    width={300}
                    height={48}
                  />
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded">
                    New Arrival
                  </span>
                </div>

                {/* Content Section */}
                <div
                  className={`${
                    isGrid === "grid" ? "w-full " : "w-[60%]"
                  } p-4 flex flex-col justify-between`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">Toyota Camry SE 350</h3>
                    <Rating
                      name="read-only"
                      value={car.rating}
                      readOnly
                      size="small"
                      className="text-yellow-500"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Category: {car.category}
                  </p>

                  {/* Details Section */}
                  <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                    <span>🚗 Auto</span>
                    <span>👨‍👩‍👧‍👦 5 Persons</span>
                    <span>📅 {car.year}</span>
                    <span>⛽ {car.fuelType}</span>
                  </div>

                  {/* Price & Button Section */}
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-xl font-semibold text-red-500">
                      ${car.pricePerDay}
                      <span className="text-gray-700">/ Day</span>
                    </p>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className="bg-black"
                    >
                      Rent Now
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-4xl font-semibold pt-2">No Data found</h1>
          )}
        </div>
      )}

      {/* Pagination */}
      <div className=" flex justify-end mr-28">
        {inventory.length > itemsPerPage && (
          <div className="flex justify-center mt-6">
            <Pagination
              count={Math.ceil(forFilteredInventory.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryList;
