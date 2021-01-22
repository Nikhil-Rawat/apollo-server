import dotenv from 'dotenv';

const envparsed = dotenv.config().parsed;
const config = {
  port: envparsed.port,
  baseUrl: envparsed.baseUrl,
};
Object.freeze(config);
console.log('Configuration is locked');
export default config;
