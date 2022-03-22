import {User, UserModel} from '../model/User'
interface CreateUser {
    firstName:string,
    lastName:string,
    email:string,
    password: string
}

interface CRUD {
    createUser: (user:CreateUser) => Promise<User>;
}

let userList: Array<User> = []


class UserService implements CRUD {
    async createUser(user: CreateUser): Promise<User> {
        const newUser = new UserModel({
            firstName:user.firstName,
            lastName:user.lastName,
            email: user.email,
            password: user.password
        })
        userList.push(newUser)
        return Promise.resolve(newUser);
    }




}
