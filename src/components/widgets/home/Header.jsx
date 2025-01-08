import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center px-16 justify-between p-4 shadow-md bg-white ">
      {/* Logo */}
      <div className="text-2xl font-bold text-black">
        <span className="text-red-500">R</span>umble
      </div>

      {/* Links */}
      <div className="flex space-x-4 items-center">
        {["home", "inventory", "blog", "about", "pages", "contact"].map(
          (page, i) => (
            <Link
              key={i}
              href={page}
              className="px-4 py-2  hover:bg-red-600 hover:text-white  rounded-md font-semibold capitalize"
            >
              {page}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
