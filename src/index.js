const express = require('express');
const connect = require ('./config/database');
const Comment = require('./models/comment');
const TweetRepository = require('./repositories/tweet-repository');
const app = express();
const tweetRepository = new TweetRepository();

app.listen(3000,async()=>{
    console.log('server listening to port 3000');
    await connect();
    console.log('mongodb connected');
    // const tweet = await Tweet.create({
    //     content : "thrid tweet"
    // });
    // const tweet = await tweetRepository.create({
    //     content : 'tweet with comment model 2'
    // });
    // const tweet = await tweetRepository.getWithComments('649c099c93646a20f5e3f480');
    // const comment = await Comment.create({content:"second comment"});
    // tweet.comments.push(comment);
    // await tweet.save();
    const tweets = await tweetRepository.getAll(3,0);
    console.log(tweets[0].contentWithEmail);
});

