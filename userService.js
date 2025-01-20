import User from '../models/user.model.js';
import UserDTO from '../dto/user.dto.js';

class UserService {

    async createUser(userData) {

        const user = await User.create(userData);
        return new UserDTO(user);
    }

    async getAllUsers() {
        const users = await User.findAll();
        return users.map((user) => new UserDTO(user));
      }
}

export default new UserService();
