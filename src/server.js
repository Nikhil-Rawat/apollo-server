import { createServer } from 'http';

import Express from 'express';
import pkg from 'apollo-server-express';
const { ApolloServer } = pkg;
export default class Server {
  constructor(config) {
    this.config = config;
    this.app = new Express();
    this.run = this.run.bind(this);
  }

  get application() {
    return this.app;
  }

  run() {
    const { port, env } = this.config;
    this.httpServer.listen(port, () => {
      console.info(`server started on port ${port}`); // eslint-disable-line no-console
    });

    return this;
  }

  async setupApollo(schema) {
    const { app } = this;

    this.server = new ApolloServer({
      ...schema,
      context: ({ req }) => ({
        request: req,
        token: req.headers.authorization || '',
      }),
      onHealthCheck: () => new Promise((resolve) => {
        resolve('I am OK');
      }),
    });

    this.server.applyMiddleware({ app });
    this.httpServer = createServer(app);
    this.server.installSubscriptionHandlers(this.httpServer);
    this.run();
  }
}
