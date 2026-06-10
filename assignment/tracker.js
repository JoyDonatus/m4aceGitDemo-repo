//Assignment 2: Expense Tracker:

    const express = require('express');
    const app = express();
    
    app.use(express.json());
    const PORT = 8000;

    let transactions = [
    { id: 1, amount: 1000, type: "income", category: "Salary", date: "2023-01-01", note: "Monthly salary" },
    { id: 2, amount: 500, type: "expense", category: "Food", date: "2023-01-02", note: "Data subscription" }
];

 // POST /transactions - log an entry (amount, type: income/expense, category, date, note)
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

// GET Home Route
app.get('/', (req, res) => {
    res.status(200).json({message:"Welcome to Joy's Expense Tracker"});
});

// GET /transactions - list all transactions
app.get('/transactions', (req, res) => {
    res.status(200).json(transactions);;
});

// GET /transactions/:id
app.get('/transactions/:id', (req, res) => {
    const transactionId = parseInt(req.params.id);
    const transactionWithId = transactions.find(transaction => transaction.id === transactionId);

    if (!transactionWithId) {
        return res.status(404).json({ message: `${transactionId} transaction not found` });
    }
    else{
        return res.status(200).json(transactionWithId);
    }
    
});

// PUT /transactions/:id

app.put('/transactions/:id', (request, response) => {
    const transactionId = parseInt(request.params.id);
    const transaction = transactions.find(transaction => transaction.id === transactionId);

    if (!transaction) {
        return response.status(404).json({message: `${transactionId} transaction not found`});
    }

    else {
        transaction.amount = request.body.amount;
        transaction.type = request.body.type;
        transaction.category = request.body.category;
        transaction.date = request.body.date;
        transaction.note = request.body.note;

       return response.status(200).json({ message: "Transaction updated successfully", transaction: transaction});
    }
});

app.delete('/transactions/:id', (request, response) => {
    const transactionId = parseInt(request.params.id);
    const transactionToDelete = transactions.findIndex(transactionToDelete => transactionToDelete.id === transactionId);

    if (transactionToDelete < 0) {
        return response.status(404).json({ message: `${transactionId} transaction not found` });
    }

    else{

        transactions.splice(transactionToDelete, 1);
        return response.status(200).json({ message: "Transaction deleted successfully", transactionId: transactionId});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});