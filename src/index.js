/* eslint-disable import/extensions */
import Server from './server.js';
import config from './config/configuration.js';

const server = Server(config);

server();
