// Parse JSON request bodies, 
// validate incoming data, 
// and send appropriate responses

const http = require("http");
const url = require("url");

const PORT = 3000;

const server = http.createServer((request, response) => {

   if(request.method === "GET" && request.url === "/"){
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({
           message: "Welcome to our API!"
        }));
    }
   else if(request.method === "POST" && request.url === "/save"){
      let body = '';

      request.on('data', chunk => {
         body += chunk.toString();
      });

      request.on('end', () => {
         const { name, age } = JSON.parse(body);

         if(!name || age === undefined){
            response.writeHead(400, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({
               message: "Name and age are required"
            }));
         }

         else if(age < 0){
            response.writeHead(400, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({
               message: "Age cannot be negative"
            }));
         }

         else{
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({
               message: "User received successfully",
               data: { name, age }
            }));
         }
      });
   }

   else{
      response.writeHead(404, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({
         message: "Route not found"
      }));
   }
})

server.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
