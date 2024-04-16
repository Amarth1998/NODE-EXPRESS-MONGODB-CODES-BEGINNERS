// npm  validation
//npm i validator
const mongoose = require("mongoose");
const validator =require("validator")
mongoose.connect("mongodb://localhost:27017/first")
    .then(() => { console.log("connection succesfull") })
    .catch((err) => { console.error(err) });

let playlistSchema = new mongoose.Schema({
 email: { 
    type: String, 
    required: true ,
    unique:true,
    validate(value){
       if (!validator.isEmail(value)) {
        throw new Error("email is invalid")
       } 
    }

},

});
let Playlist = mongoose.model('Playlist', playlistSchema);
const createDocument = async () => {
    try {
        const a = new Playlist({
          email:"s"
        });
        const result = await a.save()
        console.log(result);}
    catch (err) {
        console.log(err);
    }}
createDocument();

//error
// {
//     properties: [Object],
//     kind: 'user defined',
//     path: 'email',
//     value: 's',
//     reason: Error: email is invalid
//         at model.validate (C:\Users\amart\OneDrive\Desktop\Node js\mongo\first\src\npmvalidation.js:16:15)
//         at SchemaType.doValidate (C:\Users\amart\OneDrive\Desktop\Node js\mongo\first\node_modules\mongoose\lib\schemaType.js:1331:24)
//         at C:\Users\amart\OneDrive\Desktop\Node js\mongo\first\node_modules\mongoose\lib\document.js:2985:18
//         at process.processTicksAndRejections (node:internal/process/task_queues:77:11),
//     [Symbol(mongoose#validatorError)]: true
//   }
// },
// _message: 'Playlist validation failed'