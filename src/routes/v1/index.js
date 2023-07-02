import express from 'express';
import TweetController from '../../controllers/tweet-controller.js';

const router = express.Router();

router.post('/tweet',TweetController.createTweet);

export default router;