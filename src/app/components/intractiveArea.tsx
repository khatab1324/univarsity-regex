"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { learnReqex } from "../data/learnRegex";
import { isTrueRegex } from "../lib/regularValidate";
import cx from "clsx";

// function wrapMatches(matches: MatchResult[]): string {
//   return matches
//     .map(({ testString, allMatch, someMatch }) => {
//       if (allMatch) {
//         return `<span style="background-color: green;">${testString}</span>`;
//       } else if (someMatch) {
//         return `<span style="background-color: red;">${testString}</span>`;
//       } else {
//         return testString;
//       }
//     })
//     .join(" ");
// }

// interface IntractiveAreaProps {
//   numberLesson: number;
// }

export const IntractiveArea = ({ numberLesson }: { numberLesson: number }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [match, setMatch] = useState(false);
  const [success, setSuccess] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    setInputValue("");
    setContent(learnReqex[numberLesson].content);
    setError(false);
    setSuccess(false);
    setMatch(false);
  }, [numberLesson]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isSameRegex = e.target.value === learnReqex[0].regex[0];
    if (!isSameRegex) {
      setContent(learnReqex[numberLesson].content);
    }

    const isTrueRegexResult = isTrueRegex(
      e.target.value,
      learnReqex[numberLesson].regex[0],
      learnReqex[numberLesson].answer
    );
    console.log("====================================");
    console.log(isTrueRegexResult);
    console.log("====================================");

    if (isTrueRegexResult) {
      setSuccess(true);
      setError(false);
    } else {
      setSuccess(false);
      setError(true);
    }
    setInputValue(e.target.value);
  };

  const renderContent = (content || learnReqex[numberLesson].content).replace(
    /\n/g,
    "<br />"
  );

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <div className="text-neutral-300 flex justify-center m-4 tracking-wide text-lg">
        {learnReqex[numberLesson].description}
      </div>
      <div className="bg-gray-400 w-full h-48 mb-6 rounded-lg p-4">
        <p
          className=" text-purple-700 text-xl"
          dangerouslySetInnerHTML={{ __html: renderContent }}
        />
      </div>
      <input
        type="text"
        className="rounded-md h-14 w-full text-2xl text-gray-50 border-0 outline-none text-center bg-neutral-700 placeholder-gray-400"
        onChange={handleChange}
        value={inputValue}
        placeholder="Enter your regex here..."
      />
      <div
        className={cx("mt-4 p-2 rounded-md text-white text-center", {
          "bg-red-400": error,
          "bg-yellow-600": match,
          "bg-green-400": success,
        })}
      >
        {error && <p>Not match</p>}
        {success && <p>Pass</p>}
        {match && <p>Match</p>}
      </div>
    </div>
  );
};

// Helper function (ensure you have this in your code)
// function isTrueRegex(input: string, regex: string, answer: string): boolean {
//   const pattern = new RegExp(regex);
//   return pattern.test(input) && input === answer;
// }
