// we make a wether app 
// go to open weather website and create account

// api key -> 7dc65a8392571a5ce899f425426b779c
//api ->  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//npm init
//api.openweathermap.org/data/2.5/weather?q=Pune&appid=02c390d9c4fd0557f528d0fa3b264b12
//we use requests module and npm install --save requests

const requests = require('requests');
const http = require('http');
const fs = require('fs');

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (temv, curv) => {
    let temperture = temv.replace("{%tempval%}", curv.main.temp);
    temperture = temperture.replace("{%tempvalmin%}", curv.main.temp_min);
    temperture = temperture.replace("{%tempvalmax%}", curv.main.temp_max);
    temperture = temperture.replace("{%location%}", curv.name);
    temperture = temperture.replace("{%country%}", curv.sys.country);
    temperture = temperture.replace("{%tempstatus%}", curv.weather[0].main);



    return temperture;

}
const server = http.createServer((req, res) => {

    if (req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Vidisha&units=metric&appid=02c390d9c4fd0557f528d0fa3b264b12")
            .on("data", (chunk) => {
                const objdata = JSON.parse(chunk)  //convert json to object data
                const arraydata = [objdata]         //convert object to array (array of an object)
                //   console.log(arraydata)
                //   console.log(arraydata[0].main.temp)

                const realtimedata = arraydata.map(val => replaceVal(homeFile, val)).join("");
                //   console.log(realtimedata)
                res.write(realtimedata);

            })
            .on("end", (err) => {
                if (err) return console.log('connection closed due to errors', err);

                res.end();
            });
    }

})
server.listen(8000, "127.0.0.1")
