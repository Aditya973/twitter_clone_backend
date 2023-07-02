import express from 'express';
import {connect} from './config/database.js'
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);

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
    
});

