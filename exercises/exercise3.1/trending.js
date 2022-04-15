export default class trending{
    constructor(topic, numOfTweets){
        this.topic = topic
        this.numOfTweets = numOfTweets
    }
    getTrending(){
        return `The trending topic "${this.topic}" has ${this.numOfTweets} tweets`
    }
}