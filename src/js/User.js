'use strict';
exports.__esModule = true;
exports.User = void 0;
const faker_1 = require('@faker-js/faker');
const User = /** @class */ (function() {
  function User() {
    this.firstName = faker_1['default'].name.firstName();
    this.lastName = faker_1['default'].name.lastName();
    this.email = faker_1['default'].helpers.userCard().email;
    this.location = {
      latitude: parseFloat(faker_1['default'].address.latitude()),
      longitude: parseFloat(faker_1['default'].address.longitude()),
    };
  }
  return User;
}());
exports.User = User;
// Type definition file is an adapter between the js library
// and the typescript code we write because js implicitly doesnt
// have a type
