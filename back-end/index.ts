// starting point of the application
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import homeRoute from './src/routes/homeRoute';
import mongoose from 'mongoose';
import { config } from './src/utils/config';

dotenv.config();
const app = express();
const port = config.port;
const mongoDbUrl = config.mongoDbUrl;

// manage routes
app.use('/', homeRoute);

// mongoDB connection
mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log('MongoDB Connected Successfully');
    // server connection
    app.listen(port, () => {
      console.log(`App is listening port: ${port}`);
    });
  })
  .catch((err) => {
    console.log('Connection Error', err);
  });
