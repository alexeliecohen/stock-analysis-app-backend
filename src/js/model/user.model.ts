import { Schema, model, connect } from 'mongoose';

export interface UserModel {
  email:string;

  firstName:string;

  lastName:string;

  password:string;
}

const schema = new Schema<UserModel>({
  email: {type:String, required:true},
  firstName: {type:String, required:true},
  lastName: {type:String, required:true},
  password: {type:String, required:true}
})

export const UserModel = model<UserModel>('UserModel', schema);


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
