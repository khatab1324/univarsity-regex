import React, { useState } from "react";
import { htmlElementExtraction } from "../lib/htmlElementExtraction";

const HtmlElementExtractor = () => {
  const [htmlInput, setHtmlInput] = useState("");
  const [elements, setElements] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setHtmlInput(value);
    setElements(htmlElementExtraction(value));
  };

  return (
    <div className="p-6 bg-gray-900 ">
      <h1 className="text-white text-2xl font-bold mb-4 ">
        HTML Element Extractor
      </h1>
      <textarea
        className="w-full p-2 mb-4 border rounded-lg bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.20),rgba(255,255,255,0.0)  bg-slate-800 border-none text-white"
        rows={10}
        placeholder="Enter HTML here..."
        value={htmlInput}
        onChange={handleChange}
      ></textarea>
      <div className="bg-slate-950 text-white p-4 border border-purple-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Extracted Elements:</h2>
        <ul className="list-disc list-inside">
          {elements.map((element, index) => (
            <li key={index} className="text-gray-300">
              {element}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HtmlElementExtractor;
