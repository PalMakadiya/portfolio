import app from './app';
import { connectDB } from './config/db';
import { logger } from './utils/logger';

const PORT = process.env.PORT || 5000;

// Start server after connecting to database
const startServer = async () => {
  await connectDB();
  
  app.listen(PORT, () => {
    logger.info(`REST API Server is running on port ${PORT}`);
  });
};

startServer().catch(err => {
  logger.error('Failed to start portfolio API server:', err);
});
