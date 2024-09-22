import { useState } from "react";
import { analyseSentiment } from "../api/collections/sentiment";
import { InputComponent } from "./InputComponent";
import { ToneResults } from "./ToneResults";
import { BeatLoader } from "react-spinners";
import { ErrorHandler } from "./ErrorHandler";

export const EmotionAnalyser = () => {
  const [isFetchingResults, setIsFetchingResults] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleCheckEmotionalTone = async (text: string) => {
    try {
      // Call the API to check the emotional tone
      setIsFetchingResults(true);
      const response = await analyseSentiment(text);
      console.log(response);
      setIsFetchingResults(false);
      setServerError("");
    } catch (error: any) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setServerError(errorMessage);
      setIsFetchingResults(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Emotional Tone Analyser
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Analyse the emotional tone of your text
          </p>
        </div>
        <InputComponent onCheckText={handleCheckEmotionalTone} />
        {isFetchingResults ? (
          <div className="flex justify-center mt-8">
            <BeatLoader color="#2563EB" />
          </div>
        ) : serverError !== "" ? (
          <ErrorHandler error={serverError} />
        ) : (
          <ToneResults />
        )}
      </div>
    </div>
  );
};
