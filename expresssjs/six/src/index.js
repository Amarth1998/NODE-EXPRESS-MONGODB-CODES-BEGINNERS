//add 404 error page in dynamic website 

const express=require('express');
const app=express()
const path=require("path")
const hbs=require("hbs");
const absolutepath=path.join(__dirname,'../public');

//builtin middleware
app.use(express.static(absolutepath))



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


//add 404 error

//when you type this in urlhttp://localhost:3000/about/d
app.get("/about/*", (req,res)=>{
    
    res.render("404",{errorcomment:"oops this about page could not found"})
} )


//when you type this in urlhttp://localhost:3000/edfeddwewe
app.get("*", (req,res)=>{
    
    res.render("404",{errorcomment:"oops page could not found"})
} )

app.listen(3000)








