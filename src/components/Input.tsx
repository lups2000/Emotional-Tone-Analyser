import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

export const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsValid(true);
  };

  const handleCheckInput = () => {
    if (inputValue.trim() === "") {
      setIsValid(false);
    } else {
      alert("Input is valid!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Emotional Tone Checker
        </h1>
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              !isValid ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter text here"
            aria-label="Text input field"
          />
          {!isValid && (
            <p className="text-red-500 text-sm mt-1" role="alert">
              Please enter some text
            </p>
          )}
        </div>
        <button
          onClick={handleCheckInput}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center transition duration-300"
          aria-label="Check input"
        >
          <FaCheck className="mr-2" />
          Check
        </button>
      </div>
    </div>
  );
};
