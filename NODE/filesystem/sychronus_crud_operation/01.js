// Challenge Time
// 1: Create a folder named it amarth
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.(use file encoding)
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder

//01
// const fs=require('fs');
// fs.mkdirSync("amarth")      //a folder  create

// 02
// const fs=require('fs');
// fs.writeFileSync("amarth/bio.txt","my name is amarth")

// 03
// const fs=require('fs')
// fs.appendFileSync("amarth/bio.txt"," append this data")

//04
// const fs=require('fs')
// const data=fs.readFileSync("amarth/bio.txt","utf-8");
// console.log(data)

//05
const fs=require('fs')
fs.renameSync("amarth/bio.txt","amarth/mybio.txt") //to remane file

//06
const fs=require('fs')
fs.unlinkSync("amarth/bio.txt")   //to delete file

fs.rmdirSync("amarth") //to delete folder