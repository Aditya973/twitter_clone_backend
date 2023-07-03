import LikeService from '../services/like-service.js';

const likeService = new LikeService();

export const toggleLike = async (req,res) =>{
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(200).json({
            data:response,
            success:true,
            message:'successfully toggled like',
            err:{}
        });
    } catch (error) {
        res.status(500).json({
            data:{},
            success:false,
            message:'something in went wrong',
            err: error
        });
    }
}