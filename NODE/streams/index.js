// reading from a stream ,
// create a readable stream
// handle stream events->data,end,and error
const fs =require("fs")
const http= require('http')
const server=http.createServer();

server.on('request',(req,res)=>{
  const rsteam=fs.createReadStream('indexs.txt');
  rsteam.on('data',(chunk)=> {
    res.write(chunk);
  })
  rsteam.on('end',()=>{
    res.end()})

    rsteam.on('error',(err)=>{
        console.log(err);
    res.end("file not found")   })
            
})
server.listen(8000,"localhost");