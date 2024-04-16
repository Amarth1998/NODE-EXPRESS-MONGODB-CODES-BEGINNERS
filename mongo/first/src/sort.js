//count and sort
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

//find the count, where ctype is "back end" and author is amarth

let Playlist = mongoose.model('Playlist', playlistSchema);
const getDocument = async () => {
    const result = await Playlist.find({ $and: [{ ctype: "back end" }, { author: "amart" }] })
        .select({ name: 1 })
        .countDocuments()
    console.log(result)
}
getDocument()
//1 

let Playlist = mongoose.model('Playlist', playlistSchema);
const getDocument = async () => {
    const result = await Playlist.find({ ctype: "back end" })
        .select({ name: 1 })
        .countDocuments()
    console.log(result)
}
// getDocument()
//3


//sort
let Playlist = mongoose.model('Playlist', playlistSchema);
const getDocument = async () => {
    const result = await Playlist.find({ ctype: "back end" })
        
        .sort({name: 1}) //1 for ascending order
       // .sort("name: -1") //-1 for descending order
       .select({name:1})
    console.log(result)
}
getDocument()
// [
//     { _id: new ObjectId('65f7f66be45bccdee94381a7'), name: ' c' },
//     { _id: new ObjectId('65f7f66be45bccdee94381a8'), name: ' c++' },
//     { _id: new ObjectId('65f7ddb8b1b8adde8c88fcca'), name: ' pyhton' }
//   ]