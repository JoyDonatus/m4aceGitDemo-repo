const express = require('express');
const router = express.Router();


let posts = [
    { id: 1, title: "REST API Best Practices", content: "Use plural nouns for resource endpoints." }
];

// GET ALL POSTS
router.get('/', (req, res) => {
    res.status(200).json(posts);
});

// GET SINGLE POST BY ID
router.get('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: `Resource with ID ${postId} does not exist.` });
    }
    res.status(200).json(post);
});


router.post('/', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content fields are required." });
    }

    const newPost = {
        id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
        title,
        content
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});


router.put('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: `Cannot update. ID ${postId} not found.` });
    }

    const { title, content } = req.body;
    if (title) post.title = title;
    if (content) post.content = content;

    res.status(200).json({ message: "Resource updated successfully", post });
});


router.delete('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex === -1) {
        return res.status(404).json({ error: `Cannot delete. ID ${postId} not found.` });
    }

    posts.splice(postIndex, 1);
    res.status(200).json({ message: `Resource ID ${postId} deleted successfully.` });
});

module.exports = router;