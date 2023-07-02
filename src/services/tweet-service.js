import {TweetRepository, HashtagRepository} from '../repositories/index.js';

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        try {
            const content = data.content;
            console.log(content);
            let tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1).toLowerCase()); // this regex extracts hashtag from the content
            console.log(tags);
            const tweet = await this.tweetRepository.create(data);
            let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
            console.log(alreadyPresentTags);
            let titleOfPresentTags = alreadyPresentTags.map(tags => tags.title);
            // console.log(titleOfPresentTags);
            let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
            newTags = newTags.map(tag => {
                return {title: tag, tweets: [tweet.id]};
            });
            console.log(newTags);
            const response = await this.hashtagRepository.bulkCreate(newTags);
            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            });
            return tweet;
        } catch (error) {
            console.log('something went wrong in the service layer');
            throw error;
        }
        
    }
}

export default TweetService;