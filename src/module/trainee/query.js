import user from '../../service/user.js'

export default {
  getTrainee: (parent, args) => {
    const { id } = args;
    return user.getUser(id);
  },
  getAllTrainee: async (parent, args, context) => {
    const { dataSources: { traineeAPI } } = context;
    const getalltrainee = await traineeAPI.getAllTrainee();
    console.log(getalltrainee);
    return getalltrainee.data[0].records;
  }
}
