import constant from '../../lib/constant.js';
import userInstance from '../../service/user.js';
import pubsub from '../pubsub.js';

export default {
  createTrainee: (parent, args, context) => {
    const { user } = args;
    const addedUser =  userInstance.createUsers(user);
    pubsub.publish(constant.subscriptions.Trainee_Added, { traineeAdded: addedUser });
    return addedUser;
  },
  deleteTrainee: (parent, args, context) => {
    const { id } = args;
    const deletedUser = userInstance.deleteUser(id);
    pubsub.publish(constant.subscriptions.Trainee_Deleted, { traineeDeleted: deletedUser });
    return deletedUser;
  },
  updateTrainee: (parent, args, context) => {
    const { id, role } = args;
    const updatedUser = userInstance.updateUsers(id, role);
    pubsub.publish(constant.subscriptions.Trainee_Added, { traineeUpdated: updatedUser });
    return updatedUser;
  }
}
