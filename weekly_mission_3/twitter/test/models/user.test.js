const User = require('../../app/models/user');

describe('Unit Test for User  class', () => {
    test('Create an user object', () => {
        const user = new User(5, "OmarVentura", "Omar Ventura", "full-Stack Jr in progress");
        expect(user.id).toBe(5);
        expect(user.username).toBe("OmarVentura");
        expect(user.name).toBe("Omar Ventura");
        expect(user.bio).toBe("full-Stack Jr in progress");
        expect(user.dateCreate).not.toBeUndefined();
        expect(user.lastUpdate).not.toBeUndefined();
    });
    test('Add getters', () => {
        const user = new User(5, "OmarVentura", "Omar Ventura", "full-Stack Jr in progress");
        expect(user.getUsername).toBe("OmarVentura");
        expect(user.getBio).toBe("full-Stack Jr in progress");
        expect(user.getDateCreate).not.toBeUndefined();
        expect(user.getLastUpdate).not.toBeUndefined();
    })
    test('Add Setters', () => {
        const user = new User(5, "OmarVentura", "Omar Ventura", "full-Stack Jr in progress");
        user.setUsername = "Ventura";
        expect(user.username).toBe("Ventura");

        user.setBio = "new bio";
        expect(user.bio).toBe("new bio");
    })
})