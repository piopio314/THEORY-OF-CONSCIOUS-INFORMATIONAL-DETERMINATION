import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { biologicalRouter } from './routes/biological';
import { holographicRouter } from './routes/holographic';
import { quantumRouter } from './routes/quantum';
import { consciousnessRouter } from './routes/consciousness';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'TSI-8.0-API',
    version: '1.0.0'
  });
});

// API Routes
app.use('/api/v1/biological', biologicalRouter);
app.use('/api/v1/holographic', holographicRouter);
app.use('/api/v1/quantum', quantumRouter);
app.use('/api/v1/consciousness', consciousnessRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'TSI 8.0 Visualization API',
    description: 'System wizualizacji teorii unifikacyjnej TSI 8.0',
    endpoints: {
      biological: '/api/v1/biological',
      holographic: '/api/v1/holographic',
      quantum: '/api/v1/quantum',
      consciousness: '/api/v1/consciousness'
    },
    documentation: '/api/docs'
  });
});

// Error handling
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 TSI 8.0 API server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`📚 API documentation: http://localhost:${PORT}/api/docs`);
});