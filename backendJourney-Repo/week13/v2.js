const express = require('express');
const router = express.Router();

let postsV2 = [
    { 
        id: 1, 
        title: "Hello v2", 
        author: { firstName: "Joy", role: "Developer" } 
    }
];


router.get('/posts', (req, res) => {
    res.status(200).json({
        apiVersion: "v2 (Current)",
        data: postsV2
    });
});

module.exports = router;