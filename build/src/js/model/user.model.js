"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true }
});
exports.UserModel = (0, mongoose_1.model)('UserModel', schema);
// export class UserModel {
//   email?: string;
//
//   firstName?: string;
//
//   lastName?: string;
//
//   password?: string;
//
//
//   constructor(params:UserModel = {} as UserModel) {
//     const {
//       email='',
//       firstName= '',
//       lastName= '',
//       password= '',
//     } = params;
//
//
//     this.email = email;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.password = password;
//   }
//
//   /*
//     constructor() {
//
//         this.firstName = faker.name.firstName();
//         this.lastName = faker.name.lastName();
//         this.email = faker.helpers.userCard().email;
//
//         this.location = {
//             latitude: parseFloat(faker.address.latitude()),
//             longitude: parseFloat(faker.address.longitude())
//         };
//
//
//     }*/
// }
// Type definition file is an adapter between the js library
// and the typescript code we write because js implicitly doesnt
// have a type
//# sourceMappingURL=user.model.js.map