import dotenv from 'dotenv';

export const envFound = dotenv.config();

const { DATABASE_HOST, DATABASE_PORT, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME } = process.env;

interface ConfigType {
  port: string;
  jwt: {
    secret: string;
    expiresIn: string;
  };
}

export const config: ConfigType = {
  port: '8080',
  jwt: {
    secret: process.env.JWT_SECRET || '',
    expiresIn: '1h',
  },
};

export const dbConfig = {
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
};
