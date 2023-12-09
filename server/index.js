import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

import { PostApiTransaction , GetApiTransactions } from "./controllers/transaction.js";
import { responder } from "./util.js";
import User from "./models/user.js";
import { PostApiV1Signup   } from "./controllers/user.js";

const app = express();
app.use(express.json());

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGOODB_URI) ;
    if(conn){
        console.log("MongooDB connected");
    }
}
connectDB();

app.get('/api/health' , async (req ,res)=>{
    responder({res , success : true , message : "server is ok" });
    // res.json({
    //     success : true ,
    //     message : "server health is ok"
    // })
})

// ----------- Transaction  --------------- 
app.post('/api/transaction' , PostApiTransaction)
app.get("/api/transactions" , GetApiTransactions )

// ------------ User ------------

app.post('/api/v1/signup' ,  PostApiV1Signup)

app.post('/api/v1/login' , async (req , res)=>{
    const {email , password} = req.body;
    if(!email || !password){
        return res.json({
            success : false , 
            message : "Please provide email and password"
        })
    }

    const user = await User.findOne({
        email : email,
        password : password
    }).select("name email mobile")

    if(user){
        return res.json({
            success : true,
            data : user,
            message : "Login Successful"
        });
    }
    else{
        return res.json({
            success : false , 
            message : "Invalide Credentials"
        });
    }
})

const PORT = process.env.PORT || 5000 ; 

app.listen(PORT , ()=>{
    console.log(`server runing on Port ${PORT}`)
})
