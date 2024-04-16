// const http=require("http");
// const server =http.createServer(function (req,res){
//     res.end("Hello World!");

// })

// server.listen(8000,"127.0.0.1",()=>{console.log("listening to port 8000")});


//http://localhost:8000/




// const http=require("http");
// const server =http.createServer(function (req,res){

//      if(req.url="/"){ res.end("home  page adddddmarth")}

//     else if(req.url=="/about"){ res.end("about  ok")}
//      else{
//         res.writeHead(404);
//          res.end('Error!');
//      }

// })

// server.listen(8000,"127.0.0.1",()=>{console.log("listening to port 8000")});

const http = require("http");
const server = http.createServer(function (req, res) {
    if (req.url == "/") {
        res.end("home page");
    } else if (req.url == "/about") {
        res.writeHead("<h1>About Page</h1>");
        res.end();
    } else {
        res.writeHead(404);
        res.end('Error!');
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Server is listening on port 8000");
});
