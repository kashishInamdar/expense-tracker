import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

import { PostApiTransaction , GetApiTransactions , GetApiTransactionByUserId , DeleteApiTransactionById} from "./controllers/transaction.js";
import { responder } from "./util.js";
import User from "./models/user.js";
import { PostApiV1Signup , GetApiV1Users  } from "./controllers/user.js";

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
app.get('/api/transactions/users/:id',GetApiTransactionByUserId)
app.delete("/api/transactions/:id", DeleteApiTransactionById)

// ------------ User ------------

app.post('/api/v1/signup' ,  PostApiV1Signup)
app.post('/api/v1/login' , async (req , res)=>{
    const {email , password} = req.body;

    try{
        if(!email || !password){
            return res.json({
                success : false , 
                message : "Please provide email and password"
            })
        }
    
        const user = await User.findOne({
            email : email,
            password : password
        }).select("name email mobile address ")
    
        if(!user){
            return res.json({
                success : false , 
                message : "Invalide Credentials"
            });
        }
        res.json({
            success : true,
            data : user,
            message : "Login Successful"
        });
    }
    catch(err){
        res.json({
            success:false,
            massage:err.massage
        })
    }
   
})

app.get("/api/v1/users" , GetApiV1Users )

const PORT = process.env.PORT || 5000 ; 

app.listen(PORT , ()=>{
    console.log(`server runing on Port ${PORT}`)
})
