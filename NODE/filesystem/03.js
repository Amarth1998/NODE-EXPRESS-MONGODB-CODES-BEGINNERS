// const fs=require("fs");

// const buf_data=fs.readFileSync('read.txt')
// console.log(data)


// nodejs include an additional data typr called buffer 
//which is not available in js
//output <Buffer 61 6d 61 72 74 68 20 70 61 74 65 6c 20 74 68 69 73 20 69 73 20 6d 79 20 70 61 67 65>




const fs=require("fs");

const buf_data=fs.readFileSync('read.txt')
const a=buf_data.toString()
console.log(a);
