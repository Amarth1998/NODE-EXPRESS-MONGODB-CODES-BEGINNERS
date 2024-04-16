const os=require("os")
console.log(os.arch()) //x64

console.log(os.platform())//win32

console.log(os.freemem()) //1045057536 in bites

console.log(os.freemem()/1024/1024/1024) 
console.log(os.totalmem()/1024/1024/1024) 


console.log(os.hostname()) //Amarth 
console.log(os.machine()) 
console.log(os.tmpdir()) //C:\Users\amart\AppData\Local\Temp
console.log(os.type()) //Windows_NT



