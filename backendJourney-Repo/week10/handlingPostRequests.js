//Handling POST Requests - 
// Parse JSON request bodies, 
// validate incoming data, 
// and send appropriate responses

const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

app.post("/user", (req, res) => {

   const { name, age } = req.body;

   if(!name || !age){
      return res.status(400).json({
         message: "Name and age are required"
      });
   }

   if(age < 0){
      return res.status(400).json({
         message: "Age cannot be negative"
      });
   }

   res.status(200).json({
      message: "User received successfully",
      data: { name, age }
   });

});

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});

