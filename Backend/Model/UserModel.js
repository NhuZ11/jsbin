const mongoose =  require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: [true, 'Password is required']
    }
},{timestamps: true})

const User = mongoose.model("User", userSchema)
module.exports = User