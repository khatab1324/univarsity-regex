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

interface IntractiveAreaProps {
  numberLesson: number;
}

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
    } else {
    }
    const isTrueRegexResult = isTrueRegex(
      e.target.value,
      learnReqex[numberLesson].regex[0],
      learnReqex[numberLesson].answer
    );
    console.log("====================================");
    console.log(isTrueRegexResult);
    console.log("====================================");
    // const wrappedContent = wrapMatches(isTrueRegexResult);
    // setContent(wrappedContent);
    if (isTrueRegexResult) {
      setSuccess(true);
      setError(false);
    } else {
      setSuccess(isTrueRegexResult);
      setError(!isTrueRegexResult);
    }
    setInputValue(e.target.value);
  };

  const renderContent = (content || learnReqex[numberLesson].content).replace(
    /\n/g,
    "<br />"
  );

  return (
    <div className="p-2">
      <div className="text-neutral-300 flex justify-center m-4 tracking-wide">
        {learnReqex[numberLesson].description}
      </div>
      <div className="bg-gray-100 w-full h-46 mb-6 rounded-lg ">
        <p
          className="p-3"
          dangerouslySetInnerHTML={{ __html: renderContent }}
        />
      </div>
      <input
        type="text"
        className="rounded-md h-14 w-full text-2xl text-gray-50 border-0 outline-none text-center bg-neutral-700"
        onChange={handleChange}
        value={inputValue}
      />
      <div
        className={cx({
          "bg-red-400 ": error,
          "bg-yellow-600": match,
          "bg-green-400": success,
        })}
      >
        <p>{error && "not match"}</p>
        <p>{success && "pass"}</p>
        <p>{match && " match"}</p>
      </div>
    </div>
  );
};
