const UserView = require('./../../app/views/userView');

describe('Test for UserView', () => { {

}
    test('1.) Return an error object when try to create a new user with an null payload', () => {
        const payload = null
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/payload no existe/);
    })
    test('2.) Return an error object when try to create a new user with a payload with invalid propierties', () => {
        const payload = {username: null, name: 'Omar', id: 'id'}
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    })
    test('3.) Return an error object when try to create a new user with missing propierties', () => {
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    })
})