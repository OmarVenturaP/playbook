import users from './users.js';
import trending from './trending.js';
import hashtag from './hashtags.js';

const user1 = new users("Elon Musk", "@elonmusk", 51, "programmer, physicist and billionaire businessman", 81600000, 113);
// console.log(user1)
console.log(user1.getUserNames())

const trending1 = new trending("Elon Musk", 421000)
// console.log(trending1)
console.log(trending1.getTrending())

const hashtag1 = new hashtag("spacex", 396000)
// console.log(hashtag1)
console.log(hashtag1.getHashtag())