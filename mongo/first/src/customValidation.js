// custom validation
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/first")
    .then(() => { console.log("connection succesfull") })
    .catch((err) => { console.error(err) });

let playlistSchema = new mongoose.Schema({
   video:{
        type:Number,
        validate(value){
            if (value <0) {
                throw new Error("value  of video must be positive number or zero!"); }      }}
});
let Playlist = mongoose.model('Playlist', playlistSchema);
const createDocument = async () => {
    try {
        const a = new Playlist({
          video:-1
        });
        const result = await a.save()
        console.log(result);}
    catch (err) {
        console.log(err);
    }}
createDocument();

// error 
// {
//     properties: [Object],
//     kind: 'user defined',
//     path: 'video',
//     value: -1,
//     reason: Error: value  of video must be positive number or zero!
//         at model.validate (C:\Users\amart\OneDrive\Desktop\Node js\mongo\first\src\customValidation.js:13:23)
//         at SchemaType.doValidate (C:\Users\amart\OneDrive\Desktop\Node js\mongo\first\node_modules\mongoose\lib\schemaType.js:1331:24)
//         at C:\Users\amart\OneDrive\Desktop\Node js\mongo\first\node_modules\mongoose\lib\document.js:2985:18
//         at process.processTicksAndRejections (node:internal/process/task_queues:77:11),
//     [Symbol(mongoose#validatorError)]: true
//   }
// },
// _message: 'Playlist validation failed'
// }
// connection succesfull