import React from "react";
import HomeFilter from "@/components/miniWidgets/HomeFilter";
import AnimatedButton from "@/components/miniWidgets/AnimatedButton";
import Button from "@/components/miniWidgets/Button";
const HeroSection = () => {
  return (
    <div
      className=" w-full h-screen bg-cover bg-center flex items-center justify-center border-8"
      style={{
        backgroundImage: "url('/images/animated-gif-maker.gif')",
      }}
    >
      <div className="  bg-black h-full bg-opacity-50 flex lg:flex-row flex-col gap-3 border-2 items-center">
        <div className="w-[90%] border-2  mx-auto lg:w-[50%] xl:w-[40%] xl:ml-40 text-white pb-5 pt-10 mt-20 lg:mt-0 lg:pl-20 ">
          <h1 className="lg:text-5xl text-center lg:text-left text-3xl font-bold">
            Lorem Ipsum simply<span className="text-red-600"> dummy </span>text.
          </h1>
          <p className="mt-4 lg:text-lg text-center lg:text-left ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="flex justify-center lg:justify-start">
            <AnimatedButton text="Lorem Ipsum" />
          </div>
        </div>
        <div className="border-2 border-yellow-200   ">
          <HomeFilter />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
