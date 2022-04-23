const UserService = require('./../services/userService');

class UserView {
    static createUser(payload) {
        const keys =['username','id','name']
        if (payload === null){
            return {error:"payload no existe"}
         }
        else if(Object.keys(payload).some(key => payload[key] === null)){
            return {error:"necesitan tener un valor válido"}
        }
        if(!keys.every(key=>Object.keys(payload).includes(key))){
            return {error:"necesitan tener un valor válido"}
        }
        const newUser = UserService.create(payload.id,payload.username,payload.name)
        return {name:newUser.name , username:newUser.username , id:newUser.id}
    }
}
module.exports = UserView;