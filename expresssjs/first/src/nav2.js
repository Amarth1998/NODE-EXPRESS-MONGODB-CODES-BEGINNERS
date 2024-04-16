//routing 
var express = require('express')
var app = express()
const port =3000
app.get("/",(req,res)=>{
    res.send("welcome to my page bro")
})

app.get("/about",(req,res)=>{
    res.send("welcome to my  about page ")
})

app.get("/contact",(req,res)=>{
    res.send("welcome to my  about page ")
})



app.listen(port, ()=>{console.log(`listening to the post number ${port}`)})