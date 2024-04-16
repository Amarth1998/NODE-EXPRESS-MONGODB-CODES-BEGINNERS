// const bioData={
//     name:"amarth",
//     age:26,
//     channel:"amarthpatel"
// };
// const jsonData=JSON.stringify(bioData);
// console.log("The JSON data is : "+jsonData); //The JSON data is : {"name":"amarth","age":26,"channel":"amarthpatel"}


// // Parsing the JSON Data  to object  again using parse method of JSON 
// const parsedJson = JSON.parse(jsonData); 
// console.log(parsedJson);
// //{ name: 'amarth', age: 26, channel: 'amarthpatel' }

// // Accessing the properties of an Object
// console.log(`Name of the person is ${parsedJson.name}`);//Name of the person is amarth





// //task:
// // 1.convert to json
// // 2.dusre file me add krdena 
// // 3.rreadfile 
// // 4.again convert back to js object aand console.log


const bioData={
    name:"amarth",
    age:26,
    channel:"amarthpatel"
};

const fs = require('fs');
const jsonData=JSON.stringify(bioData);
fs.writeFile("data.json",jsonData,(err)=>{
    if(!err)
        console.log("Data written successfully");
});


fs.readFile("data.json","utf8",(err,data)=>{
   if(!err){
       const obj=JSON.parse(data);
       console.log(obj)
      
   }else{
       console.log("Error in reading the File");
   }
})
