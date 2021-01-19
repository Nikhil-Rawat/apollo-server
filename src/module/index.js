import { userMutation, userQuery } from './user/index.js';
import { traineeMutation, traineeQuery, traineeSubscription } from './trainee/index.js'

export default {
  Query: {
    ...userQuery,
    ...traineeQuery,
  },
  Mutation: {
    ...traineeMutation,
    ...userMutation
  },
  Subscription: {
    ...traineeSubscription
  }
};

