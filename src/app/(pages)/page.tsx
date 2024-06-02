"use client";
import Link from "next/link";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { IntractiveArea } from "../components/intractiveArea";
import { NavBarBox } from "../components/NavBarBox";

export default function Home() {
  const [numberLesson, setNumberLesson] = useState(0);
  const handleClick = (numberlesson: number) => {
    setNumberLesson(numberlesson);
  };
  return (
    <main className="bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.20),rgba(255,255,255,0.0))] bg-gray-900 flex h-screen items-center p-24">
      <div className="w-screen flex justify-center h-4/6">
        <div className="flex  items-center w-4/6 h-full max-lg:inline-block justify-center">
          <div className=" bg-gray-900 shadow-xl shadow-violet-900 h-full rounded-3xl w-11/12  md:w-9/12 md:h-full overflow-y-auto">
            <NavBarBox />
            <IntractiveArea numberLesson={numberLesson} />
          </div>
          <div className="bg-gradient-to-r from-purple-300 to-indigo-700 h-full w-96 rounded-lg ml-11 p-6 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-indigo-900">Sidebar</h2>
            <p
              className="mb-3 cursor-pointer text-blue-700 hover:text-white hover:bg-blue-700 hover:pl-6 transition-all duration-300 relative group rounded-md p-2"
              onClick={() => handleClick(0)}
            >
              lesson 1
            </p>
            <p
              className="mb-3 cursor-pointer text-blue-700 hover:text-white hover:bg-blue-700 hover:pl-6 transition-all duration-300 relative group rounded-md p-2"
              onClick={() => handleClick(1)}
            >
              lesson 2
            </p>
            <p
              className="mb-3 cursor-pointer text-blue-700 hover:text-white hover:bg-blue-700 hover:pl-6 transition-all duration-300 relative group rounded-md p-2"
              onClick={() => handleClick(2)}
            >
              lesson 3
            </p>
            <p
              className="mb-3 cursor-pointer text-blue-700 hover:text-white hover:bg-blue-700 hover:pl-6 transition-all duration-300 relative group rounded-md p-2"
              onClick={() => handleClick(3)}
            >
              lesson 4
            </p>
            <p
              className="mb-3 cursor-pointer text-blue-700 hover:text-white hover:bg-blue-700 hover:pl-6 transition-all duration-300 relative group rounded-md p-2"
              onClick={() => handleClick(4)}
            >
              lesson 5
            </p>
            <p
              className="mb-3 cursor-pointer text-blue-700 hover:text-white hover:bg-blue-700 hover:pl-6 transition-all duration-300 relative group rounded-md p-2"
              onClick={() => handleClick(5)}
            >
              lesson 6
            </p>
            <p
              className="mb-3 cursor-pointer text-blue-700 hover:text-white hover:bg-blue-700 hover:pl-6 transition-all duration-300 relative group rounded-md p-2"
              onClick={() => handleClick(6)}
            >
              lesson 7
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
