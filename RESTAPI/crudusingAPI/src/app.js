const express = require('express');
require("./db/connection")   //import from db folder and data connected
const Student = require("./models/students")
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); //middleware for parsing json
//the process env is used to get the value of any environment variable if it exists, otherwise use

//read the data of student registration
app.get("/students",async (req, res) =>{ 
    try {
      const studentsData= await Student.find();
        res.send(studentsData)
    } catch (error) {
        res.send(e)
    }
})

//read the data of individual student 
app.get('/students/:id', async (req,res)=>{
             try {
                const _id= req.params.id;
             const studentData= await  Student.findById(_id);
             console.log(studentData)
             if(!studentData){
                 return res.status(404).send("No record found");
             }
             else {
             res.send(studentData);
            }
             } 
             catch (error) {  res.status(404).send(`No user found with id ${_id}`)}             
})

//update students data by its id 

app.patch('/students/:id', async (req,res)=>{
    try {
       const _id= req.params.id;
    const updatestudentData= await  Student.findByIdAndUpdate(_id,req.body,{new:true});
    console.log(updatestudentData)
    if(!updatestudentData){
        return res.status(404).send("No record found");
    }
    else {
    res.send(updatestudentData);
   }
    } 
    catch (error) {  res.status(404).send(`No user found with id ${_id}`)}             
})



// using promises 
// create a new student 
// app.post('/students', (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);    //create an object of model class with body content as parameter
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })      //call save method which will insert into database

// })


//using async -await
app.post('/students',async (req, res) => {
    try {
        const user =new Student(req.body) 
        const createUser =   await user.save()
        res.status(201).send(createUser);
        } 
    catch (error) {res.status(400).send(e)}
})


//delete data 
app.delete('/students/:id', async (req,res)=>{
    try {
       const _id= req.params.id;
    const delstudentData= await  Student.findByIdAndDelete(_id);
    console.log(delstudentData)
    if(!_id){
        return res.status(404).send("No record found");
    }
    else {
    res.send(delstudentData);
   }
    } 
    catch (error) {  res.status(404).send(error)}             
})






app.listen(port, () => console.log("connection successfull"));

// You DO NOT NEED express.json() and express.urlencoded()
// for GET Requests or DELETE Requests. We only need it for
// post and put req.
// express.json() is a method inbuilt in express to recognize the incoming
// Request Object as a JSON Object. This method is called as a middleware 
// in your application using the code: app.use(express.json());




// PS C:\Users\amart\OneDrive\Desktop> mongosh
// test> show dbs
// admin          40.00 KiB
// amarth         48.00 KiB
// config        108.00 KiB
// first         108.00 KiB
// local          72.00 KiB
// students-api  144.00 KiB
// test> use students-api
// switched to db students-api
// students-api> show collections
// students
// students-api>