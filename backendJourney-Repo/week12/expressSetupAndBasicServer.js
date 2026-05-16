//Express Setup & Basic Server - Create a basic Express application with multiple routes

const express = require("express");
const app = express();

app.listen(3000, () => {
   console.log("Server is running on port 3000");
});