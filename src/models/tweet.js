import mongoose from 'mongoose';
const tweetSchema = mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,'tweet cannot be more than 250 characters']
    },
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'  
        }
    ]
},{timestamps:true})

// tweetSchema.virtual('contentWithEmail').get(function (){
//         return `${this.content} \ncreated by: ${this.userEmail}`;
//     });

const Tweet = mongoose.model('Tweet',tweetSchema);

export default Tweet;