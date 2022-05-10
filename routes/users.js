var express = require('express');
var router = express.Router();

const UserController = require('../controllers/users')



/* GET users listing. */
router.get('/', UserController.getUser);

module.exports = router;
