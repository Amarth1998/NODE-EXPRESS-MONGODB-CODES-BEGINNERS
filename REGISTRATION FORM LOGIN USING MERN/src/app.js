const express=require( 'express');
const app=express();
const path=require( "path");
const hbs=require("hbs")
require("./db/connection")
const Register =require("./models/registers")
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken');

// Load environment variables
require('dotenv').config();

const auth = require('./middleware/auth'); // Import auth middleware
const cookieParser=require("cookie-parser")


const port = process.env.PORT || 3000
const static_path=path.join( __dirname, "../public" );
//console.log(path.join( __dirname, "../public" ))
const template_path=path.join( __dirname, "../templates/views" );
const partials_path=path.join( __dirname, "../templates/partials" );

app.use(express.json()) 
app.use(express.urlencoded({extended:false})) 
app.use(express.static(static_path));
app.set("view engine","hbs")
app.set('views',template_path)
app.use(cookieParser()) //cookie parser


hbs.registerPartials(partials_path);


app.get('/', (req, res) => { res.render("index")})
app.get('/register', (req, res) => {  res.render("register")})

app.post('/register', async(req, res) => {
    try {
        const password= req.body.password;
        const cpassword= req.body.confirmpassword;
if(password===cpassword){ 
    const registerEmployee=new Register({firstname:req.body.firstname,
                                        lastname:req.body.lastname,
                                        email:req.body.email,
                                        gender:req.body.gender,
                                        phone:req.body.phone,
                                        age:req.body.age,
                                        password:password,
                                        confirmpassword:cpassword   })

console.log("success part:"+ registerEmployee)
//generate  token for user after registration

// const token =await   registerEmployee.generateAuthToken() 
// console.log("token "+":"+ token)

// res.cookie("jwt", token, {
//     httpOnly: true, // Ensure the cookie cannot be accessed by client-side scripts
//     // secure: true, // Enable for HTTPS environments only
//     // expires: new Date(Date.now() + 3600000), // Set cookie expiration time (1 hour in this case)
// });


const registered = await registerEmployee.save()
res.status(201).render("registerpage")}
else{res.send("password are not matching")}} 
catch (error) {
        res.status(400).send(error)}
})



// app.post('/register', async (req, res) => {
//     try {
//         const { firstname, lastname, email, gender, phone, age, password, confirmpassword } = req.body;
//         // Check if passwords match
//         if (password !== confirmpassword) {
//             return res.send("Passwords do not match");
//         }

//         // Check if user already exists
//         const existingUser = await Register.findOne({ email });
//         if (existingUser) {
//             return res.send("User with this email already exists");
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user
//         const newUser = new Register({ firstname,lastname,email,gender, phone, age, password: hashedPassword, confirmpassword: hashedPassword});

//         // Save the user to the database
//         await newUser.save();
//         res.redirect('/login');
//     } catch (error) { console.log(error);    res.status(500).send("Internal Server Error");  } });




// login page
app.get('/login', (req, res) => {
    res.render("login")
})

// Secret page accessible only after login
app.get('/secret',auth,(req, res) => {
    // console.log("this is login cookie -:  "+ req.cookies.jwt)
     res.render("secret")
 })
 //i made this page , this page only you can visit after login only 
 
//logout 
//1.we delete cookie to logout , 
//2.we use filter method  to remove the token in database -->filter method create a new array 
//we match all the token  with our jwt.verify-->if it matches then we will remove that token from array using filter .and jo match nahi huye vo new array main save ho jaegy.

app.get('/logout',auth,async (req, res) => {
    try {
        // console.log(req.user)
       
        //filter     //for single logout
        // req.user.tokens=req.user.tokens.filter((currentElement)=>{
        //     return currentElement.token !==req.token;
        // })
           req.user.tokens=[]    //for  multiple logouts
        res.clearCookie('jwt') // remove cookies
     //   res.redirect("/login") // redirect to login page
     console.log("logout")
        await req.user.save()     //save the user
        res.render("login")    
    } catch (error) {   
        res.status(500).send('Error logging out')
    }
 })





//check password
app.post("/login", async(req,res)=>{
    try {
        const email=req.body.email
        const password=req.body.password
        // console.log(email+" "+password); 
      const useremail =  await  Register.findOne({email:email})
       
      const isMatch=await bcrypt.compare(password,useremail.password)

      //middleware
      const token =await   useremail.generateAuthToken() 
      console.log("token "+":"+ token)

      res.cookie("jwt", token, {
        httpOnly: true, // Ensure the cookie cannot be accessed by client-side scripts
        // secure: true, // Enable for HTTPS environments only
        expires: new Date(Date.now() + 300000), // Set cookie expiration time (1 hour in this case)
    });


      //for bcrypt
      if (isMatch) {
        res.status(201).render("loginpage");
       } 
       else{
        res.send( "Invalid  Password")
       }


    } catch (error) {
        res.status(400).send("invalid login details")
    }
})





app.listen(port , ()=>{console.log("server runninng")})













// require('dotenv').config()           //.env
// const express=require( 'express');
// const app=express();
// const path=require( "path");
// const hbs=require("hbs")
// require("./db/connection")
// const Register =require("./models/registers")
// const bcrypt= require('bcryptjs')
// const jwt = require('jsonwebtoken');

