export default class users{
    constructor(name, userName, age, bio, followers, following){
        this.name = name
        this.userName = userName
        this.age = age
        this.bio = bio
        this.followers = followers
        this.following = following
    }
    getUserNames(){
        return `${this.name} is ${this.userName} on twitter, has ${this.followers} followers and ${this.following} following.`
    }
}