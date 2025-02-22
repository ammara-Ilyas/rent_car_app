"use client";
import React, { useEffect, useState } from "react";
import { Button, Rating } from "@mui/material";
import { ProductImage, Specifications } from "./ProductImages";
import BookingForm from "./BookingForm";
import BookingSummary from "./BookingSummary";
import Image from "next/image";
import { useCarContext } from "@/contextApi/CarContext";
import BookingDescription from "./BookingDescription";
const ProductDetail = ({ id }) => {
  const { inventory, forFilteredInventory } = useCarContext();
  const [product, setProduct] = useState({});
  const [duration, setDuration] = useState("");
  let a = 1;
  useEffect(() => {
    const getCar = async () => {
      const storedInventory = localStorage.getItem("inventory");
      const parsedInventory = storedInventory
        ? JSON.parse(storedInventory)
        : [];

      // console.log("Product ID:", id);
      // console.log("Filtered Inventory:", forFilteredInventory);
      console.log("Local Storage Inventory:", parsedInventory);
      const carById = parsedInventory.find((car) => car.id == id);
      console.log("car by id", carById);
      a++;
      setProduct(carById);
    };
    getCar();
  }, [id, forFilteredInventory, inventory]);
  // console.log("duration", duration);
  console.log("a", a);

  //
  return (
    product && (
      <div className="container mx-auto p-4 border-2 border-red-600">
        {/* Top Header */}
        <div className="text-sm text-black flex flex-row gap-2 mb-4">
          <span className="cursor-pointer ">Car Rental</span> /{" "}
          <span className="cursor-pointer ">Cars</span> /{" "}
          <span>{product.brand}</span>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Section */}
          <div className="col-span-2">
            <ProductImage images={product.images} />

            {/* Features */}
            <div className="mt-6 ">
              <Specifications product={product} />
            </div>

            {/* Description */}
            <BookingDescription />
          </div>

          {/* Right Section */}
          <div className="bg-white rounded-lg shadow-lg p-4 border-2">
            <BookingSummary product={product} setDuration={setDuration} />
            <div className="text-sm text-center font-semibold ">
              Duration: <span className="">{duration || "None"} </span>
            </div>
            <div className="mt-4 text-sm font-medium mb-4 px-5">
              <div className="flex flex-row  border-b-[1px] pb-2 justify-between items-center">
                <span>Package Type </span>
                <span className="font-semibold">
                  {product.kmPerDay} kms/day
                </span>
              </div>
              <div className="flex flex-row border-b-[1px] pb-2  justify-between items-center">
                <span>Free kms for rental</span>{" "}
                <span className="font-semibold">
                  {product.rentalPerDay} kms
                </span>
              </div>
              <div className="flex flex-row border-b-[1px] pb-2  justify-between items-center">
                <span>Extra km charges at</span>{" "}
                <span className="font-semibold">
                  {product.extraKmChargePerDay}$/km
                </span>
              </div>
            </div>
            {/* Price and Info */}
            <BookingForm product={product} />
          </div>
        </div>
      </div>
    )
  );
};
export default ProductDetail;
