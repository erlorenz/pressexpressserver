import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import configureWinston from './config/logging';
import apolloServer from './schema';
import winston from 'winston';
import initializeDB from './db';

// Initialize express
const app = express();

// Logging
configureWinston();

// Initialize Database and Objection
initializeDB();

// Middleware
app.options('*', cors());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());

// Basic GET
app.get('/', (req, res) => res.send('SERVER RUNNING'));

// GraphQL
apolloServer.applyMiddleware({ app });

// Connect server to PORT
const { PORT, NODE_ENV } = process.env;

app.listen(PORT, () => {
  winston.info(
    `Express running at: ${PORT}, 
    Environment: ${NODE_ENV},
    🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`,
  );
});
