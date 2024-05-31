"use client";
import React, { ChangeEvent, useState } from "react";
export const RouteValidation = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="flex justify-center items-center h-full bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
        <p className="text-white text-center mb-4">
          enter the route to check if it valid
        </p>
        <input
          type="text"
          className="w-full h-14 px-4 rounded-xl border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-500"
          onChange={handleChange}
          value={inputValue}
          placeholder="Enter your route"
        />
      </div>
    </div>
  );
};
