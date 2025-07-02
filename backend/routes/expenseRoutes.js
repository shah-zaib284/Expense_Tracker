const express = require('express');
const router = express.Router();
const { createExpense } = require('../controllers/expenseController');

// POST /api/expenses
router.post('/', createExpense);

module.exports = router;
