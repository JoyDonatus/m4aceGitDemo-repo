//Implement API versioning using URL paths (v1, v2) with different route handlers

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// 1. Import our custom version routers (we will write these next)
const v1Router = require('./routes/v1');
const v2Router = require('./routes/v2');

// 2. Mount the routers to distinct URL paths
app.use('/api/v1', v1Router); // All requests starting with /api/v1 go here
app.use('/api/v2', v2Router); // All requests starting with /api/v2 go here

app.listen(PORT, () => {
    console.log(`Versioned API running on http://localhost:${PORT}`);
});