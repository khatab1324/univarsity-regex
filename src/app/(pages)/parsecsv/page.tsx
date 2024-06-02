"use client";
import { NavBarBox } from "@/app/components/NavBarBox";
import { pasingCsv } from "@/app/lib/parsingCsv";
import Link from "next/link";
import React, { useState } from "react";

export default function ParseCsv() {
  const [result, setResult] = useState([]);
  const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    const formData = new FormData(event.currentTarget);
    const data: any = await pasingCsv(formData);
    setResult(data);
  };

  return (
    <main className="bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.20),rgba(255,255,255,0.0))] bg-gray-900 flex h-screen items-center p-24">
      <div className="w-screen flex justify-center h-4/6">
        <div className="flex justify-center items-center w-4/6 h-full max-lg:inline-block ">
          <div className="bg-gray-900 shadow-xl shadow-violet-900 h-full rounded-3xl w-11/12 md:w-9/12 md:h-full overflow-y-auto">
            <NavBarBox />
            <div className="p-4 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.20),rgba(255,255,255,0.0))] bg-gray-900  text-white">
              <form
                onSubmit={handleSumbit}
                className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center">
                  <input
                    type="file"
                    name="csvFile"
                    className="mb-4 p-3 border-2 border-gray-500 rounded-lg text-gray-300 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-200 file:text-pink-700 hover:file:bg-pink-300"
                  />
                  <div className="relative inline-flex h-14 group">
                    <div className="ml-10 absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <button className="px-4 h-11 ml-10  text-white rounded  relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="p-6 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.20),rgba(255,255,255,0.0))] bg-gray-900 min-h-screen text-white">
              {result.length > 0 && (
                <div className="bg-gray-800 p-6 shadow-lg rounded-lg">
                  <div className="flex justify-center">
                    <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500  to-pink-500 bg-clip-text  font-extrabold text-transparent text-center select-auto text-3xl">
                      Parsed CSV Data
                    </h1>
                  </div>
                  {result.map((entry: [], index) => (
                    <div
                      key={index}
                      className="mb-6 p-4 border-2 border-pink-500 rounded-lg bg-gray-700"
                    >
                      {entry.map((item: object, subIndex) => (
                        <div key={subIndex} className="mb-4">
                          {Object.entries(item).map(
                            ([key, value]: [string, string]) => (
                              <p key={key} className="text-md mb-2">
                                <strong className="text-pink-700">
                                  {key}:
                                </strong>
                                {value}
                              </p>
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
