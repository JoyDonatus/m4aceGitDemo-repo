const express = require('express');
const router = express.Router(); // Create an isolated router instance


let postsV1 = [
    { id: 1, title: "Hello v1", author: "Joy" }
];


router.get('/posts', (req, res) => {
    res.status(200).json({
        apiVersion: "v1 (Legacy)",
        data: postsV1
    });
});

module.exports = router; 