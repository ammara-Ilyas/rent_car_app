"use client";
import { useParams } from "next/navigation";
import ProductDetail from "@/components/widgets/booking/ProductDetail";
import BlogSlider from "@/components/widgets/home/BlogSlider";
import Hero from "@/components/miniWidgets/Hero";
export default function Page() {
  const param = useParams();
  console.log("id", param.id);

  return (
    <>
      <Hero />
      <ProductDetail id={param.id} />
      <BlogSlider />
    </>
  );
}
