const express = require('express');
const router = new express.Router()
const Student = require("../models/students")
//read the data of student registration
router.get("/students",async (req, res) =>{ 
    try {
      const studentsData= await Student.find();
        res.send(studentsData)
    } catch (error) {
        res.send(e) }})
//read the data of individual student 
router.get('/students/:id', async (req,res)=>{
             try {
                const _id= req.params.id;
             const studentData= await  Student.findById(_id);
             console.log(studentData)
             if(!studentData){ return res.status(404).send("No record found");}
             else { res.send(studentData); } 
            } 
             catch (error) {  res.status(404).send(`No user found with id ${_id}`)}  })
//update students data by its id 
router.patch('/students/:id', async (req,res)=>{
    try {
     const _id= req.params.id;
    const updatestudentData= await  Student.findByIdAndUpdate(_id,req.body,{new:true});
    console.log(updatestudentData)
    if(!updatestudentData){ return res.status(404).send("No record found");}
    else {res.send(updatestudentData);}
    } 
    catch (error) {  res.status(404).send(`No user found with id ${_id}`)}             
})
//post
router.post('/students',async (req, res) => {
    try {
        const user =new Student(req.body) 
        const createUser =   await user.save()
        res.status(201).send(createUser);
        } 
    catch (error) {res.status(400).send(e)}
})
//delete data 
router.delete('/students/:id', async (req,res)=>{
    try {
       const _id= req.params.id;
    const delstudentData= await  Student.findByIdAndDelete(_id);
    console.log(delstudentData)
    if(!_id){ return res.status(404).send("No record found");}
    else {res.send(delstudentData);}
    } 
    catch (error) {  res.status(404).send(error)}             
})
module.exports = router;