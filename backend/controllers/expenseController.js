const db = require('../config/db');

exports.createExpense = (req, res) => {
  const { amount, details, transType } = req.body;
  const user_id = 1; // TEMP: Replace with session-based user ID once login system is finalized

  if (!amount || !details || !transType) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = `
    INSERT INTO expenses (user_id, details, amount, transType)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [user_id, details, amount, transType], (err, result) => {
    if (err) {
      console.error('Error inserting expense:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Expense added successfully' });
  });
};
