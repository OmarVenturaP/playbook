const User = require('./../models/user');

class UserView {
    static createUser(payload) {
        const keys =['username','id','name']
        if (payload === null){
            return {error:"payload no existe"}
         }
}
}
module.exports = UserView;