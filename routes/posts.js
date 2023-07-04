const express = require('express')
const router = express.Router();

const postsControllers = require('../controllers/posts')

router.get('/getPosts', postsControllers.getPosts);
router.post('/postNewPost', postsControllers.postNewPost);
router.get('/getPostDetail/:id', postsControllers.getPostDetail);
router.patch('/updatePost/:id', postsControllers.updatePost);
router.delete('/deletePost/:id', postsControllers.deletePost);

module.exports = router