const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userEmail:{
        type:String
    },
    comments:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]
},{timestamps:true})

tweetSchema.virtual('contentWithEmail').get(function (){
        return `${this.content} \ncreated by: ${this.userEmail}`;
    });

const Tweet = mongoose.model('Tweet',tweetSchema);

module.exports = Tweet;