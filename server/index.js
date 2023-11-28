import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

import { PostApiTransaction , GetApiTransactions } from "./controllers/transaction.js";
import { responder } from "./util.js";
import User from "./models/user.js";
import { PostApiV1Signup , GetApiV1Signup } from "./controllers/user.js";

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

app.get('/api/v1/signup' , GetApiV1Signup)
const PORT = process.env.PORT || 5000 ; 

app.listen(PORT , ()=>{
    console.log(`server runing on Port ${PORT}`)
})
