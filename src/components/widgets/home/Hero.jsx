import React from "react";
import HomeFilter from "@/components/miniWidgets/HomeFilter";
import AnimatedButton from "@/components/miniWidgets/AnimatedButton";
import Button from "@/components/miniWidgets/Button";
const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/animated-gif-maker.gif')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex    items-center">
        <div className=" w-[40%] ml-40 text-white  pl-20 ">
          <h1 className="text-5xl font-bold">
            Lorem Ipsum simply<span className="text-red-500"> dummy </span>text.
          </h1>
          <p className="mt-4 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <AnimatedButton text="Lorem Ipsum" />
        </div>
        <HomeFilter />
      </div>
    </div>
  );
};

export default HeroSection;
