import express from 'express';
import TweetController from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { signUp } from '../../controllers/user-controller.js';
import { logIn } from '../../controllers/user-controller.js';
import {authenticate} from '../../middlewares/authenticate.js';

const router = express.Router();

router.post('/tweet',authenticate,TweetController.createTweet);
router.post('/likes/toggle',toggleLike); 
router.post('/comment',authenticate,createComment);
router.get('/tweet/:id',TweetController.getTweet);
router.post('/signup',signUp);
router.post('/login',logIn);
export default router;