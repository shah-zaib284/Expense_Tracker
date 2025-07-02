// backend/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, findUserByUsername } = require('../models/User');

const register = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    createUser(email, username, hashedPassword, (err) => {
      if (err) return res.status(500).json({ error: 'Registration failed' });
      res.status(200).json({ message: 'User registered successfully' });
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const login = (req, res) => {
  const { username, password } = req.body;
  findUserByUsername(username, async (err, user) => {
    if (err || !user) return res.status(401).json({ error: 'Invalid credentials' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ token });
  });
};

module.exports = {
  register,
  login,
};
