// reading from a stream ,
// create a readable stream
// handle stream events->data,end,and error
const fs =require("fs")
const http= require('http')
const server=http.createServer();

server.on('request',(req,res)=>{
  const rsteam=fs.createReadStream('index.txt');
 rsteam.pipe(res);
            
})
server.listen(8000,"localhost");