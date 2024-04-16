var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(
    function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

}).listen(8080);


// This code is creating a basic HTTP server in Node.js. Let's break it down step by step:

// 1. `var http = require('http');`: This line imports the built-in Node.js `http` module, which provides functionality to create HTTP servers and clients.

// 2. `var url = require('url');`: This line imports another built-in Node.js module called `url`, which provides utilities for URL resolution and parsing.

// 3. `var fs = require('fs');`: This line imports the built-in Node.js `fs` module, which provides file system-related functionality.

// 4. `http.createServer(function (req, res) { ... }).listen(8080);`: This line creates an HTTP server using the `createServer` method provided by the `http` module. The `createServer` method takes a callback function that will be invoked whenever a request is made to the server. Inside the callback function, `req` represents the request object and `res` represents the response object. The `listen(8080)` method makes the server listen on port 8080 for incoming connections.

// 5. `var q = url.parse(req.url, true);`: This line parses the URL of the incoming request (`req.url`) using the `url.parse()` method. The second parameter, `true`, tells the parser to parse the query string into an object.

// 6. `var filename = "." + q.pathname;`: This line constructs the filename based on the path portion of the URL. The `.` at the beginning is to indicate the current directory.

// 7. `fs.readFile(filename, function(err, data) { ... });`: This line reads the contents of the file specified by `filename` asynchronously using the `fs.readFile()` method. It takes a callback function that will be invoked when the file is read. If an error occurs during reading, the `err` parameter will contain the error object, otherwise, the `data` parameter will contain the contents of the file.

// 8. Inside the callback function passed to `fs.readFile()`, the code checks if there was an error reading the file. If there was an error (`err` is not `null`), it sends a 404 Not Found response to the client. Otherwise, it sends a 200 OK response along with the contents of the file (`data`) to the client.

// 9. `res.writeHead()` is used to set the HTTP status code and headers of the response.

// 10. `res.write()` is used to write data to the response body.

// 11. `return res.end();`: This line ends the response. It's important to call `res.end()` to signal that the response has been completed.

// In summary, this code creates a simple HTTP server that serves files from the current directory based on the requested URL path. If the requested file exists, it sends its contents back to the client with a status code of 200. If the requested file does not exist, it sends a 404 Not Found response.