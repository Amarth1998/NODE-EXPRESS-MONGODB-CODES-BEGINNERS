// VALIDATION 
// uppercase , lowercase ,trim ,minlength,maxlength , enum
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/first")
    .then(() => { console.log("connection succesfull") })
    .catch((err) => { console.error(err) });

let playlistSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true ,
        unique:true,       
        lowercase:true,    //turn into lowecase
        trim:true  ,          //remove space
        minlength:2   , //minlength:[2,"custom message"],min length of string 2 
        maxlength:30}, //max length of string 30 

    ctype: { type: String, required: true ,
        enum:["frontend","backend","database"] ,  // enumeration list for the field , only word add according to this list
        lowercase:true },
   
});

let Playlist = mongoose.model('Playlist', playlistSchema);

const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "ReAct JS",
            ctype: "frontend",
        });
        const result = await reactPlaylist.save()
        console.log(result);}
    catch (err) {
        console.log(err);
    }}
createDocument();

// {
//     name: 'react js',
//     ctype: 'frontend',
//     _id: new ObjectId('65f812b0f8aa15d1c5cb5412'),
//     __v: 0
//   }