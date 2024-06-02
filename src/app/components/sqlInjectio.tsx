import React, { ChangeEvent, useState } from "react";
import { sqlInjection } from "../lib/sqlInjection";

export const SqlInjectio = () => {
  const [inputValue, setInputValue] = useState("");
  const [isHasSqlInjection, setIsHasSqlInjection] = useState<boolean | null>(
    null
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsHasSqlInjection(sqlInjection(e.target.value));
    if (e.target.value === "") {
      setIsHasSqlInjection(null);
    }
  };
  return (
    <div className="flex justify-center items-center h-full ">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg shadow-slate-600">
        <div className="flex justify-center">
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-pink-500 via-teal-500 to-pink-500 bg-clip-text  box-content font-extrabold text-transparent text-center select-none text-xl">
            Enter username
          </span>
          <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500  to-pink-500 bg-clip-text  font-extrabold text-transparent text-center select-auto text-xl">
            Enter username
          </h1>
        </div>
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
          {isHasSqlInjection && (
            <p className="text-red-500 text-center font-bold">not Accepted</p>
          )}
          {isHasSqlInjection === false && (
            <p className="text-green-500 text-center font-bold">Accepted</p>
          )}
        </div>
      </div>
    </div>
  );
};
