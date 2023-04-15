import { type Config } from './config.types';

const config: Config = {
  apiUrl: process.env.REACT_APP_API_URL || ''
};

export default config;
