"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "@/components/miniWidgets/Button";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(true);
  };
  const links = [
    {
      nav: "home",
      link: "/",
    },
    {
      nav: "inventory",
      link: "/inventory",
    },
    {
      nav: "about",
      link: "/about",
    },
    {
      nav: "login",
      link: "/login",
    },
  ];
  return (
    <nav className="flex items-center px-16 justify-between p-4 shadow-md bg-white ">
      {/* Logo */}
      <div className="text-2xl font-bold text-black">
        <span className="text-red-500">R</span>umble
      </div>

      <div className=" justify-between items-center gap-6 hidden md:flex">
        {/* Links */}
        <div className=" space-x-4 items-center  flex">
          {links.map((page, i) => (
            <Link
              key={i}
              href={page.link}
              className="px-4 py-2  hover:bg-red-600 hover:text-white  rounded-md font-semibold capitalize"
            >
              {page.nav}
            </Link>
          ))}
        </div>
        <Button text="Booking" />
      </div>
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        <AiOutlineMenu size={20} className="text-black" />
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          nav
            ? "fixed md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-900  ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        } bg-black z-50  pt-8`}
      >
        {/* Mobile Logo */}
        {/* Logo */}
        <div className=" flex items-center justify-between px-10 ">
          <div className="text-2xl font-bold bg-white p-2 rounded px-3 text-black">
            <span className="text-red-500">R</span>umble
          </div>
          <AiOutlineClose
            size={20}
            className="text-white"
            onClick={() => setNav(false)}
          />
        </div>
        {/* Mobile Navigation Items */}
        <div className="flex flex-col gap-2 mt-9">
          {" "}
          {links.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="p-4 border-b rounded-xl text-white hover:bg-red-600 duration-300 hover:text-white cursor-pointer border-gray-600  font-semibold capitalize"
            >
              {item.nav}
            </Link>
          ))}
        </div>
        <div className="ml-8 mt-16">
          {" "}
          <Button text="Booking" />
        </div>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
