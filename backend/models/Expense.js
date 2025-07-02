// backend/models/Expense.js
const db = require('../config/db');

const getAllExpenses = (callback) => {
  const sql = 'SELECT * FROM transactions';
  db.query(sql, callback);
};

const addExpense = (amount, details, transType, callback) => {
  const sql = 'INSERT INTO transactions (amount, details, transType) VALUES (?, ?, ?)';
  db.query(sql, [amount, details, transType], callback);
};

const deleteExpense = (id, callback) => {
  const sql = 'DELETE FROM transactions WHERE id = ?';
  db.query(sql, [id], callback);
};

module.exports = {
  getAllExpenses,
  addExpense,
  deleteExpense,
};
