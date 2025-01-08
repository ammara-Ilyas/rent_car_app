import React, { useEffect, useLayoutEffect, useState } from "react";
import Heading from "@/components/miniWidgets/Heading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
const CarService = () => {
  const [carServices, setCarServives] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100, // Offset from the top before animation starts
      delay: 0,
    });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/services.json");
        let data = await response.json();
        console.log("services", data);
        setCarServives(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div
      className="pt-16 pb-36  bg-black bg-opacity-40 px-28 "
      style={{
        paddingBottom: "30px",
        position: "relative",
        backgroundImage: `url("/images/bg_02.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Heading title="Our Services" para="Lorem ipsum is simply dummy text" />
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className="mb-12"
        containerClass="carousel-container"
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
        {carServices.map((service) => (
          <div
            key={service.id}
            className="bg-white  w-[90%] group hover:border-red-600 gap-5 border-none rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img
              src={service.image}
              alt={service.heading}
              className="w-full h-48 object-cover "
            />
            <div className="p-4 text-white bg-black group-hover:bg-red-600 group-hover:text-white duration-300 transition-all ease-in-out text-center">
              <h3 className="text-lg font-bold ">{service.heading}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarService;
