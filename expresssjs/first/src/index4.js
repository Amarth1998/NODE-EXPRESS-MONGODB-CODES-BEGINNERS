// server static html css js file in express js 

var express = require('express')
var app = express()
const path=require("path")

const port =3000

//console.log(path.join(__dirname,"../public"))
//C:\Users\amart\OneDrive\Desktop\Node js\expresssjs\first\public
const staticPath=path.join(__dirname,"../public")

//console.log(__dirname) //C:\Users\amart\OneDrive\Desktop\Node js\expresssjs\first\src




//builtin middleware
app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.send("welcome to my page bro")
})


app.listen(port)