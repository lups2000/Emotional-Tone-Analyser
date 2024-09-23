import { SentimentResponse } from "../api/collections/sentiment";
import { FaRegFaceSmile, FaRegFaceFrown, FaRegFaceMeh } from "react-icons/fa6";
import GaugeChart from "react-gauge-chart";

interface ToneResultsProps {
  sentiment?: SentimentResponse;
}

export const ToneResults = ({ sentiment }: ToneResultsProps) => {
  const getIconAndColor = (sentimentLabel?: string) => {
    switch (sentimentLabel) {
      case "Positive":
        return {
          icon: <FaRegFaceSmile aria-label="Positive sentiment" />,
          color: "text-green-500",
        };
      case "Negative":
        return {
          icon: <FaRegFaceFrown aria-label="Negative sentiment" />,
          color: "text-red-700",
        };
      default:
        return {
          icon: <FaRegFaceMeh aria-label="Neutral sentiment" />,
          color: "text-stone-500",
        };
    }
  };

  const { icon, color } = getIconAndColor(sentiment?.sentimentLabel);

  const magnitude = sentiment?.magnitude ?? 0;
  const maxMagnitude = 5; // just to set a threshold 
  const gaugePercent = Math.min(magnitude / maxMagnitude, 1);

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Results:</h2>
      <div className="flex items-center">
        <div className={`icon ${color}`} style={{ fontSize: "50px" }}>
          {icon}
        </div>
        <div className="ml-3">
          <p className="text-lg font-semibold">
            {sentiment?.sentimentLabel ?? "No sentiment detected"}
          </p>
        </div>
      </div>
      <div className="w-full mt-3">
        <GaugeChart
          nrOfLevels={3}
          percent={gaugePercent}
          colors={["#e0e7ff", "#4f46e5"]}
          arcWidth={0.3}
          needleColor="#ccc9c0"
          needleBaseColor="#ccc9c0"
          hideText
        />
        <p className="text-center text-sm text-gray-600 mt-2">
          Magnitude: {magnitude.toFixed(2)} / {maxMagnitude}
        </p>
      </div>
    </div>
  );
};
