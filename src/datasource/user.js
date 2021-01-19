import pkg from 'apollo-datasource-rest';
import config from '../config/configuration.js';
const { RESTDataSource } = pkg;

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.baseUrl}/api/user`;
  }

  loginUser(payload) {
    return this.post('/login', payload);
  }
}

