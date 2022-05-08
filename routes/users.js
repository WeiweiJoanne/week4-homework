var express = require('express');
var router = express.Router();

const UserModel = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const getUser = UserModel.find({})
  
  res.end()
});

module.exports = router;
