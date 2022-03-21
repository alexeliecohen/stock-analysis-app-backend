import { Schema, model, connect } from 'mongoose';

export interface User {
  email:string;

  firstName:string;

  lastName:string;

  password:string;
}

const schema = new Schema<User>({
  email: {type:String, required:true},
  firstName: {type:String, required:true},
  lastName: {type:String, required:true},
  password: {type:String, required:true}
})

export const UserModel = model<User>('User', schema);


// export class User {
//   email?: string;
//
//   firstName?: string;
//
//   lastName?: string;
//
//   password?: string;
//
//
//   constructor(params:User = {} as User) {
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
