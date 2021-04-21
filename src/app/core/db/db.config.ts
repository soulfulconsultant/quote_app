import * as dotenv from 'dotenv';

dotenv.config();

import { IDatabaseConfig } from './interfaces/db.config.interface';

export const dbConfig: IDatabaseConfig = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
};
