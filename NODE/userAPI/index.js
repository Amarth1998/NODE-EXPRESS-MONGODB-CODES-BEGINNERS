const http = require("http");
const fs = require("fs");


const server = http.createServer(function (req, res) {
    if (req.url == "/") {
        res.end("home page");
    } 
    else if (req.url == "/api") {
        fs.readFile('API.json',"utf-8", function (err,data){
           const objdata=JSON.parse(data)
           console.log(objdata[1].name)
           
            res.end(data)
        })
       ;
    }
    else {
        res.writeHead(404);
        res.end('Error!');
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Server is listening on port 8000");
});
