import Link from "next/link";
import React from "react";

export const NavBarBox = () => {
  return (
    <div className="  flex justify-center bg-[radial-gradient(circle_farthest-side,rgba(255,160,250,.80),rgba(255,150,215,0.1))] bg-gray-700 p-3 rounded-t-2xl space-x-5 ">
      <Link href="/" legacyBehavior>
        <a className="relative  hover:text-white group transition duration-500 ease-in-out">
          <span className="absolute inset-0  transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100 rounded-md"></span>
          <span className="relative z-10 px-4 py-2 transition-transform duration-500 ease-in-out group-hover:translate-x-1/4">
            basic
          </span>
        </a>
      </Link>
      <Link href="/exprements" legacyBehavior>
        <a className="relative  hover:text-white group transition duration-500 ease-in-out">
          <span className="absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100 rounded-md"></span>
          <span className="relative z-10 px-4 py-2 transition-transform duration-500 ease-in-out group-hover:translate-x-1/4">
            exprements
          </span>
        </a>
      </Link>
      <Link href="/parsecsv" legacyBehavior>
        <a className="relative  hover:text-white group transition duration-500 ease-in-out">
          <span className="absolute inset-0  transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100 rounded-md"></span>
          <span className="relative z-10 px-4 py-2 transition-transform duration-500 ease-in-out group-hover:translate-x-1/4">
            Parsing csv
          </span>
        </a>
      </Link>
    </div>
  );
};
