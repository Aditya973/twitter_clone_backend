import express from 'express';
import TweetController from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';

const router = express.Router();

router.post('/tweet',TweetController.createTweet);
router.post('/likes/toggle',toggleLike); 

export default router;