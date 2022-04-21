const UserService = require('../../app/services/userService');

describe('Test for user services', () => {
    test('1. Create a new user using the user service', () => {
        const user = UserService.create(5, "OmarVentura", "Omar Ventura");
        expect(user.id).toBe(5);
        expect(user.username).toBe("OmarVentura");
        expect(user.name).toBe("Omar Ventura");
        expect(user.bio).not.toBeUndefined();
    })
    test('2. Get all user data in a list', () => {
        const user = UserService.create(5, "OmarVentura", "Omar Ventura");
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(5);
        expect(userInfoInList[1]).toBe("OmarVentura");
        expect(userInfoInList[2]).toBe("Omar Ventura");
        expect(userInfoInList[3]).toBe("sin bio");
    })
})