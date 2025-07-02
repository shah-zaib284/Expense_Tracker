// backend/models/User.js
const db = require('../config/db');

const createUser = (email, username, password, callback) => {
  const sql = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)';
  db.query(sql, [email, username, password], callback);
};

const findUserByUsername = (username, callback) => {
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

module.exports = {
  createUser,
  findUserByUsername,
};
