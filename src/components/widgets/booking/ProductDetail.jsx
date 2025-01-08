import React from "react";
import { Button, Rating } from "@mui/material";
import { ProductImage, Specifications } from "./ProductImages";
import BookingForm from "./BookingForm";
import BookingSummary from "./BookingSummary";
import Image from "next/image";
const ProductDetail = ({ id }) => {
  return (
    <div className="container mx-auto p-4">
      {/* Top Header */}
      <div className="text-sm text-black flex flex-row gap-2 mb-4">
        <span className="cursor-pointer ">Car Rental</span> /{" "}
        <span className="cursor-pointer ">Cars</span> /{" "}
        <span>Booking Summary</span>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="col-span-2">
          <ProductImage />

          {/* Features */}
          <div className="mt-6 ">
            <Specifications />
          </div>

          {/* Description */}
          <div className="mt-6 ">
            <h2 className="text-lg font-bold bg-black text-white py-2 px-4 rounded-t-lg">
              Description of Listing
            </h2>
            <div className="mt-5">
              {" "}
              <p className="text-gray-600 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                fermentum, sem in lacinia luctus, metus nisi gravida sapien, ac
                bibendum libero metus at urna. Vestibulum in augue vitae mi
                faucibus venenatis et at purus. Praesent tincidunt dolor
                atiaculis malesuada. Nam vulputate ligula vel nulla hendrerit,
                sitamet cursus ligula cursus. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Excepturi consequatur dicta
                obcaecati aut, qui praesentium debitis. Dolor quod ullam cum.
              </p>
              <p className="text-gray-600 leading-6 pt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia, quas dolorum! Reiciendis laudantium cum placeat. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Maiores
                totam quisquam aperiam voluptates, officia repellendus! Possimus
                reprehenderit voluptate modi ut.
              </p>
              <p className="text-gray-600 leading-6 pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                expedita, pariatur optio error laborum eaque perspiciatis?
                Reprehenderit harum voluptas exercitationem.
              </p>
              <p className="text-gray-600 leading-6 pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                perferendis rem sint, natus saepe magni vero, porro inventore at
                amet sed facilis beatae. A assumenda deleniti inventore,
                corrupti deserunt fugiat!
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-lg shadow-lg p-4 border-2">
          <BookingSummary />
          <div className="text-sm text-center font-semibold ">
            Duration: <span className="">3 Days and 9 hours</span>
          </div>
          <div className="mt-4 text-sm font-medium mb-4 px-5">
            <div className="flex flex-row  border-b-[1px] pb-2 justify-between items-center">
              <span>Package Type </span>
              <span className="font-semibold">300 kms/day</span>
            </div>
            <div className="flex flex-row border-b-[1px] pb-2  justify-between items-center">
              <span>Free kms for rental</span>{" "}
              <span className="font-semibold">1013 kms</span>
            </div>
            <div className="flex flex-row border-b-[1px] pb-2  justify-between items-center">
              <span>Extra km charges at</span>{" "}
              <span className="font-semibold">₹9/km</span>
            </div>
          </div>
          {/* Price and Info */}
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
