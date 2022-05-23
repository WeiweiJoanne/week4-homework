const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Content 未填寫']
  },
  image: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now,
    select: false
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref:"user",
    required: [true, '使用者 id 未填寫']
  },
  // name: {
  //   type: String,
  //   required: [true, '使用者 id 未填寫']
  // },
  likes: {
    type: Number,
    default: 0
  }
}, {
  versionKey: false
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
