import dotenv from 'dotenv';

const envFound = dotenv.config();

interface ConfigType {
  port: string;
  jwt: {
    secret: string;
  };
}

export const config: ConfigType = {
  port: '8080',
  jwt: {
    secret: process.env.JWT_SECRET || '',
  },
};
