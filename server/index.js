import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
import path from 'path';

import { PostApiTransaction , GetApiTransactions , GetApiTransactionById , GetApiTransactionByUserId , PutApiTransactionById , DeleteApiTransactionById} from "./controllers/transaction.js";
import { responder } from "./util.js";
import User from "./models/user.js";
import { PostApiV1Signup , PostApiV1Login , GetApiV1Users  } from "./controllers/user.js";

const app = express();
app.use(express.json());

const __dirname = path.resolve();

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
app.get("/api/transactions/:id" , GetApiTransactionById )
app.get('/api/transactions/users/:id',GetApiTransactionByUserId)
app.delete("/api/transactions/:id", DeleteApiTransactionById)
app.put("/api/transactions/:id", PutApiTransactionById)

// ------------ User ------------

app.post('/api/v1/signup' ,  PostApiV1Signup)
app.post('/api/v1/login' , PostApiV1Login)

app.get("/api/v1/users" , GetApiV1Users )

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
  }

const PORT = process.env.PORT || 5000 ; 

app.listen(PORT , ()=>{
    console.log(`server runing on Port ${PORT}`)
})
