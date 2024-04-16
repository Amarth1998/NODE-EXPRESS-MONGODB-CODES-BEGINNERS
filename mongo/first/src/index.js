//connect nodejs express to mongodb using mongoose
//npm i mongoose

const mongoose = require("mongoose");
const { assign } = require("nodemailer/lib/shared");
//connection creation and create a db if not present
mongoose.connect("mongodb://localhost:27017/first")
    .then(() => { console.log("connection succesfull") })
    .catch((err) => { console.error(err) });

//schema 
//a mongoose schema defines the structure of document and defaluts value , validation etc for that document
let playlistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ctype: { type: String, required: true },
    video: { type: Number, required: true },
    author: { type: String, required: true },
    active: Boolean,
    date: { type: Date, default: Date.now }
});


//now we create model  from schema which will help us in creating documents.
//model is like table in sql
//a mongoose model is wrapper on mongoose schema
//mongoose model provides an inteface to database for creating ,quering ,updating , deleting records etc

//collection creation
let Playlist = mongoose.model('Playlist', playlistSchema);


//create document or insert  data into collection
// const reactPlaylist =new Playlist ({
//     name : "React js",
//     ctype : "front end",
//     video : 10,
//     author : "amart",
//     active :true,
// });
// reactPlaylist.save() 




//async await use  to wait till promise gets resolved  or rejected
//retrieve/read data from collection
// const createDocument = async () => {
//     try {
//         const reactPlaylist = new Playlist({
//             name: "React js",
//             ctype: "front end",
//             video: 10,
//             author: "amart",
//             active: true,
//         });
//         const result = await reactPlaylist.save()

//         console.log(result);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// createDocument();


//add multiple document 
const createDocument = async () => {
    try {
        const cPlaylist = new Playlist({
            name: " c",
            ctype: "back end",
            video: 150,
            author: "cpatel",
            active: true,
        })

        const cplusPlaylist = new Playlist({
            name: " c++",
            ctype: "back end",
            video: 10,
            author: "c++",
            active: true,
        })

       


        const result = await Playlist.insertMany([cPlaylist,cplusPlaylist])
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}
createDocument();



// read and  queries document 

// get all data
// const getDocument =async () => {
//     const result =await Playlist.find()
//     console.log(result)
// }
// getDocument()

// connection succesfull
// [
//   {
//     _id: new ObjectId('65f5dd57d63de17ab88783f8'),
//     name: 'React js',
//     ctype: 'front end',
//     video: 10,
//     author: 'amart',
//     active: true,
//     date: 2024-03-16T17:56:39.529Z,
//     __v: 0
//   },
//   {
//     _id: new ObjectId('65f7ddb8b1b8adde8c88fcc9'),
//     name: ' js',
//     ctype: 'front end',
//     video: 10,
//     author: 'amart',
//     active: true,
//     date: 2024-03-18T06:22:48.326Z,
//     __v: 0
//   },
//   {
//     _id: new ObjectId('65f7ddb8b1b8adde8c88fcca'),
//     name: ' pyhton',
//     ctype: 'back end',
//     video: 10,
//     author: 'amart',
//     active: true,
//     date: 2024-03-18T06:22:48.326Z,
//     __v: 0
//   },
//   {
//     _id: new ObjectId('65f7ddb8b1b8adde8c88fccb'),
//     name: ' java',
//     ctype: 'java end',
//     video: 10,
//     author: 'amart',
//     active: true,
//     date: 2024-03-18T06:22:48.326Z,
//     __v: 0
//   }
// ]


//find data whose ctype is back end
// const getDocument =async () => {
//     const result =await Playlist.find({ctype:"back end"})
//     console.log(result)
// }
// getDocument()

//[
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
    // ]


//find data whose ctype is back end and show only name of course
    // const getDocument =async () => {
    //     const result =await Playlist.find({ctype:"back end"}).select({name:1})
    //     console.log(result)
    // }
    // getDocument()
//[ { _id: new ObjectId('65f7ddb8b1b8adde8c88fcca'), name: ' pyhton' } ]



// //find data whose ctype is front end 
// const getDocument =async () => {
//     const result =await Playlist.find({ctype:"front end"})
//     console.log(result)
// }
// getDocument()

//[
    // {
    //     _id: new ObjectId('65f5dd57d63de17ab88783f8'),
    //     name: 'React js',
    //     ctype: 'front end',
    //     video: 10,
    //     author: 'amart',
    //     active: true,
    //     date: 2024-03-16T17:56:39.529Z,
    //     __v: 0
    //   },
    //   {
    //     _id: new ObjectId('65f7ddb8b1b8adde8c88fcc9'),
    //     name: ' js',
    //     ctype: 'front end',
    //     video: 10,
    //     author: 'amart',
    //     active: true,
    //     date: 2024-03-18T06:22:48.326Z,
    //     __v: 0
    //   }
    // ]
    


//find data whose ctype is front end  and show only name and show only one data
// const getDocument =async () => {
//     const result =await Playlist.find({ctype:"front end"}).select({name:1}).limit(1)
//     console.log(result)
// }
// getDocument()
//[ { _id: new ObjectId('65f5dd57d63de17ab88783f8'), name: 'React js' } ] 