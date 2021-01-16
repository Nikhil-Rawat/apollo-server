import { userQuery } from './user/index.js';
import { mutation, traineeQuery } from './trainee/index.js'

export default {
  Query: {
    ...userQuery,
    ...traineeQuery,
  },
  Mutation: {
    ...mutation
  }
};

