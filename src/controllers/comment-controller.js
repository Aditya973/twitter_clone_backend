import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req,res) =>{
    try {
        const response = await commentService.create(req.query.modelId, req.query.modelType, req.user.id,req.body.content);
        return res.status(200).json({
            data:response,
            success:true,
            message:'successfully created a new Comment',
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