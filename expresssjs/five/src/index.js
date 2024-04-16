//partials 



const express=require('express');
const app=express()
const path=require("path")
const hbs=require("hbs");

const templates=path.join(__dirname,"../templates/views");

const partialpath=path.join(__dirname,"../templates/partials");

app.set('view engine','hbs')
app.set('views',templates)

hbs.registerPartials(partialpath)

app.get("/", (req,res)=>{
    
    res.render("index")
} )

app.get("/about", (req,res)=>{
    
    res.render("about")
} )


app.listen(3000)








