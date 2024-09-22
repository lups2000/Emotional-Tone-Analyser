import { InputComponent } from "./InputComponent";
import { ToneResults } from "./ToneResults";

export const EmotionAnalyser = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Emotional Tone Analyser
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Analyse the emotional tone of your text
          </p>
        </div>
        <InputComponent />
        <ToneResults />
      </div>
    </div>
  );
};
