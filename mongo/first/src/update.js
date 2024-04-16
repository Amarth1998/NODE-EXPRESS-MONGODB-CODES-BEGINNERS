//update 
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

let Playlist = mongoose.model('Playlist', playlistSchema);

// update the doc 
//updateone and updatemany
// const updateDoc = async (_id)=>{
//     try {
//         const result= await Playlist.updateOne({_id},{$set:{name:"JAVA"}})
//         console.log(result)
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// updateDoc("65f7ddb8b1b8adde8c88fccb")
// {
//     acknowledged: true,
//     modifiedCount: 1,
//     upsertedId: null,
//     upsertedCount: 0,
//     matchedCount: 1
//   }


//findByIDAndUpdate()
// const updateDoc = async (_id)=>{
//     try {
//         const result= await Playlist.findByIdAndUpdate({_id},{$set:{name:"JAVAaaaaaaaaaa"}})
//         console.log(result)
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// updateDoc("65f7ddb8b1b8adde8c88fccb")
//output show old value 
// {
//     _id: new ObjectId('65f7ddb8b1b8adde8c88fccb'),
//     name: 'JAVA',
//     ctype: 'java end',
//     video: 100,
//     author: 'amart',
//     active: true,
//     date: 2024-03-18T06:22:48.326Z,
//     __v: 0
//   }

const updateDoc = async (_id)=>{
    try {
        const result= await Playlist.findByIdAndUpdate({_id},{$set:{name:"JAVA tutorial"}},{new:true})
        console.log(result)
        
    } catch (error) {
        console.log(error)
    }
}
updateDoc("65f7ddb8b1b8adde8c88fccb")
//add {new:true} show new update value in
{
    _id: new ObjectId('65f7ddb8b1b8adde8c88fccb'),
    name: 'JAVA tutorial',
    ctype: 'java end',
    video: 100,
    author: 'amart',
    active: true,
    date: 2024-03-18T06:22:48.326Z,
    __v: 0
  }