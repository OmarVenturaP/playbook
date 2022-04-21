const UserService = require('../../app/services/userService');

describe('Test for user services', () => {
    test('1) Create a new user using the user service', () => {
        const user = UserService.create(5, "OmarVentura", "Omar Ventura");
        expect(user.id).toBe(5);
        expect(user.username).toBe("OmarVentura");
        expect(user.name).toBe("Omar Ventura");
        expect(user.bio).not.toBeUndefined();
    })
    test('2. Get all use data in a list', () => {
        const user = UserService.getInfo(user)
        expect(userInfooInList[0]).toBe(5);
        expect(userInfooInList[1]).toBe("OmarVentura");
        expect(userInfooInList[2]).toBe("Omar Ventura");
        expect(userInfooInList[3]).toBe("sin bio");
    })
})