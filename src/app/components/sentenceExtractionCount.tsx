import { useState } from "react";

import React from "react";

const SentenceExtractionCount = () => {
  const [sentence, setSentence] = useState("");
  const [word, setWord] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const countWordInSentence = () => {
    if (word === "") {
      setWordCount(0);
      return;
    }
    const wordRegex = new RegExp(`${word}`, "g");
    const matches = sentence.match(wordRegex) || [];
    setWordCount(matches.length);
  };

  return (
    <div className="flex flex-col items-center p-4 ">
      <div className="flex justify-center">
        <span className=" absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-pink-700 via-teal-500 to-pink-500 bg-clip-text  box-content font-extrabold text-transparent text-center select-none text-xl">
          Word Count in Sentence
        </span>
        <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500  to-pink-500 bg-clip-text  font-extrabold text-transparent text-center select-auto text-xl">
          Word Count in Sentence
        </h1>
      </div>
      <div className="relative group cursor-pointer ">
        <div className="absolute  -inset-1 bg-gradient-to-r from-violet-500 to-violet-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 h-32"></div>
        <textarea
          className="w-96 max-w-lg p-2 border border-slate-300 bg-slate-800 rounded mb-14 relative px-7 py-6  ring-1 ring-gray-900/5  leading-none flex items-top justify-start space-x-6 text-slate-200"
          rows={4}
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          placeholder="Enter your sentence here"
        />
      </div>
      <div className="flex items-center justify-center">
        <input
          className="w-1/3 placeholder:text-center max-w-lg p-2 border-2 border-violet-900 bg-slate-800 rounded mb-4 mt-4 text-white"
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter the word"
        />
        <div className="relative inline-flex  group">
          <div className="ml-10 absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button
            className="px-4 h-11 ml-10  text-white rounded  relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            onClick={countWordInSentence}
          >
            Count Word
          </button>
        </div>
      </div>
      <div className="mt-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold text-white text-center">Word Count: {wordCount}</h2>
      </div>
    </div>
  );
};

export default SentenceExtractionCount;
