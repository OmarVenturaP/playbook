const User = require('../../app/models/user');

describe('Unit Test for User  class', () => {
    test('Create an user object', () => {
        const user = new User(5, "OmarVentura", "Omar Ventura", "full-Stack Jr in progress", "18/04/22", "19/04/22");
        expect(user.id).toBe(5);
        expect(user.username).toBe("OmarVentura");
        expect(user.name).toBe("Omar Ventura");
        expect(user.bio).toBe("full-Stack Jr in progress");
        expect(user.dateCreate).toBe("18/04/22");
        expect(user.lastUpdate).toBe("19/04/22");
    });
})