import config from './config/configuration';
import Server from './lib/NodeServer.js';
import { resolvers, typeDefs } from '.';

const server = new Server(config);

const initServer = async () => {
  server.bootstrap()
    .setupApollo({ resolvers, typeDefs });
};

initServer();


export default server;
