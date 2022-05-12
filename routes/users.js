var express = require('express');
var router = express.Router();

const UserController = require('../controllers/users')
const PostsController = require('../controllers/posts')



/* GET users listing. */
router.get('/', UserController.getUser);

// router.get('/posts')

module.exports = router;
