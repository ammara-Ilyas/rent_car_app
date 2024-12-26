import Image from "next/image";
import {
  PersonOutline,
  SupportAgent,
  AttachMoney,
  Verified,
} from "@mui/icons-material";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-red-600 text-white flex flex-col justify-center p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="mt-6">
            <Image
              src="/images/home/carChoose.png"
              alt="Car Choose"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personalized Service */}
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <PersonOutline fontSize="large" />
            <h3 className="text-2xl font-semibold mt-4">
              Personalized Service
            </h3>
            <p className="text-center mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="bg-black text-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <SupportAgent fontSize="large" />
            <h3 className="text-2xl font-semibold mt-4">24/7 Support</h3>
            <p className="text-center mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Best Price */}
          <div className="bg-black text-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <AttachMoney fontSize="large" />
            <h3 className="text-2xl font-semibold mt-4">Best Price</h3>
            <p className="text-center mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Trusted Company */}
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
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
