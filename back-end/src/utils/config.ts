import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT,
  mongoDbUrl: String(process.env.MONGODB_URL),
};
