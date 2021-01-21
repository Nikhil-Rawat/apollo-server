import pkg from 'apollo-datasource-rest';
import config from '../config/configuration.js';
const { RESTDataSource } = pkg;

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.baseUrl}/api/user`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  getMe() {
    return this.get('/me');
  }

  loginUser(payload) {
    return this.post('/login', payload);
  }
}

