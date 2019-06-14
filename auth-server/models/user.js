const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true},
  password: String
})

const UserSchemaModel = mongoose.model('user', userSchema)

module.exports = UserSchemaModel

