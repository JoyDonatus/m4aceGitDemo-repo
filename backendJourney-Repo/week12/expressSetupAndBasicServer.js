//Express Setup & Basic Server - 
// Create a basic Express application with multiple routes

const express = require("express");

const app = express();
const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to my Express application!");
});

// About Route
app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

// Contact Route
app.get("/contact", (req, res) => {
  res.send("Contact us at contact@example.com");
});

// Services Route
app.get("/services", (req, res) => {
  res.send("We offer web development and API services.");
});

// User Route with Parameter
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.send(`User ID: ${userId}`);
});

// Handle Unknown Routes
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});