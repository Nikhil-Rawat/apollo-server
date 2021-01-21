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
    const { user } = args;
    const { dataSources: { traineeAPI } } = context;
    const addedUser = await traineeAPI.createTrainee(user);
    pubsub.publish(constant.subscriptions.Trainee_Added, { traineeAdded: addedUser });
    return addedUser.data;
  },
  // deleteTrainee: (parent, args, context) => {
  //   const { id } = args;
  //   const deletedUser = userInstance.deleteUser(id);
  //   pubsub.publish(constant.subscriptions.Trainee_Deleted, { traineeDeleted: deletedUser });
  //   return deletedUser;
  // },
  deleteTrainee: async (parent, args, context) => {
    const { id } = args;
    const { dataSources: { userAPI } } = context;
    const deletedUser = await userAPI.deleteTrainee(id);
    pubsub.publish(constant.subscriptions.Trainee_Deleted, { traineeDeleted: deletedUser });
    return deletedUser.message;
  },
  // updateTrainee: (parent, args, context) => {
  //   const { id, role } = args;
  //   const updatedUser = userInstance.updateUsers(id, role);
  //   pubsub.publish(constant.subscriptions.Trainee_Added, { traineeUpdated: updatedUser });
  //   return updatedUser;
  // }
  updateTrainee: async (parent, args, context) => {
    const { updateData } = args;
    const { dataSources: { userAPI } } = context;
    const updatedUser = await userAPI.updateTrainee(updateData);
    pubsub.publish(constant.subscriptions.Trainee_Added, { traineeUpdated: updatedUser });
    return updatedUser.message;
  }
}
