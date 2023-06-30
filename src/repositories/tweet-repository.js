const Tweet = require('../models/tweet');

class TweetRepository{
    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            console.log(error);
        }
    }

    async destroy(id){
        try{
            const response = await Tweet.findByIdAndRemove(id);
            return response;
        }
        catch{
            console.log('something went wrong in the repository layer');
            console.log(error);
        }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            console.log(error);
        }
    }

    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            console.log(error);
        }
    }

    async update(tweetId,data){
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId,data,{new:true});
            return tweet;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            console.log(error);
        }
    }

    async getAll(limit,offset){
        try {
            const tweets = await Tweet.find().skip(offset).limit(limit).populate({path:'comments'});
            return tweets;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            console.log(error);
        }
    }
}

module.exports = TweetRepository;