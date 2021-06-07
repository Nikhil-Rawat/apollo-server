import constant from '../../lib/constant.js';

export default {
  loginUser: async (parent, args, context) => {
    try {
      const { payload: { email, password } } = args;
      const { dataSources: { userAPI } } = context;
      const response = await userAPI.loginUser({ email, password });
      return response;
    }
    catch (error) {
      return {
        message: constant.SERVER_CLOSED,
        status: 503
      }
    }
  }
}
