//customizing views directory 
//views --> templates



const express=require('express');
const app=express()
const path=require("path")

const templates=path.join(__dirname,"../templates");

app.set('view engine','hbs')
app.set('views',templates)

app.get("/", (req,res)=>{
    
    res.render("index")
} )

app.get("/about", (req,res)=>{
    
    res.render("about")
} )


app.listen(3000)








