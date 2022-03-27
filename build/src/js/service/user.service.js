"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../model/user.model");
let userList = [];
class UserService {
    createUser(user) {
        const newUser = new user_model_1.UserModel({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        });
        userList.push(newUser);
        return newUser;
    }
}
//# sourceMappingURL=user.service.js.map