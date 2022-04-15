const users = {
    user: "Elon Musk",
    username: "elonmusk",
    bio: "programmer, physicist and billionaire businessman",
    age: 51,    
    number_of_followers: 81600000,
    number_of_following: 113,
    getInfo: function() {
        return `${this.user} is ${this.age} years old and has ${this.number_of_followers} followers and ${this.number_of_following} following.`;
    }
}
const trending_topic = {
    topic: "ElonMusk",
    number_of_tweets: 421000,
    getTrending: function() {
        return `The tweet #${this.topic} has ${this.number_of_tweets} tweets.`;
    }
}
const hashtag = {
    hashtag: "#spacex",
    number_of_tweets: 396000,
    getHashtag: function() {
        return `Elon Musk is owner of ${this.hashtag} and this company has received more than ${this.number_of_tweets} tweets.`;
    }
}
console.log(users.getInfo());
console.log(trending_topic.getTrending());
console.log(hashtag.getHashtag());