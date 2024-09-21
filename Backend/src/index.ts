import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sentimentRouter from './routes/sentiment';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 5001;

// Middleware Setup
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(bodyParser.json());

// Routes
app.use('/analyze-sentiment', sentimentRouter);

// Root Endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Sentiment Analysis Backend is running.');
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
