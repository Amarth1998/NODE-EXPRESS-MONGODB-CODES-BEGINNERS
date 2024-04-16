const jwt = require('jsonwebtoken');
const Register = require('../models/registers');

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            throw new Error('Authentication failed: Token not provided');
        }

        const verifyUser = jwt.verify(token, process.env.SECRET);
        const user = await Register.findOne({ _id: verifyUser._id });
        if (!user) {
            throw new Error('Authentication failed: User not found');
        }

        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send(error.message);
    }
};

module.exports = auth;


// const jwt = require("jsonwebtoken"); // Import jsonwebtoken module
// const Register = require("../models/registers");

// const auth = async (req, res, next) => {
//     try {
//         const token = req.cookies.jwt;
//         if (!token) {
//             throw new Error('Authentication failed: Token not provided');
//         }

//         const verifyUser = jwt.verify(token, process.env.SECRET);
//         console.log("verified-->" + verifyUser._id );
        
//         const user = await Register.findOne({ _id: verifyUser._id });
//         if (!user) {
//             throw new Error('Authentication failed: User not found');
//         }

//         console.log(user.firstname);

//         // //logout
//         req.token=token 
//         req.user=user

//         next();         //call next middleware
//     } catch (error) {
//         res.status(401).send(error.message);
//     }
// };

// module.exports = auth;


// const jwt= require("jsonwebtoken")
// const Register =require("../models/registers")


// const auth = async(req,res,next)=>{
//     try {
// const token =req.cookies.jwt;
// const verifyUser=jwt.verify(token,"mynameisamarthpateliamfromvidishaandbhpallll");
//         console.log("verified-->" + verifyUser);
         
//         const user=await Register.findOne({_id:verifyUser._id})
//            console.log(user.firstname)
//         next()
//     } catch (error) {
//         res.status(401).send(error)
//     }

// }

// module.exports=auth;

// // function to check if user is admin or not 