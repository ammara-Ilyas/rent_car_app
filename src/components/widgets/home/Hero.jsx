import React from "react";
import HomeFilter from "@/components/miniWidgets/HomeFilter";
import AnimatedButton from "@/components/miniWidgets/AnimatedButton";
import Button from "@/components/miniWidgets/Button";
const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center mb-52 lg:mb-0"
      style={{
        backgroundImage: "url('/images/animated-gif-maker.gif')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex lg:flex-row flex-col gap-5 items-center">
        <div className="w-[70%] mx-auto lg:w-[50%] xl:w-[40%] xl:ml-40 text-white mt-20 lg:mt-0 lg:pl-20 ">
          <h1 className="lg:text-5xl text-3xl font-bold">
            Lorem Ipsum simply<span className="text-red-600"> dummy </span>text.
          </h1>
          <p className="mt-4 lg:text-lg ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <AnimatedButton text="Lorem Ipsum" />
        </div>
        <div className="border-2 border-yellow-200  ">
          <HomeFilter />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
