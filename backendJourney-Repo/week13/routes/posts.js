const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json({ message: "Fetching all blog posts" });
});


router.post('/', (req, res) => {
    res.json({ message: "Successfully created a new blog post" });
});

module.exports = router;