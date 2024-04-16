const fs=require( "fs");
// fs.mkdir('amarth',(err)=>{console.log("created folder")})

//fs.writeFile("amarth/bio.txt","hi my name is amarth",(err)=>{console.log("complte")})

//fs.appendFile("amarth/bio.txt"," hi my name is amarth",(err)=>{console.log("complte")})

//fs.readFile("amarth/bio.txt",'utf-8',(err,data)=>{console.log(data);console.log("complte")})

fs.rename("amarth/bio.txt","amarth/myybio.txt",(err)=>{console.log("complte")})


fs.unlink("amarth/myybio.txt",(err)=>{console.log("deleted file")})

fs.rmdir("amarth",(err)=>{console.log("deleted folder")})