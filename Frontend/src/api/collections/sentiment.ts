import { ApiClient } from "../apiClient";

const apiClient = new ApiClient();

export interface SentimentResponse {
  score: number;
  magnitude: number;
  sentimentLabel: "Positive" | "Negative" | "Neutral";
}

export async function analyseSentiment(
  text: string
): Promise<SentimentResponse> {
  return await apiClient.post<SentimentResponse>("/analyze-sentiment", {
    text,
  });
}
