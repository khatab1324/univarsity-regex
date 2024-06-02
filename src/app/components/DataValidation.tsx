import React, { ChangeEvent, useState } from "react";
import { dateValidate } from "../lib/dateValidate";

export const DataValidation = () => {
  const [date, setDate] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDate(value);
    setIsValid(dateValidate(value));
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg shadow-gray-600 text-white">
        <div className="flex justify-center">
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-pink-700 via-teal-500 to-pink-500 bg-clip-text  box-content font-extrabold text-transparent text-center select-none text-lg">
            Enter a date in the format YYYY-MM-DD
          </span>
          <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500  to-pink-500 bg-clip-text  font-extrabold text-transparent text-center select-auto text-lg">
            Enter a date in the format YYYY-MM-DD{" "}
          </h1>
        </div>
        <input
          type="text"
          className="w-full h-14 px-4 rounded-xl border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-500"
          onChange={handleChange}
          value={date}
          placeholder="Enter date (YYYY-MM-DD)"
        />
        {isValid === true && (
          <p className="mt-4 text-green-500 text-center">Valid Date</p>
        )}
        {isValid === false && (
          <p className="mt-4 text-red-500 text-center">Invalid Date</p>
        )}
        {isValid === null && (
          <p className="mt-4 text-yellow-500 text-center">Awaiting Input</p>
        )}
      </div>
    </div>
  );
};
