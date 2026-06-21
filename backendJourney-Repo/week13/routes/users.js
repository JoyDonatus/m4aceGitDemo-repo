//Organize routes into separate router modules for users, posts, and comments. expressRouterImplementation.js


const express = require('express');
const router = express.Router(); // Create an isolated router instance

// Matches: GET /api/users
router.get('/', (req, res) => {
    res.json({ message: "Fetching all users list" });
});

// Matches: GET /api/users/:id
router.get('/:id', (req, res) => {
    res.json({ message: `Fetching user profile for ID: ${req.params.id}` });
});

module.exports = router; // Export the router machine