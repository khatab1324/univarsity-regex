"use client";
import Link from "next/link";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { IntractiveArea } from "../../components/intractiveArea";
import { RenderExprement } from "./RenderExprement";
import { NavBarBox } from "@/app/components/NavBarBox";

export default function Home() {
  const [nameExprement, setNameExprement] = useState("passwordValidation");
  const handleClick = (nameExprement: string) => {
    setNameExprement(nameExprement);
  };
  return (
    <main className="bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.20),rgba(255,255,255,0.0))] bg-gray-900 flex h-screen items-center p-24">
      <div className="w-screen flex justify-center h-4/6 ">
        <div className="flex  items-center w-4/6 h-full max-lg:inline-block justify-center ">
          <div className=" bg-gray-900 shadow-2xl shadow-violet-900 h-full rounded-3xl w-11/12   md:w-9/12 md:h-full overscroll-none">
            <NavBarBox />
            <RenderExprement nameRenderComponent={nameExprement} />
          </div>
          <div className="bg-gradient-to-r from-purple-300 to-indigo-500 h-full w-96 rounded-lg ml-11 p-6 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-indigo-900">Sidebar</h2>
            <p
              className="mb-3 cursor-pointer text-indigo-900 hover:text-white hover:bg-blue-700 hover:pl-6 transition-all duration-300 relative group rounded-md p-2"
              onClick={() => handleClick("passwordValidation")}
            >
              Password Validation
              <span className="absolute right-0 transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </p>

            <p
              className="mb-3 cursor-pointer text-indigo-900 hover:text-white hover:bg-blue-700 hover:pl-6 transition-all duration-300 relative group rounded-md p-2"
              onClick={() => handleClick("sqlInjection")}
            >
              SQL Injection
              <span className="absolute right-0 transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </p>
            <p
              className="mb-3 cursor-pointer text-indigo-900 hover:text-white hover:bg-blue-700 hover:pl-6 transition-all duration-300 relative group rounded-md p-2"
              onClick={() => handleClick("dataValidation")}
            >
              Date Validation
              <span className="absolute right-0 transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </p>
            <p
              className="mb-3 cursor-pointer text-indigo-900 hover:text-white hover:bg-blue-700 hover:pl-6 transition-all duration-300 relative group rounded-md p-2"
              onClick={() => handleClick("cardTypeCheck")}
            >
              Credit Card Type Checker
              <span className="absolute right-0 transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </p>

            <p
              className="mb-3 cursor-pointer text-indigo-900 hover:text-white hover:bg-blue-700 hover:pl-6 transition-all duration-300 relative group rounded-md p-2"
              onClick={() => handleClick("htmlElementExtraction")}
            >
              HTML Tag Extraction
              <span className="absolute right-0 transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </p>
            <p
              className="mb-3 cursor-pointer text-indigo-900 hover:text-white hover:bg-blue-700 hover:pl-6 transition-all duration-300 relative group rounded-md p-2"
              onClick={() => handleClick("sentenceExtractionCount")}
            >
              Sentence Extraction Count
              <span className="absolute right-0 transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
