import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

const createTweet = async (req,res) =>{
    try {
        const tweet = await tweetService.create(req.body);
        return res.status(201).json({
            data:tweet,
            sucess:true,
            message:'tweet created',
            err:{}
        })
    } catch (error) {
        res.status(500).json({
            data:{},
            success:false,
            message: 'something went wrong on creating the tweet',
            err:error
        })
    }
}

export default {
    createTweet
}