// starting point of the application
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import homeRoute from './src/routes/homeRoute';

dotenv.config();
const app = express();
const port = process.env.PORT;

// manage routes
app.use('/', homeRoute);

// server connection
app.listen(port, () => {
  console.log(`App is listening port: ${port}`);
});
