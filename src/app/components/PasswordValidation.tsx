import React, { ChangeEvent, useState } from "react";
import { checkSringthOfPassword } from "../lib/checkStringthOfPassword";

export const PasswordValidation = () => {
  const [inputValue, setInputValue] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordStrength(checkSringthOfPassword(e.target.value));
    setInputValue(e.target.value);
  };
  const getStrengthLabel = (strength: number) => {
    switch (strength) {
      case 1:
        return { label: "Very Weak", color: "bg-red-600" };
      case 2:
        return { label: "Weak", color: "bg-orange-500" };
      case 3:
        return { label: "Good", color: "bg-yellow-400" };
      case 4:
        return { label: "Very Good", color: "bg-blue-500" };
      case 5:
        return { label: "Excellent", color: "bg-green-500" };
      default:
        return { label: "Very Weak", color: "bg-red-600" };
    }
  };
  const strengthInfo = getStrengthLabel(passwordStrength);
  return (
    <div className="flex justify-center items-center h-full bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
        <p className="text-white text-center mb-4">
          Try to enter a strong password, I will not tell you how
        </p>
        <input
          type="password"
          className="w-full h-14 px-4 rounded-xl border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-500"
          onChange={handleChange}
          value={inputValue}
          placeholder="Enter your password"
        />
        {inputValue && (
          <div className="mt-4 text-center">
            <p className="text-white mb-2">{strengthInfo.label}</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${strengthInfo.color}`}
                style={{ width: `${(passwordStrength / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
