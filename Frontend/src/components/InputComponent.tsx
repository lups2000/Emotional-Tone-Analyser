import React, { useState } from "react";
import { FaCheck, FaRedo } from "react-icons/fa";
import { ErrorHandler } from "./ErrorHandler";

export interface InputComponentProps {
  onCheckText: (text: string) => void;
  onResetText: () => void;
}

export const InputComponent = (props: InputComponentProps) => {
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    setIsValid(true);
  };

  const handleCheckText = async () => {
    if (text.trim() === "") {
      setIsValid(false);
    } else {
      props.onCheckText(text);
    }
  };

  const resetText = () => {
    setText("");
    setIsValid(true);
    props.onResetText();
  };

  return (
    <div>
      <div>
        <textarea
          style={{
            WebkitBorderRadius: "5px",
            MozBorderRadius: "5px",
            borderRadius: "5px",
          }}
          className="appearance-none rounded-none relative block min-h-20 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your text here"
          value={text}
          onChange={handleTextChange}
        />
        {!isValid && <ErrorHandler error="Please enter some text" className="mt-2" />}
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={handleCheckText}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <FaCheck className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
          </span>
          Check
        </button>
        <button
          onClick={resetText}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <FaRedo className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
          </span>
          Reset
        </button>
      </div>
    </div>
  );
};
