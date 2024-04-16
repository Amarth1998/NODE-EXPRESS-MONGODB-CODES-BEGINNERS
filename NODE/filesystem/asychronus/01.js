// const fs=require("fs");
// fs.writeFile('read.txt','i am amarth',
// function(err){ console.log("completed") ;console.log(err)  }  )

//we pass them a function as an argument / that gets called when that task completes. a callback
// The callback has an argument that tells you whether 
// the operation completed successfully.
//Now we need to say what to do when fs.writeFile
//has completed (even if it's nothing), and start checking for errors.

// const fs=require("fs");
// fs.appendFile('read.txt',' from vidisha',
// function(err){ console.log("completed") ;console.log(err)  }  )



//read file
const fs=require("fs");
fs.readFile("read.txt",'utf-8',(err,data)=>{
    console.log(data)
})