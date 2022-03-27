import {UserModel} from '../model/user.model'
interface CreateUser {
    firstName:string,
    lastName:string,
    email:string,
    password: string
}

interface CRUD {
    createUser: (user:CreateUser) => UserModel;
}

let userList: Array<UserModel> = []


class UserService implements CRUD {
    createUser(user: CreateUser): UserModel {
        const newUser = new UserModel({
            firstName:user.firstName,
            lastName:user.lastName,
            email: user.email,
            password: user.password
        })
        userList.push(newUser)
        return newUser;
    }
}
