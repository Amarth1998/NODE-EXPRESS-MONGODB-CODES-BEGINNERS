//delete
//deleteone , deletemany
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

// let Playlist = mongoose.model('Playlist', playlistSchema);

// const deleteDoc =async (_id)=>{
// const result =await  Playlist.deleteOne({_id})
// console.log(result)
// }

// deleteDoc("65f5dd57d63de17ab88783f8")
//{ acknowledged: true, deletedCount: 1 }



//findByIDDelete
let Playlist = mongoose.model('Playlist', playlistSchema);

const deleteDoc =async (_id)=>{
const result =await  Playlist.findByIdAndDelete({_id})
console.log(result)
}

deleteDoc("65f7ddb8b1b8adde8c88fcca")
// {
//     _id: new ObjectId('65f7ddb8b1b8adde8c88fcca'),
//     name: ' pyhton',
//     ctype: 'back end',
//     video: 10,
//     author: 'amart',
//     active: true,
//     date: 2024-03-18T06:22:48.326Z,
//     __v: 0
//   }