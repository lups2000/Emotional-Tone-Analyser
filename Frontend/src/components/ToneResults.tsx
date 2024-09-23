import { SentimentResponse } from "../api/collections/sentiment";
import { FaRegFaceSmile, FaRegFaceFrown, FaRegFaceMeh } from "react-icons/fa6";

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
          color: "text-blue-700",
        };
      default:
        return {
          icon: <FaRegFaceMeh aria-label="Neutral sentiment" />,
          color: "text-orange-500",
        };
    }
  };

  const { icon, color } = getIconAndColor(sentiment?.sentimentLabel);

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
    </div>
  );
};
