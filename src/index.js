import config from './config/configuration.js';
import Server from './server.js';
import { resolvers, typeDefs } from './module/module.js';


const server = new Server(config);

const initServer = async () => {
  server.setupApollo({ resolvers, typeDefs });
};

initServer();


export default server;
