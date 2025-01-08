import React from "react";
import { Button, Chip } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useCarContext } from "@/contextApi/CarContext";
import Heading from "../../miniWidgets/Heading";
import CarCard from "@/components/miniWidgets/CarCard";
const CarCategories = () => {
  const { inventory } = useCarContext();

  return (
    <div
      className="pt-16 pb-36  bg-black bg-opacity-40 px-28"
      style={{
        paddingBottom: "30px",
        position: "relative",
        backgroundImage: `url("/images/bg_02.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Heading
        title="Lorem ipsum is simply dummy text"
        para="Lorem ipsum is simply dummy text"
      />

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000} // Set to 3000ms (3 seconds)
        centerMode={false}
        className="mb-12"
        containerClass="carousel-container"
        // dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item-padding-40-px"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4, // Show 4 items on desktop
            partialVisibilityGutter: 30, // Adjust gutter between cards
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2, // Show 2 items on tablets
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1, // Show 1 item on mobile
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        // showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {inventory.map((car, index) => (
          <div
            className="w-[95%] bg-white bg-opacity-80 rounded-lg overflow-hidden"
            key={index}
          >
            <CarCard car={car} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarCategories;
