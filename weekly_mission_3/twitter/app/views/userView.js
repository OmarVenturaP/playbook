const User = require('./../models/user');

class UserView {
    static createUser(payload) {
        const keys =['username','id','name']
        if (payload === null){
            return {error:"payload no existe"}
         }
        else if(Object.keys(payload).some(key => payload[key] === null)){
            return {error:"necesitan tener un valor válido"}
        }
}
}
module.exports = UserView;