import express, { Router, Request, Response } from 'express';
import { LanguageServiceClient } from '@google-cloud/language';

const router: Router = express.Router();

// Initialize Google Cloud Natural Language client
const client = new LanguageServiceClient();

interface SentimentRequest {
  text: string;
}

interface SentimentResponse {
  score: number;
  magnitude: number;
  sentimentLabel: 'Positive' | 'Negative' | 'Neutral';
}

router.post('/', async (req: Request, res: Response) => {
  const { text } = req.body as SentimentRequest;

  // Validate input
  if (typeof text !== 'string' || text.trim() === '') {
    return res.status(400).json({ error: 'Invalid or empty text input.' });
  }

  const document = {
    content: text,
    type: 'PLAIN_TEXT' as const,
  };

  try {
    const [result] = await client.analyzeSentiment({ document });
    const sentiment = result.documentSentiment;

    // Determine sentiment label based on score
    let sentimentLabel: SentimentResponse['sentimentLabel'] = 'Neutral';
    if (sentiment?.score && sentiment.score > 0.25) {
      sentimentLabel = 'Positive';
    } else if (sentiment?.score && sentiment.score < -0.25) {
      sentimentLabel = 'Negative';
    }

    const response: SentimentResponse = {
      score: sentiment?.score ?? 0,
      magnitude: sentiment?.magnitude ?? 0,
      sentimentLabel,
    };

    res.json(response);
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    res.status(500).json({ error: 'Failed to analyze sentiment.' });
  }
});

export default router;
