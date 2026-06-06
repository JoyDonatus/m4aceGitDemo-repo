//Complete Express Application - Build a simple blog API with in-memory data storage, implementing all CRUD operations with proper status codes and error handling

const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


let posts = [
    { id: 1, title: "My First Blog", content: "Hello World! Welcome to my blog." },
    { id: 2, title: "Learning Express", content: "Express makes building APIs incredibly easy." }
];

//GET
app.get('/api/posts', (req, res) => {
    
    res.status(200).json(posts);
});

//GET by ID
app.get('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: `Post with ID ${postId} not found.` });
    }

    res.status(200).json(post);
});

//POST
app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required fields." });
    }

    // Generate a new ID based on the last item, or start at 1
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
    
    const newPost = { id: newId, title, content };
    posts.push(newPost);

    res.status(201).json(newPost);
});

//UPDATE (PUT)
app.put('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: `Post with ID ${postId} not found.` });
    }

    const { title, content } = req.body;

    
    if (title) post.title = title;
    if (content) post.content = content;

    res.status(200).json({ message: "Post updated successfully", post });
});


app.delete('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex === -1) {
        return res.status(404).json({ error: `Post with ID ${postId} not found.` });
    }

    posts.splice(postIndex, 1);

    res.status(200).json({ message: `Post ${postId} has been deleted successfully.` });
});

app.listen(PORT, () => {
    console.log(`Blog API running live at http://localhost:${PORT}`);
});