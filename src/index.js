import express from 'express';
import {connect} from './config/database.js'
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';
import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);

app.use(passport.initialize());
passportAuth(passport);

app.listen(3000, async () => {
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
    // const tweets = await tweetRepository.getAll(10,0);
    // console.log(tweets[0].id);
    // const users = await userRepository.getAll();
    // console.log(users[0].id);
    // await likeService.toggleLike(tweets[0].id,'Tweet',users[0].id);
});

