"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../model/User");
class UserService {
    async createUser(user) {
        const newUser = new User_1.UserModel({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        });
        await newUser.save();
    }
}
//# sourceMappingURL=UserService.js.map