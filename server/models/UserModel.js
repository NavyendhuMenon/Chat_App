

const mongoose = require ('mongoose')

const userSchema =  new mongoose.Schema({
    name : {
        type : String,
        required : [true, "provide name"]
    },
    email : {
        type : String,
        required : [true,"provide email"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "provide password"]
    },
    profile_pic : {
        type : String,
        default : ""
    },
    isAdmin :{
        type : Boolean,
        default : false
    }
},{
    timestamps : true
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel