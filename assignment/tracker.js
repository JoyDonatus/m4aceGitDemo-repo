//Assignment 2: Expense Tracker:

    // POST /transactions - log an entry (amount, type: income/expense, category, date, note)
    // GET /transactions - list all transactions
    // GET /transactions/:id
    // PUT /transactions/:id
    // DELETE /transactions/:id

    const express = require('express');
    const app = express();
    
    app.use(express.json());

    let transactions = [
    { id: 1, amount: 1000, type: "income", category: "Salary", date: "2023-01-01", note: "Monthly salary" },
    { id: 2, amount: 500, type: "expense", category: "Food", date: "2023-01-02", note: "Data subscription" }
];

app.post('/transactions', (req, res) => {
    const { amount, type, category, date, note } = req.body;
    const newId = transactions.length + 1;

    const newTransaction = {
        id: newId,
        amount: amount,
        type: type,
        category: category,
        date: date,
        note: note
    };

    transactions.push(newTransaction);

    res.status(200).json({
        message: "Transaction entered successfully",
        transaction: newTransaction
    });
});

app.get('/', (req, res) => {
    res.status(200).json({message:"Welcome to Joy's Expense Tracker"});
});

app.get('/transactions', (req, res) => {
    res.status(200).json(transactions);;
});

app.get('/transactions/:id', (req, res) => {
    const transactionId = parseInt(req.params.id);
    const transaction = transactions.find(u => u.id === transactionId);
    res.status(200).json(transactions);;
});