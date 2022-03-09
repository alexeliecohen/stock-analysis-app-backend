import faker from '@faker-js/faker';

export class User {

    email: string;

    firstName: string;

    lastName: string;

    password: string;

    location: {
        latitude: number;
        longitude: number;
    };

    constructor() {

        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.email = faker.helpers.userCard().email;

        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        };


    }

}

//Type definition file is an adapter between the js library
//and the typescript code we write because js implicitly doesnt
//have a type