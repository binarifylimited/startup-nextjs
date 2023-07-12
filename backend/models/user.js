// models/user.js
const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  category: String,
  hearus: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
