import {UserModel} from '../model/User'
interface CreateUser {
    firstName:string,
    lastName:string,
    email:string,
    password: string
}

interface CRUD {
    createUser: (user:CreateUser) => Promise<void>;
}

class UserService implements CRUD {
    async createUser(user: CreateUser): Promise<void> {
        const newUser = new UserModel({
            firstName:user.firstName,
            lastName:user.lastName,
            email: user.email,
            password: user.password
        })
        await newUser.save();
    }



}
