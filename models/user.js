const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    require:[true,"請填寫姓名"]
  },
  email: {
    type: String,
    require: [true, "請填寫Email"]
  },
  photo: {
    type: String
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
