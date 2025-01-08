// components/CarShowcase.js
import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const CarShowcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      offset: 100, // Offset from the top before animation starts
      delay: 0, // Delay in milliseconds
    });
  }, []);
  const cate = [
    {
      img: "/images/categories/car_01.avif",
      title: "LUXES",
    },
    {
      img: "/images/categories/car_02.avif",
      title: "PORSCHE",
    },
    {
      img: "/images/categories/car_03.avif",
      title: "Mini",
    },
    {
      img: "/images/categories/car_04.avif",
      title: "MERCEDES BENZ",
    },
  ];
  return (
    <section className=" text-white py-16 pl-24 pr-2 ">
      <div className="w-[90%] mx-auto flex items-center gap-6 rounded-md px-8 py-1 bg-black">
        {/* Title Section */}
        <div
          className=" flex flex-col justify-between  w-[50%]"
          data-aos="zoom-in"
        >
          <p className="uppercase font-semibold mt-0 ">
            Help you to find your next car easily
          </p>
          <h1 className="text-4xl font-bold">
            Subaru <span className="text-red-500">Impreza</span>
          </h1>
          <hr className="text-white w-[30%] mt-2" />
          <p className="my-2 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fuga
            ab dolores rerum ut aliquam molestiae, commodi libero accusamus
            quod.
          </p>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            quidem voluptates, autem doloribus aliquid dolores!
          </p>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            cupiditate odio consectetur explicabo cum omnis, harum quia quaerat
            soluta officiis.
          </p>
          {/* Button */}
          <div className="mt-8">
            <Button
              variant="contained"
              color="error"
              className="text-white font-semibold"
            >
              RESERVE NOW
            </Button>
          </div>
        </div>

        {/* Car Grid */}
        <div className="flex flex-wrap gap-3 justify-end w-[50%] ">
          {cate.map((item, i) => (
            <div className="relative w-[47%] group" key={i} data-aos="zoom-in">
              <Image
                src={item.img}
                alt={item.title}
                className="rounded-lg object-cover w-full h-52 transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-[-10px]"
                width={522}
                height={52}
              />
              <div className="absolute bottom-1 left-1 p-[2px] px-3  bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <h3 className="text-white font-bold text-lg uppercase">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;
