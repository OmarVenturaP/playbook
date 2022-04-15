export default class hashtag{
    constructor(hashtag, number_of_tweets){
        this.hashtag = hashtag
        this.number_of_tweets = number_of_tweets
    }
    getHashtag(){
        return `Elon Musk is owner of ${this.hashtag} and this company has received more than ${this.number_of_tweets} tweets.`
    }
}