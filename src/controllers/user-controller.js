import UserService from "../services/user-service.js";

const userService = new UserService();

export const signUp = async (req,res) => {
    try {
        const user = await userService.signUp(req.body);
        return res.status(201).json({
            data:user,
            success:true,
            message: 'successfully created the user',
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message: 'failed to create user',
            err:error
        })
    }
}

export const logIn = async (req,res) => {
    try {
        const response = await userService.signIn(req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message: 'succefully logged in',
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message: 'failed to login',
            err:error
        })
    }
}