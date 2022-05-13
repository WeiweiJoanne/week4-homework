const mongoose = require('mongoose')

const handleSuccess = require('../services/handleSuccess')
const handleError = require('../services/handleError')

const PostModel = require('../models/posts')
const UserModel = require('../models/user')

const PostsController = {
  async getAllPosts(req, res) {
    const getAllPosts = await PostModel.find({}).populate({
      path:"user",
      select: "name photo"
    })
    handleSuccess(res, getAllPosts)
  },
  async postPosts(req, res) {
    const body = req.body
    const { content, image, user } = body
    if (content.trim() !== '') {
      try {
        const postPosts = await PostModel.create({
          content, image, user
        })
        handleSuccess(res, postPosts)
      } catch (err) {
        handleError(res, err)
      }
    } else {
      handleError(res)
    }
  },
  async updatePosts(req, res) {
    const id = req.params
    const body = req.body
    const { content, image, user } = body

    if (content.trim() !== '') {
      try {
        const updatePosts = await PostModel.findByIdAndUpdate(
          id,
          { content, image, user },
          { returnDocument: 'after', runValidators: true }
        )
        updatePosts !== null ? handleSuccess(res, updatePosts) : handleError(res)
      } catch (err) {
        handleError(res, err)
      }
    } else {
      handleError(res)
    }
  },
  async deleteOnePosts(req, res) {
    const id = req.params
    try {
      const deleteOnePosts = await PostModel.deleteOne(id)
      handleSuccess(res, deleteOnePosts)
    } catch (err) {
      handleError(res, err)
    }
  },
  async deleteAllPosts(req, res) {
    try {
      const deleteAllPosts = await PostModel.deleteMany({})
      handleSuccess(res, deleteAllPosts)
    } catch (err) {
      handleError(res, err)
    }
  },
}

module.exports = PostsController
