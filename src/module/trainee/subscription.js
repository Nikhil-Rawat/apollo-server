import pubSub from '../pubsub.js';
import constant from '../../lib/constant.js';

export default {
  traineeAdded: {
    subscribe: () => pubSub.asyncIterator([constant.subscriptions.Trainee_Added]),
  },
  traineeDeleted: {
    subscribe: () => pubSub.asyncIterator([constant.subscriptions.Trainee_Deleted]),
  },
  traineeUpdated: {
    subscribe: () => pubSub.asyncIterator([constant.subscriptions.Trainee_Updated]),
  },
}
