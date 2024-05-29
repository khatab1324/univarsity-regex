"use client";
import Link from "next/link";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { IntractiveArea } from "../components/intractiveArea";

export default function Home() {
  const [numberLesson, setNumberLesson] = useState(0);
  const handleClick = (numberlesson: number) => {
    setNumberLesson(numberlesson);
  };
  return (
    <main className="bg-slate-600 flex h-screen items-center p-24">
      <div className="w-screen flex justify-center">
        <div className="flex justify-center items-center w-4/6 h-96 ">
          <div className=" bg-gray-900 border-4 border-blue-900  rounded-3xl w-11/12 h-5/6 md:w-9/12 md:h-5/6 overflow-y-auto">
            <div className="flex justify-center bg-slate-50 p-3">
              <Link href="/" className="mr-5">
                basic
              </Link>
              <Link href="/exprements">exprements</Link>
            </div>
            <IntractiveArea numberLesson={numberLesson} />
          </div>
          <div className="bg-slate-100 h-full w-96 rounded-lg ml-11 p-4 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
            <p onClick={() => handleClick(0)}>lesson 1</p>
            <p onClick={() => handleClick(1)}>lesson 2</p>
            <p onClick={() => handleClick(2)}>lesson 3</p>
            <p onClick={() => handleClick(3)}>lesson 4</p>
            <p onClick={() => handleClick(4)}>lesson 5</p>
            <p onClick={() => handleClick(5)}>lesson 6</p>
            <p onClick={() => handleClick(6)}>lesson 7</p>
          </div>
        </div>
      </div>
    </main>
  );
}
