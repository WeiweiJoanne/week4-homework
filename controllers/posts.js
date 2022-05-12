const mongoose = require('mongoose')

const PostModel = require('../models/posts')

const PostsController = {
  async getPosts(req, res) {
    const getPosts = await PostModel.find({})
    res.send({
      "status": "success",
      getPosts
    })
    res.end()
  }
}

module.exports = PostsController
