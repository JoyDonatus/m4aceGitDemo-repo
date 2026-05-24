//Routing and HTTP Methods -
//  Implement routing for different paths and HTTP methods, 
// handle route parameters and query strings

import http from 'http';
import url from 'url';

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query; // Parse the query string
    var txt = q.year + " " + q.month; // Get year and month from query string
    res.end(txt); // Display the result
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});