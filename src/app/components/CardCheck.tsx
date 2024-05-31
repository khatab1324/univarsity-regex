import { useState, ChangeEvent } from "react";
import { visaCardCheck } from "../lib/visaCardCheck";

const CardTypeChecker: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardType, setCardType] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCardNumber(value);
    setCardType(visaCardCheck(value));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg text-white">
        <p className="text-center mb-4">
          Enter your card number to check its type
        </p>
        <input
          type="text"
          className="w-full h-14 px-4 rounded-xl border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-500"
          onChange={handleInputChange}
          value={cardNumber}
          placeholder="Enter your card number"
        />
        <p className="mt-4 text-center text-lg">Card Type: {cardType}</p>
      </div>
    </div>
  );
};

export default CardTypeChecker;
