import { useState } from "react";
import {
  analyseSentiment,
  SentimentResponse,
} from "../api/collections/sentiment";
import { InputComponent } from "./InputComponent";
import { ToneResults } from "./ToneResults";
import { BeatLoader } from "react-spinners";
import { ErrorHandler } from "./ErrorHandler";

export const EmotionAnalyser = () => {
  const [isFetchingResults, setIsFetchingResults] = useState(false);
  const [serverError, setServerError] = useState("");
  const [sentiment, setSentiment] = useState<SentimentResponse | undefined>(
    undefined
  );

  const handleCheckEmotionalTone = async (text: string) => {
    setIsFetchingResults(true);
    setServerError("");

    try {
      // Call the API to check the emotional tone
      const response = await analyseSentiment(text);
      setSentiment(response);
    } catch (error: any) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setServerError(errorMessage);
    } finally {
      setIsFetchingResults(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Emotional Tone Analyser
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Analyse the emotional tone of your text
          </p>
        </div>
        <InputComponent
          onCheckText={handleCheckEmotionalTone}
          onResetText={() => setSentiment(undefined)}
        />
        <hr />
        {isFetchingResults ? (
          <div className="flex justify-center mt-8">
            <BeatLoader color="#2563EB" />
          </div>
        ) : serverError !== "" ? (
          <ErrorHandler error={serverError} />
        ) : sentiment ? (
          <ToneResults sentiment={sentiment} />
        ) : undefined}
      </div>
    </div>
  );
};
