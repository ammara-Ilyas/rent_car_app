"use client";
import React, { useEffect, useState } from "react";
import { FaComments } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const BlogSlider = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      offset: 100, // Offset from the top before animation starts
      delay: 0, // Delay in milliseconds
    });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/blog.json");
        let data = await response.json();
        console.log("data", data);
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center font-semibold bg-gray-100 rounded-md pt-10 font-sans my-20">
      <p className="text-gray-500">Lorem Ipsum is simply dummy text</p>
      <h2 className="text-3xl font-bold mb-4">
        Our <span className=" text-red-500 font-sans ">Blogs</span>
      </h2>
      <div className="w-[80%] mx-auto flex gap-4 mt-7">
        {blogs.map((item, i) => (
          <div
            data-aos="zoom-in-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            key={i}
            className="max-w-xs rounded overflow-hidden shadow-lg bg-white hover:scale-110 transition-transform duration-500 ease-in-out"
          >
            <Image
              className="w-full h-48 object-cover"
              src={item.image}
              alt="Car on a road"
              width={200}
              height={200}
            />
            <div className="px-6 py-4">
              <div className="flex items-center justify-between mb-2 text-gray-500 text-sm">
                <p className="text-sm text-gray-500 ">{item.date}</p>
                <div className=" w-[33%] flex items-center justify-between">
                  <div className="flex items-center">
                    <FaComments className="text-xl mr-1" />
                    <span>{item.comments}</span>
                  </div>
                  <div className="flex items-center">
                    <CiHeart className="text-xl mr-1" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
              <h2 className="font-bold text-lg mb-2 text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-500 font-sans text-sm">
                {item.description}
              </p>
            </div>
            <div className="px-6 pb-4 flex justify-between items-center">
              <a
                href={item.link}
                className="text-blue-500 text-sm font-semibold hover:underline"
              >
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSlider;
