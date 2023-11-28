import {Schema , model } from "mongoose"

const userSchema = new Schema({
    name : {
        type : String ,
        require : true
    },
    email : {
        type : String,
        require :true ,
        unique : true
    },
    mobile : {
        type : String,
        require : true ,
        unique : true
    },
    address: {
        type : String,
        require : true
    },
    password: {
        type : String,
        require : true
    },
    grnder:{
        type:String,
        enum : ["male" , "female" , "other"],
        require : true
    }
})

const User = model("User" , userSchema);
 
export default User