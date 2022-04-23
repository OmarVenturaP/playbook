const User = require('./../models/user');

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "sin bio");
    }
    static getInfo() {
        return [5, "OmarVentura", "Omar Ventura", "sin bio"];
    }
    static updateUsername(user, username) {
        user.username = username;
    }
}

module.exports = UserService;