const mongoose= require("mongoose");


//create schema 1st
const userSchema=new mongoose.Schema({

    name:String,
    email:String,
    age:Number,
    address:String,
    password:String
})

//create userModel

const User=mongoose.model('users',userSchema);
module.exports=User;