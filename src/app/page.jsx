import Header from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CarCategories from "@/components/widgets/home/CarCategories";
import PopularCars from "@/components/widgets/home/PopularCars";
import WhyChooseUs from "@/components/widgets/home/WhyChooseUs";
import Team from "@/components/widgets/home/Team";
import BlogSection from "@/components/widgets/home/BlogSection";
import CarListings from "@/components/widgets/home/CarListings";
// import BrandSlider from "@/components/widgets/home/BransdSlider";
import HeroSection from "@/components/widgets/home/Hero";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CarCategories />
      <PopularCars />
      <CarListings />
      <WhyChooseUs />
      <Team />
      {/* <BrandSlider /> */}
      <BlogSection />
      <Footer />
    </div>
  );
}
