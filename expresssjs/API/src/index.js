
const express=require('express');
const app=express()
const path=require("path")
const requests=require("requests");

const templates=path.join(__dirname,"../templates");

app.set('view engine','hbs')
app.set('views',templates)

app.get("/", (req,res)=>{
    
    res.render("index")
} )

app.get("/about", (req,res)=>{
    
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=02c390d9c4fd0557f528d0fa3b264b12`)
    .on("data", (chunk) => {
        const objdata = JSON.parse(chunk)  //convert json to object data
        const arraydata = [objdata]         //convert object to array (array of an object)
        //   console.log(arraydata)
           console.log(`city name is ${arraydata[0].name} and the temp is ${arraydata[0].main.temp} `)

      res.write(`city name is ${arraydata[0].name} and the temp is ${arraydata[0].main.temp} `)

    })
    .on("end", (err) => {
        if (err) return console.log('connection closed due to errors', err);

        res.end();
    });
} );


app.listen(3000)


















// if (req.url == "/") {
//     requests("https://api.openweathermap.org/data/2.5/weather?q=Vidisha&units=metric&appid=02c390d9c4fd0557f528d0fa3b264b12")
//         .on("data", (chunk) => {
//             const objdata = JSON.parse(chunk)  //convert json to object data
//             const arraydata = [objdata]         //convert object to array (array of an object)
//             //   console.log(arraydata)
//             //   console.log(arraydata[0].main.temp)

//             const realtimedata = arraydata.map(val => replaceVal(homeFile, val)).join("");
//             //   console.log(realtimedata)
//             res.write(realtimedata);

//         })
//         .on("end", (err) => {
//             if (err) return console.log('connection closed due to errors', err);

//             res.end();
//         });
// }