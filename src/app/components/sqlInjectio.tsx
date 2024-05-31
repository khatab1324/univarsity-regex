import React, { ChangeEvent, useState } from "react";
import { sqlInjection } from "../lib/sqlInjection";

export const SqlInjectio = () => {
  const [inputValue, setInputValue] = useState("");
  const [isHasSqlInjection, setIsHasSqlInjection] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsHasSqlInjection(sqlInjection(e.target.value));
  };
  return (
    <div className="flex justify-center items-center h-full bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
        <p className="text-white text-center mb-4">
          enter the string and we will check if it has sql injection
        </p>
        <input
          type="text"
          className="w-full h-14 px-4 rounded-xl border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-500"
          onChange={handleChange}
          value={inputValue}
          placeholder="Enter your route"
        />

        <div className="text-white mt-4">
          {/* <p className="text-gray-400">Examples:</p>
          <p className="text-red-400">'; DROP TABLE users; --</p>
          <p className="text-red-400">' OR '1'='1</p> */}
        </div>
        <div className="mt-6">
          {isHasSqlInjection ? (
            <p className="text-red-500 text-center font-bold">not Accepted</p>
          ) : (
            <p className="text-green-500 text-center font-bold">Accepted</p>
          )}
        </div>
      </div>
    </div>
  );
};
