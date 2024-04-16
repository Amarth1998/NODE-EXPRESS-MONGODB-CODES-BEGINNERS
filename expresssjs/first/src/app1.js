var express = require('express')
var app = express()



// app.get(route,callback)
// app.get("/"   ,  (req,res)=>{} )

// The callback function has 2 parameters, request(req) and response (res). 
// The request object(req) represents the HTTP request and has properties for the request query string, parameters, body, 
// HTTP headers, etc.
// Similarly, the response object represents the HTTP response 
// that the Express app sends when it receives an HTTP request.


app.get("/"   ,  (req,res)=>{
    res.send("Hello World!") // Sends a simple
} )

app.get("/about"   ,  (req,res)=>{
    res.send("about page !") // Sends a simple
} )
app.listen(8000,()=>{
    console.log("listeing port  8000");
})
