const http = require('http');
const url = require('url');

//  Implement routing for different paths and HTTP methods, 
const serverA =http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/plain' });

    const parsedUrl = url.parse(request.url, true).query; // Parse the query string
    const path = url.parse(request.url).pathname; // Get the path from the URL
    if (path === '/') {
        response.write("Welcome to the Home Page!");
        response.end();
    }

    else if (path === '/about') {
        response.write("Welcome to the About Page!");
        response.end();
    }
    else if (path === '/user') {
        response.write(`Welcome to the User Page! Your query parameters are : ${JSON.stringify(parsedUrl)}`);
        response.end();
    }
})

serverA.listen(8081, () => {
    console.log('Server running at http://localhost:8081/');
});


// handle route parameters and query strings

// const server =http.createServer(function (request, response) {

//     response.writeHead(200, { 'Content-Type': 'text/plain' });

//     const parsedUrl = url.parse(request.url, true).query; // Parse the query string
//     const txt = `${parsedUrl.year} ${parsedUrl.month}`; // Get year and month from query string


//     response.write(`Welcome to our website! Your query parameters are : ${txt}`);
//     response.end();
// })

// server.listen(8080, () => {
//     console.log('Server running at http://localhost:8080/');
// });