"use client";
import { useParams } from "next/navigation";
import ProductDetail from "@/components/widgets/booking/ProductDetail";
import BlogSlider from "@/components/widgets/home/BlogSlider";
import Hero from "@/components/miniWidgets/Hero";
export default function CarDetails() {
  const param = useParams();
  //   const { id } = param.query;
  console.log("id", param);

  return (
    <>
      <Hero />
      <ProductDetail id={param.id} />
      <BlogSlider />
    </>
  );
}
