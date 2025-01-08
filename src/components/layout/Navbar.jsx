import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center px-16 justify-evenly p-4 shadow-md bg-black bg-opacity-10">
      {/* Logo */}
      <div className="text-2xl font-bold bg-white p-2 rounded px-3 text-black">
        <span className="text-red-500">R</span>umble
      </div>

      {/* Links */}
      <div className="flex space-x-4 items-center">
        {["home", "inventory", "blog", "about", "pages", "contact"].map(
          (page, i) => (
            <Link
              key={i}
              href={page}
              className="px-4 py-2 text-white active:bg-red-600   rounded-md font-semibold capitalize"
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
