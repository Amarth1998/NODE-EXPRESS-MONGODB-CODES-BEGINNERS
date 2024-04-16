// send html data and json data as a response 
var express = require('express')
var app = express()
const port =3000
app.get("/",(req,res)=>{
    res.send("<h1>hello world</h1>")
})

app.get("/about",(req,res)=>{
    res.write("<h1>hello world</h1>")
    res.write("<h1>hello scond</h1>")
    res.send()
})



//json data as a response 
app.get("/temp",(req,res)=>{
    res.send({
        id:1,name:"amarth"
    })
})

app.get("/arryofanobject",(req,res)=>{
    res.send([{
        id:1,name:"amarth"
    }])
})



// the method are identical when a object or arry is passed,but res.json will also convert non objects such as null and undefined , which are not valid json 
app.get("/json",(req,res)=>{
    res.json([
        {id:1,name:"amarth"},
        {id:2,name:"amarth"}, 
        {id:3,name:"amarth"},  
        {id:4,name:"amarth"}, 
        {id:5,name:"amarth"}, 
        {id:6,name:"amarth"}, 
        {id:7,name:"amarth"}
    ])
})







app.listen(port, ()=>{console.log(`listening to the post number ${port}`)})