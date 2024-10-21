const mongoose = require('mongoose')
const Mongo_URI = "mongodb://localhost:27017/jsbin"


const dbConnect = ()=>{
    mongoose.connect(Mongo_URI)
    .then(()=>{
        console.log("Mongodb connected.")
    })
}

module.exports = dbConnect
