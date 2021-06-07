import user from '../../service/user.js'

export default {
  getTrainee: (parent, args) => {
    const { id } = args;
    return user.getUser(id);
  },
  getAllTrainee: async (parent, args, context) => {
    try {
      const { options: { skip = 0, limit = 0 } } = args
    const { dataSources: { traineeAPI } } = context;
    const getalltrainee = await traineeAPI.getAllTrainee({skip, limit});
    return getalltrainee;
    } catch (err) {
      return {
        message: 'Server under maintaince',
        status: 503,
      }
    }

  }
}
