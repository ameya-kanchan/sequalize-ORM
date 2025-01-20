import userService from '../services/userService.js';
import responseUtil from '../utils/response.js';

export const getAllUsers = async (req, res, next) => {

    try {
      const users = await userService.getAllUsers();
      responseUtil.success(res, users);
    } catch (error) {
      next(error);
    }
  };
  
  export const createUser = async (req, res, next) => {

    try {
      const user = await userService.createUser(req.body);
      responseUtil.success(res, user, 201);
    } catch (error) {
      next(error);
    }
  };