// const port = process.env.PORT || 3000
// const static_path=path.join( __dirname, "../public" );
// //console.log(path.join( __dirname, "../public" ))
// const template_path=path.join( __dirname, "../templates/views" );
// const partials_path=path.join( __dirname, "../templates/partials" );

// app.use(express.json()) 
// app.use(express.urlencoded({extended:false})) 
// app.use(express.static(static_path));
// app.set("view engine","hbs")
// app.set('views',template_path)
// hbs.registerPartials(partials_path);

// //console.log(process.env.SECRET) // check for  the secret key in .env file


// app.get('/', (req, res) => { res.render("index")})
// app.get('/register', (req, res) => {  res.render("register")})

// app.post('/register', async(req, res) => {
//     try {
//         const password= req.body.password;
//         const cpassword= req.body.confirmpassword;
// if(password===cpassword){ 
//     const registerEmployee=new Register({firstname:req.body.firstname,
//                                         lastname:req.body.lastname,
//                                         email:req.body.email,
//                                         gender:req.body.gender,
//                                         phone:req.body.phone,
//                                         age:req.body.age,
//                                         password:password,
//                                         confirmpassword:cpassword   })

// console.log("success part:"+ registerEmployee)
// //generate  token for user after registration
//  const token =await   registerEmployee.generateAuthToken() 
// console.log("token "+":"+ token)


// // the res.cookie is used to set a cookie in client side and it takes three arguments : name of the cookie , value of the cookie and options that can beres.cookie 
// //value parameter may be a string or objet converted to json
// // when you register a  new employee , save it to database and send back the token with response header and save in cookie
// // syntax -- res.cookie(name ,value,[options]) 
// //store  the jwt token in cookie and send it back to client side to see user is validated or not
// //The HttpOnly flag is a setting that can be applied to HTTP cookies. When a cookie is marked as HttpOnly, it instructs the browser that the cookie should not be accessible via client-side scripts, such as JavaScript. This means that the cookie is only sent to the server with HTTP requests and is not accessible through JavaScript's document.cookie API.
// //The primary purpose of the HttpOnly flag is to mitigate certain types of cross-site scripting (XSS) attacks. XSS attacks involve injecting malicious scripts into web pages, which can then steal sensitive information stored in cookies. By setting the HttpOnly flag on cookies, developers can help prevent these attacks because even if an attacker manages to execute a script on a victim's browser, they won't be able to access the cookies containing sensitive information.
// //httponly is a flag that can be  used to tell browser whether it should allow the cookie to be accessed by javascript code running on the web
// //httpOnly : true means that the cookie can't accessed by javascript

// res.cookie("jwt",token ,{expires:new Date(Date.now() +30000) })

// //res.cookie("jwt",token ,{httpOnly:true,secure:true, expires:new Date(Date.now() +30000) })

// const registered = await registerEmployee.save()

// res.status(201).render("registerpage")}
// else{res.send("password are not matching")}
//         // console.log(req.body.firstname)
//         } 
// catch (error) {
//         res.status(400).send(error)}
// })

// // login page
// app.get('/login', (req, res) => {
//     res.render("login")
// })

// //check password
// app.post("/login", async(req,res)=>{
//     try {
//         const email=req.body.email
//         const password=req.body.password
//         // console.log(email+" "+password); 
//       const useremail =  await  Register.findOne({email:email})
       
//       const isMatch=await bcrypt.compare(password,useremail.password)

//       //middleware
//       const token =await   useremail.generateAuthToken() 
//       console.log("token "+":"+ token)
 
//       res.cookie("jwt",token ,{expires:new Date(Date.now() +50000) })

//       //for bcrypt
//       if (isMatch) {
//         res.status(201).render("loginpage");
//        } 
//        else{
//         res.send( "Invalid  Password")
//        }

//        //normal login 
//     //   if (useremail.password===password) {
//     //     res.status(201).render("loginpage");
//     //    } 
//     //    else{
//     //     res.send( "Invalid Email or Password")
//     //    }
//     //   res.send(useremail)
//     //   console.log(useremail)

//     } catch (error) {
//         res.status(400).send("invalid login details")
//     }
// })

// //authentication using jwt for smjhane k liye bss
// // const createToken=async ()=>{
// //     const token=await jwt.sign({_id:"65fa8f8d687f85e848209f09"},"thisisasecretkeyigenerateformyprojectttttttttttttttttttttttttttttttttt",{expiresIn:"8000 seconds"})
// //  // console.log(token) 
// //   //https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWZhOGY4ZDY4N2Y4NWU4NDgyMDlmMDkiLCJpYXQiOjE3MTA5MjM0MDd9.0G9vQpkIeQc9i6I2aYvlbObhqkXaEBg-F0Gd4dNJ_c0
    
// //    const userVer=await jwt.verify(token,"thisisasecretkeyigenerateformyprojectttttttttttttttttttttttttttttttttt");
// //   // console.log(userVer)  //{ _id: '65fa8f8d687f85e848209f09', iat: 1710923680 }
// // }
// //createToken()
// app.listen(port , ()=>{console.log("server runninng")})

// //using hashing for password security 
// //npm i bryptjs
// //hashing is one way alogorithm
// //authentication using jwt
// //npm i jsonwebtokesrc 
