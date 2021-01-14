/* eslint-disable import/extensions */
import pkg from 'apollo-server-express';
import { default as schema } from './module/index.js';

const { ApolloServer } = pkg;
const Server = (config) => {
  const { port } = config;
  console.log('check');
  const server = new ApolloServer({ schema });
  server.listen(port, () => {
    console.info(`Server is running on port ${port}`);
  });
};

export default Server;
