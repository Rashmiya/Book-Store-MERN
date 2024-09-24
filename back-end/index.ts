// starting point of the application
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT;

// default Http Route is slash(/)
app.get('/', (req: Request, res: Response) => {
  return res.send('Welcome to the Eagle Eye Book Store');
});

// server connection
app.listen(port, () => {
  console.log(`App is listening port: ${port}`);
});
