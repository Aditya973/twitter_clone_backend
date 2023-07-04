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
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message: 'something went wrong on creating the tweet',
            err:error
        });
    }
}

const getTweet = async (req,res) => {
    try {
        const tweet = await tweetService.getWithComments(req.params.id);
        return res.status(200).json({
            data:tweet,
            success: true,
            message: 'successfully fetched tweets',
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message: 'something went wrong on creating the tweet',
            err:error
        });
    }
}

export default  {
    createTweet,
    getTweet
}