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
    <div className="flex justify-center items-center  h-full">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-white">
        <div className="flex justify-center">
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-pink-700 via-teal-500 to-pink-500 bg-clip-text  box-content font-extrabold text-transparent text-center select-none text-lg">
            Enter your card number to check its type
          </span>
          <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500  to-pink-500 bg-clip-text  font-extrabold text-transparent text-center select-auto text-lg">
            Enter your card number to check its type
          </h1>
        </div>
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
