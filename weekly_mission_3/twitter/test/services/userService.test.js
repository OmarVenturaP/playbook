const UserServices = require('../../app/services/userService');

describe('Test for user services', () => {
    test('1) Create a new user using the user service', () => {
        const user = UserServices.create(5, "OmarVentura", "Omar Ventura");
        expect(user.id).toBe(5);
        expect(user.username).toBe("OmarVentura");
        expect(user.name).toBe("Omar Ventura");
        expect(user.bio).not.toBeUndefined();
    })
})