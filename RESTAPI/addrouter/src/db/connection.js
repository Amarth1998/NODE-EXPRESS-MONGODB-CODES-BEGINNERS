//connect to mongodb
const mongoose=require( 'mongoose');
mongoose.connect('mongodb://localhost:27017/students-api')
.then(()=>console.log("connected to the database"))
.catch((err)=> console.log(err));
