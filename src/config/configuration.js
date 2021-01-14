import dotenv from 'dotenv';

const envparsed = dotenv.config().parsed;
const config = {
  port: envparsed.port,
};
Object.freeze(config);
console.log('Configuration is locked');
export default config;
