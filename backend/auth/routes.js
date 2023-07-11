// auth/routes.js
const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(201).json({ status: 2, message: 'Email already exists' });
    }

    // Email does not exist, proceed with user registration
    const user = new User({ name, email, password });

    // Save the user to the database
    await user.save();

    res.status(201).json({ status: 1, message: 'User registered successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while registering the user' });
  }
});



module.exports = router;
