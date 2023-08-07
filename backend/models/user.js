// models/user.js
const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  name: String,
  program: String,
  phone: String,
  mode: String,
  state: String,
  gname: String,
  gphone: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
