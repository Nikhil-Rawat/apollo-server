import userInstance from '../../service/user.js';

export default {
  createTrainee: (parent, args, context) => {
    const { user } = args;
    return userInstance.createUsers(user);
  },
  deleteTrainee: (parent, args, context) => {
    const { id } = args;
    return userInstance.deleteUser(id);
  },
  updateTrainee: (parent, args, context) => {
    const { id, role } = args;
    return userInstance.updateUsers(id, role);
  }
}
