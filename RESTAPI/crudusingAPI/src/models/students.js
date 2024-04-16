//create a student model
const mongoose=require( 'mongoose');
const validator=require("validator")

var StudentSchema = new mongoose.Schema({

    name:{type:String ,required:true,minlength:3,},
    email:{type:String ,required:true , unique:[true,"email id already present"],
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Invalid Email Id')}  }
           },
    phone :{type:Number, unique:true , required:true},
    address:{type:String , required:true }
});

// we will create a new collection using  this schema in the database 

const  Student=mongoose.model('Student',StudentSchema);
module.exports=Student;
