
// Create a simple HTTP server that responds to requests with appropriate headers and status codes

const http = require('http');

const servers = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write("Hello Worlds!");
    response.end();
});

servers.listen(3000, () => {
    console.log('Server running on port 3000');
});



