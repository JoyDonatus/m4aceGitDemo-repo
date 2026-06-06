//Design a complete REST API structure for a resource with proper endpoint naming and HTTP methods

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const postsRouter = require('./restfulAPIStructure/posts');

// Mount the resource to a unified plural base endpoint path
app.use('/api/posts', postsRouter);

app.listen(PORT, () => {
    console.log(`REST API Server listening on http://localhost:${PORT}`);
});