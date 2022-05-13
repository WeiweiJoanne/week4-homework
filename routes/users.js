var express = require('express');
var router = express.Router();

const UserController = require('../controllers/users')
const PostsController = require('../controllers/posts')

/* GET users listing. */
router.get('/', UserController.getUser);

router.get('/posts', PostsController.getAllPosts);
router.post('/posts', PostsController.postPosts);
router.delete('/posts', PostsController.deleteAllPosts);
router.delete('/posts/:id', PostsController.deleteOnePosts);
router.patch('/posts/:id', PostsController.updatePosts);

module.exports = router;
