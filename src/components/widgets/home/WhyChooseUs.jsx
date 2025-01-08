import Image from "next/image";
import { useEffect } from "react";
import {
  PersonOutline,
  SupportAgent,
  AttachMoney,
  Verified,
} from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      offset: 100, // Offset from the top before animation starts
      delay: 0, // Delay in milliseconds
    });
  }, []);
  return (
    <div className="container mx-auto px-4 py-16 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-red-600 text-white flex flex-col  p-8 rounded-lg relative"
        >
          <p className="uppercase font-  mt-6 mb-1 ">
            Help you to find your next car easily
          </p>
          <h2 className="text-4xl font-bold ">Why Choose Us</h2>
          <hr className="text-white w-[30%] my-2" />

          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="mt-6">
            <Image
              src="/images/services/bg-7ed0e8fb-3bed-4dc0-b73d-564a6809844f.png"
              alt="Car Choose"
              width={600}
              height={400}
              className="rounded-lg absolute  top-40 left-16 w-[70%]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personalized Service */}
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="bg-red-500 text-white p-6 rounded-lg shadow-md flex flex-col items-start justify-start "
          >
            <PersonOutline fontSize="large" />
            <h3 className="text-2xl font-semibold mt-4">
              Personalized Service
            </h3>
            <p className="mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* 24/7 Support */}
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="bg-black text-white p-6 rounded-lg shadow-md flex flex-col  items-start justify-start "
          >
            <SupportAgent fontSize="large" />
            <h3 className="text-2xl font-semibold mt-4">24/7 Support</h3>
            <p className="text-center mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Best Price */}
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="bg-black text-white p-6 rounded-lg shadow-md flex flex-col  items-start justify-start "
          >
            <AttachMoney fontSize="large" />
            <h3 className="text-2xl font-semibold mt-4">Best Price</h3>
            <p className="text-center mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Trusted Company */}
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="bg-red-500 text-white p-6 rounded-lg shadow-md flex flex-col  items-start justify-start "
          >
            <Verified fontSize="large" />
            <h3 className="text-2xl font-semibold mt-4">Trusted Company</h3>
            <p className="text-center mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
