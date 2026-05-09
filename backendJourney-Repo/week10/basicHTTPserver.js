//Basic HTTP Server - 
// Create a simple HTTP server that responds to requests with appropriate headers and status codes


const http = require('http');

const server = http.createServer((req, res) => {

    // Home route
    if(req.url === '/' && req.method === 'GET') {

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Welcome Home');

    }

    // About route
    else if(req.url === '/about' && req.method === 'GET') {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: 'About Page'
        }));

    }

    // Page not found
    else {

        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        res.end('404 Page Not Found');

    }

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});


const app = require(`express`)();
const PORT = 8080;

app.get(`/tshirt`, (req, res) => {
    res.status(200).send({ tshirt: "Cotton T-Shirt" , size: 'large'});
});

app.listen(
    PORT,
    () => console.log(`Server is running on http://localhost:${PORT}`)
)


