import Tweet from '../models/tweet.js';

class TweetRepository {
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const response = await Tweet.findByIdAndRemove(id);
            return response;
        }
        catch {
            console.log('something went wrong in the repository layer');
            console.log(error);
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'likes' });
            return tweet;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            console.log(error);
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({
                path: 'comments',
                populate: {
                    path: 'comments',
                    model: 'Comment',
                    populate:{
                        path: 'comments',
                        model:'Comment',
                        populate:{
                            path:'comments',
                            model:'Comment'
                        }
                    }
                }
            }).lean();
            return tweet;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            console.log(error);
        }
    }

    async update(tweetId, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId, data, { new: true });
            return tweet;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            console.log(error);
        }
    }

    async getAll(limit, offset) {
        try {
            const tweets = await Tweet.find().skip(offset).limit(limit);
            return tweets;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            console.log(error);
        }
    }
}

export default TweetRepository;