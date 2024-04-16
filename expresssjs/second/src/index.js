const express = require('express')
const app=express()
const path =require('path')

//console.log(__dirname)//C:\Users\amart\OneDrive\Desktop\Node js\expresssjs\second\src
// console.log(path.join(__dirname,'../public')) //C:\Users\amart\OneDrive\Desktop\Node js\expresssjs\second\public


const absolutepath=path.join(__dirname,'../public');

//builtin middleware
app.use(express.static(absolutepath))

app.get("/",(req,res)=>{
    res.send("Hello World")
    
}

    )




app.listen(3000)