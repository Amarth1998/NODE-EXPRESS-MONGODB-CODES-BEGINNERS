const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const employeeSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, lowercase: true, unique: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true },
    tokens: [{ token: { type: String, required: true } }]
});
// Generating tokens
employeeSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET);
        this.tokens = this.tokens.concat({ token });
        await this.save();
        return token;
    } catch (error) {
        throw new Error('Error generating auth token'); }
};
// Hashing password before saving to database
employeeSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
        this.confirmpassword = await bcrypt.hash(this.password, 10);
    }
    next();
});
const Register = mongoose.model('Register', employeeSchema);
module.exports = Register;


// //Registers.js
// require('dotenv').config();

// const mongoose = require('mongoose');
// const bcrypt =  require('bcryptjs');
// const jwt=require("jsonwebtoken");

// const employeeSchema = new mongoose.Schema({
//     firstname: { type: String, required: true },
//     lastname: { type: String, required: true },
//     email: { type: String, lowercase: true, unique: true },
//     gender: { type: String, required: true },
//     age: { type: Number, required: true },
//     phone: { type: Number, required: true, unique: true },
//     password: { type: String, required: true },
//     confirmpassword: { type: String, required: true },
    
//     tokens:[{token:{type:String , required: true}}]
// })

// //generting tokens
// employeeSchema.methods.generateAuthToken= async function(){
// try {
//    console.log(this._id)
//   const tokennn=jwt.sign({_id:this._id.toString()},process.env.SECRET)
//   this.tokens=this.tokens.concat({token :tokennn});
//   await this.save();
//   console.log(tokennn)
//  return tokennn;
// } catch (error) {
//   res.send(error)
//   console.log("token error"+" "+error);
// }
// }

// Hashing password before saving
//bcrypt  middleware for hashing the password before saving it to database
// employeeSchema.pre("save", async function (next) {
//     if(this.isModified("password")){ 
//  // console.log(this.password)                  //123
//   this.password= await bcrypt.hash(this.password,10) 
//   //console.log(this.password) //$2a$10$ch9UGk2HJ3Edh7EBg7OS6en0yBkDemUn63NFTwB45RdGbxlk.O41i
//   this.confirmpassword = await bcrypt.hash(this.password,10) ;
//   //this.confirmpassword = undefined;  // means  we don't save confirm password in database
// }

// next();
// })
// // now we need to create a collection 
// const Register = new mongoose.model("Register", employeeSchema);
// module.exports = Register;




















// const mongoose = require('mongoose');
// const bcrypt =  require('bcryptjs');
// const jwt=require("jsonwebtoken");

// const employeeSchema = new mongoose.Schema({
//     firstname: { type: String, required: true },
//     lastname: { type: String, required: true },
//     email: { type: String, lowercase: true, unique: true },
//     gender: { type: String, required: true },
//     age: { type: Number, required: true },
//     phone: { type: Number, required: true, unique: true },
//     password: { type: String, required: true },
//     confirmpassword: { type: String, required: true },
//     tokens:[{token:{type:String , required: true}}]
// })

// //generting tokens
// employeeSchema.methods.generateAuthToken= async function(){
// try {
//    console.log(this._id)
//   const tokennn=jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY)
//   this.tokens=this.tokens.concat({token :tokennn});
//   await this.save();
//   console.log(tokennn)
//  return tokennn;
// } catch (error) {
//   res.send(error)
//   console.log("token error"+" "+error);
// }
// }

// //bcrypt  middleware for hashing the password before saving it to database
// //generet token  after saving user in db
// employeeSchema.pre("save", async function (next) {
//     if(this.isModified("password")){ 
//  // console.log(this.password)                  //123
//   this.password= await bcrypt.hash(this.password,10) 
//   //console.log(this.password) //$2a$10$ch9UGk2HJ3Edh7EBg7OS6en0yBkDemUn63NFTwB45RdGbxlk.O41i
//   this.confirmpassword = await bcrypt.hash(this.password,10) ;
//   //this.confirmpassword = undefined;  // means  we don't save confirm password in database
// }

// next()
// })

// // now we need to create a collection 

// const Register = new mongoose.model("Register", employeeSchema);
// module.exports = Register;
