import pkg from 'apollo-datasource-rest';
import config from '../config/configuration.js';
const { RESTDataSource } = pkg;

export class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.baseUrl}/api/trainee/`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  createTrainee(InputData) {
    return this.post('create', new Object({ ...InputData }));
  }

  deleteTrainee(id) {
    return this.delete(`delete/${id}`);
  }

  updateTrainee(UpdateData) {
    return this.put('update', new Object({ ...UpdateData }));
  }

  getAllTrainee() {
    return this.get('/getall')
  }

}

