"use client";
import { pasingCsv } from "@/app/lib/parsingCsv";
import Link from "next/link";
import React, { useState } from "react";

export default function ParseCsv() {
  const [result, setResult] = useState([]);
  const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    const formData = new FormData(event.currentTarget);
    const data = await pasingCsv(formData);
    setResult(data);
  };

  return (
    <main className="bg-slate-600 flex h-screen items-center p-24">
      <div className="w-screen flex justify-center h-4/6">
        <div className="flex justify-center items-center w-4/6 h-full max-lg:inline-block ">
          <div className="bg-gray-900 border-4 border-blue-900 h-full rounded-3xl w-11/12 md:w-9/12 md:h-full overflow-y-auto">
            <div className="flex justify-center bg-slate-50 p-3 ">
              <Link href="/" className="mr-5">
                basic
              </Link>
              <Link href="/exprements" className="mr-5">
                exprements
              </Link>
              <Link href="/parsecsv" className="mr-5">
                Parsing csv
              </Link>
            </div>
            <div className="p-4">
              <form
                onSubmit={handleSumbit}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
              >
                <input
                  type="file"
                  name="csvFile"
                  className="mb-4 p-3 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-700 transition-all duration-300"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="p-4">
              {result.length > 0 && (
                <div className="bg-white p-4 rounded-md">
                  <h3 className="text-lg font-bold mb-4">Parsed CSV Data</h3>
                  {result.map((entry, index) => (
                    <div
                      key={index}
                      className="mb-4 p-2 border-2 border-gray-300 rounded-md"
                    >
                      {entry.map((item, subIndex) => (
                        <div key={subIndex} className="mb-2">
                          {Object.entries(item).map(([key, value]) => (
                            <p key={key} className="text-sm">
                              <strong>{key}:</strong> {value}
                            </p>
                          ))}
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
