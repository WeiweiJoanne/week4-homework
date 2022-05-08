const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/week4')
  .then(()=>console.log('資料庫連線成功'))
  .catch(err=> console.log(err))
