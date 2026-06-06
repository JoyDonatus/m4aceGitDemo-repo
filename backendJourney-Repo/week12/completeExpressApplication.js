
// implementing all CRUD operations with proper status codes 
// and error handling

//Build a simple blog API with in-memory data storage, 

const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let blogs = [
  {
    id: 1,
    title: "My First Blog",
    content: "This is my first blog post."
  }
];

app.get("/blogs", (req, res) => {
  res.status(200).json(blogs);
});

app.get("/blogs/:id", (req, res) => {
  const id = Number(req.params.id);

  const blog = blogs.find(blog => blog.id === id);

  if (!blog) {
    return res.status(404).json({
      message: "Blog not found"
    });
  }

  res.status(200).json(blog);
});

app.post("/blogs", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "Title and content are required"
    });
  }

  const newBlog = {
    id: blogs.length + 1,
    title,
    content
  };

  blogs.push(newBlog);

  res.status(201).json({
    message: "Blog created successfully",
    blog: newBlog
  });
});

app.put("/blogs/:id", (req, res) => {
  const id = Number(req.params.id);

  const blog = blogs.find(blog => blog.id === id);

  if (!blog) {
    return res.status(404).json({
      message: "Blog not found"
    });
  }

  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "Title and content are required"
    });
  }

  blog.title = title;
  blog.content = content;

  res.status(200).json({
    message: "Blog updated successfully",
    blog
  });
});

app.delete("/blogs/:id", (req, res) => {
  const id = Number(req.params.id);

  const blogIndex = blogs.findIndex(blog => blog.id === id);

  if (blogIndex === -1) {
    return res.status(404).json({
      message: "Blog not found"
    });
  }

  blogs.splice(blogIndex, 1);

  res.status(200).json({
    message: "Blog deleted successfully"
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});