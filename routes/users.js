var express = require('express');
var router = express.Router();

const UserController = require('../controllers/users')
const PostsController = require('../controllers/posts')

/* GET users listing. */
router.get('/', UserController.getUser);

router.get('/posts', PostsController.getPosts);
router.post('/posts', PostsController.postPosts);
router.delete('/posts', PostsController.deleteAllPosts);
router.delete('/posts/:_id', PostsController.deleteOnePosts);
router.patch('/posts/:_id', PostsController.updatePosts);

module.exports = router;
