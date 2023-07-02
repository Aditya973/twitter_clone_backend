import Hashtag from '../models/hashtag.js';

class HashtagRepository{
    async create(data){
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw error;
        }
    }

    async bulkCreate(data){
        try{
            const tags = await Hashtag.insertMany(data);
            return tags; 
        }
        catch(error){
            console.log(error);
            console.log('something went wrong in the repository layer');
            throw error;
        }
    }

    async get(id){
        try {
            
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw error;
        }
    }

    async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title:titleList
            });
            return tags;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw error;
        }
    }

    async destroy(id){
        try {
            
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw error;
        }
    }
    async update(){
        try {
            
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw error;
        }
    }
}

export default HashtagRepository;