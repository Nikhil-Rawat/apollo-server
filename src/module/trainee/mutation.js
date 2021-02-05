import constant from '../../lib/constant.js';
import userInstance from '../../service/user.js';
import pubsub from '../pubsub.js';

export default {
  // createTrainee: (parent, args, context) => {
  //   const { user } = args;
  //   const addedUser =  userInstance.createUsers(user);
  //   pubsub.publish(constant.subscriptions.Trainee_Added, { traineeAdded: addedUser });
  //   return addedUser;
  // },
  createTrainee: async (parent, args, context) => {
    try {
      const { user } = args;
      const { dataSources: { traineeAPI } } = context;
      const addedUser = await traineeAPI.createTrainee(user);
      pubsub.publish(constant.subscriptions.Trainee_Added, { traineeAdded: addedUser });
      return addedUser;
    } catch(error) {
        return {
          message: constant.SERVER_CLOSED,
          status: 503
        }
      }
  },
  // deleteTrainee: (parent, args, context) => {
  //   const { id } = args;
  //   const deletedUser = userInstance.deleteUser(id);
  //   pubsub.publish(constant.subscriptions.Trainee_Deleted, { traineeDeleted: deletedUser });
  //   return deletedUser;
  // },
  deleteTrainee: async (parent, args, context) => {
    try {
      const { id } = args;
      const { dataSources: { traineeAPI } } = context;
      const deletedUser = await traineeAPI.deleteTrainee(id);
      pubsub.publish(constant.subscriptions.Trainee_Deleted, { traineeDeleted: deletedUser });
      console.log(deletedUser);
      return deletedUser;
    } catch(error) {
      return {
        status: 503,
        message: constant.SERVER_CLOSED,
      }
    }
  },
  // updateTrainee: (parent, args, context) => {
  //   const { id, role } = args;
  //   const updatedUser = userInstance.updateUsers(id, role);
  //   pubsub.publish(constant.subscriptions.Trainee_Added, { traineeUpdated: updatedUser });
  //   return updatedUser;
  // }
  updateTrainee: async (parent, args, context) => {
    try {
      console.log('inside update');
      const { updatedPayload } = args;
      const { dataSources: { traineeAPI } } = context;
      const updatedUser = await traineeAPI.updateTrainee(updatedPayload);
      pubsub.publish(constant.subscriptions.Trainee_Added, { traineeUpdated: updatedUser });
      return updatedUser;
    } catch(error) {
      return {
        status: 503,
        message: constant.SERVER_CLOSED
      }
    }
  }
}
