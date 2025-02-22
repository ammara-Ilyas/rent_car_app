"use client"; // Ensure this component runs on the client side

import { useParams } from "next/navigation";
import ProductDetail from "@/components/widgets/booking/ProductDetail";
import BlogSlider from "@/components/widgets/home/BlogSlider";
import Hero from "@/components/miniWidgets/Hero";

export default function Page() {
  const param = useParams();
  console.log("id", param?.id);

  // if (!param?.id) {
  //   return <p>Loading...</p>; // Fallback UI while `param.id` is not available
  // }

  return (
    <>
      {param.id}
      <Hero />
      <ProductDetail id={param.id} />
      <BlogSlider />
    </>
  );
}
