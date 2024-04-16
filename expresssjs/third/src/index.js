// using template engine with express  
// pub , mustach , ejs 
//is  used to add dynmic data
//handlebarsjs
//to use handlebars  is install hbs , hbs is express.js view engine for handlebar
// npm i hbs 
//we make a views folder



const express=require('express');
const app=express()
const path = require("path");
const absolutepath=path.join(__dirname,'../public');

//builtin middleware
//app.use(express.static(absolutepath))

//to set the view engine
//dynamic data
app.set('view engine','hbs')

app.get("/", (req,res)=>{
    
    res.render("index",{placeholder:"amarth"})
} )
app.listen(3000)








//to tell express that we are going to send json data
// app.get('/data',(req,res)=>{
//     const data={
//         name:'John Doe',
//         age:34,
//         country:'USA'
//     }
//     res.json(data)
// })

//to render a page without any data

// app.get("/",(req,res)=>{
//     res.send("Hello World")
    
// }

//     )

