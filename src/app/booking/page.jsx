// pages/CarDetailsPage.jsx

import HeroSection from "@/components/widgets/booking/HeroSection";
import Gallery from "@/components/widgets/booking/Gallery";
import BookingSummary from "@/components/widgets/booking/BookingSummary";
import Specifications from "@/components/widgets/booking/Specification";
import Description from "@/components/widgets/booking/Description";

export default function CarDetailsPage() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <Gallery />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6">
        <div className="lg:col-span-2">
          <Specifications />
          <Description />
        </div>
        <BookingSummary />
      </div>
    </div>
  );
}
