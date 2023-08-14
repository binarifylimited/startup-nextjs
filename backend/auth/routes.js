// auth/routes.js
const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/register', async (req, res) => {
  const { name, program, phone, mode, state, gname, gphone } = req.body;

  try {
    
    const user = new User({ name, program, phone, mode, state, gname, gphone});

    // Save the user to the database
    await user.save();

    res.status(201).json({ status: 1, message: 'User registered successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while registering the user' });
  }
});

router.post('/', (req, res) => {
  res.status(201).json({ status: 1, message: 'Welcome to Register Backend' });
});


router.get('/users', async (req, res) => {
  try {
    const users = await User.find({ "mode": { $regex: "mode", $options: "i" } })
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
});

router.post('/', (req, res) => {
  res.status(201).json({ status: 1, message: 'Welcome to Register Backend' });
});


module.exports = router;
