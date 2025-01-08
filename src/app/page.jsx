"use client";
import { useEffect } from "react";
import Navbar from "@/components/widgets/home/Header";
import Footer from "@/components/layout/Footer";
import PopularCars from "@/components/widgets/home/PopularCars";
import WhyChooseUs from "@/components/widgets/home/WhyChooseUs";
import Team from "@/components/widgets/home/Team";
import BlogSection from "@/components/widgets/home/BlogSection";
import { CarouselCustomArrows } from "@/components/miniWidgets/Slider";
import CarCategories from "@/components/widgets/home/CarCategories";
import CarListings from "@/components/widgets/home/CarListings";
import CarShowcase from "@/components/widgets/home/CarShowCase";
// import BrandSlider from "@/components/widgets/home/BransdSlider";
import HeroSection from "@/components/widgets/home/Hero";
import CarService from "@/components/widgets/home/CarServices";
import ImageSlider from "@/components/widgets/home/Slider";
import BlogSlier from "@/components/widgets/home/BlogSlider";
export default function Home() {
  // useEffect(async () => {
  //   await fetch("/data/car.json")
  //     .then((response) => {
  //       let data = response.json();
  //       console.log("data", data);
  //     })
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <CarShowcase />
      <CarCategories />
      <CarListings />
      <CarService />
      <PopularCars />
      <WhyChooseUs />
      <Team />
      <BlogSlier />
    </div>
  );
}
