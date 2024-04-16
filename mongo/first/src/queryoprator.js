const mongoose = require("mongoose");
const { assign } = require("nodemailer/lib/shared");

mongoose.connect("mongodb://localhost:27017/first")
    .then(() => { console.log("connection succesfull") })
    .catch((err) => { console.error(err) });

let playlistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ctype: { type: String, required: true },
    video: { type: Number, required: true },
    author: { type: String, required: true },
    active: Boolean,
    date: { type: Date, default: Date.now }
});

//find  all videos in a given playlist greater thn 50
//$gte --> greater than and equal to 
//$lte --> less than and equal to 
//$gt --> greater than  
//$lt --> less than  

// //find  all videos in a given playlist greater thn 50
// let Playlist = mongoose.model('Playlist', playlistSchema);
// const getDocument =async () => {
//     const result =await Playlist.find({video:{ $gte : 50}})
//     console.log(result)
// }
// getDocument()

// [ { _id: new ObjectId('65f7ddb8b1b8adde8c88fcc9'), name: ' js', ctype: 'front end', video: 60, author: 'amart',
// active: true, date: 2024-03-18T06:22:48.326Z , __v: 0 },
//     { _id: new ObjectId('65f7ddb8b1b8adde8c88fccb'), name: ' java', ctype: 'java end',
//       video: 100,author: 'amart', active: true, date: 2024-03-18T06:22:48.326Z, __v: 0 } ]



//$in
//find  data whose ctype   are either back end or database
// let Playlist = mongoose.model('Playlist', playlistSchema);
// const getDocument =async () => {
//     const result =await Playlist.find({ctype:{ $in : ["back end","database"]}}).select({name:1})
//     console.log(result)
// }
// getDocument()
// //[
//     { _id: new ObjectId('65f7ddb8b1b8adde8c88fcc9'), name: ' mongodb' },
//     { _id: new ObjectId('65f7ddb8b1b8adde8c88fcca'), name: ' pyhton' }
//   ]


//$nin
//find  data whose ctype   not are either back end or database
// let Playlist = mongoose.model('Playlist', playlistSchema);
// const getDocument =async () => {
//     const result =await Playlist.find({ctype:{ $nin : ["back end","database"]}}).select({name:1})
//     console.log(result)
// }
// getDocument()

// [
//     { _id: new ObjectId('65f5dd57d63de17ab88783f8'), name: 'React js' },     
//     { _id: new ObjectId('65f7ddb8b1b8adde8c88fccb'), name: ' java' }
//   ]


//Logical Query Operators using Mongoose 


// //$or 
// //find data whose ctype is "backend" and author is amarth.
// let Playlist = mongoose.model('Playlist', playlistSchema);
// const getDocument =async () => {
//     const result =await Playlist.find({$or:[{ctype:"back end"} , {author:"amart"}]})
//     .select({name:1})
//     console.log(result)
// }
// getDocument()
// [
//     { _id: new ObjectId('65f5dd57d63de17ab88783f8'), name: 'React js' },
//     { _id: new ObjectId('65f7ddb8b1b8adde8c88fcc9'), name: ' mongodb' },
//     { _id: new ObjectId('65f7ddb8b1b8adde8c88fcca'), name: ' pyhton' }, 
//     { _id: new ObjectId('65f7ddb8b1b8adde8c88fccb'), name: ' java' },   
//     { _id: new ObjectId('65f7f66be45bccdee94381a7'), name: ' c' },      
//     { _id: new ObjectId('65f7f66be45bccdee94381a8'), name: ' c++' }     
//   ]

//$and
//find data whose ctype is "backend" and author is amarth.
let Playlist = mongoose.model('Playlist', playlistSchema);
const getDocument = async () => {
    const result = await Playlist.find({ $and: [{ ctype: "back end" }, { author: "amart" }] })
        .select({ name: 1 })
    console.log(result)
}
getDocument()
//[ { _id: new ObjectId('65f7ddb8b1b8adde8c88fcca'), name: ' pyhton' } ]