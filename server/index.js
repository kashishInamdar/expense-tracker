import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

import Transaction from "./models/transaction.js";

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
    res.json({
        success : true ,
        message : "server health is ok"
    })
})

app.post('/api/transaction' , async (req , res)=>{
    const {amount , type , category , description } = req.body ;

    const transaction = new Transaction({
        amount,
        type,
        category,
        description,
    });
    try{
        const respons = await transaction.save()

        res.json({
            success : true,
            data : respons ,
            message : "transaction add successfuly"
        })
    }catch(err){
        res.json({
            success : false,
            message : err.message
        })

    }
    
})

app.get("/api/transactions" , async (req , res)=>{
    try{
        const transactions = await Transaction.find(); 

        res.json({
            success : true ,
            data : transactions,
            message : "Successfuly fatch all Transaction"
        })
    }catch(err){
        res.json({
            success : false ,
            message : err.message
        })
    }
    

})



const PORT = process.env.PORT || 5000 ; 

app.listen(PORT , ()=>{
    console.log(`server runing on Port ${PORT}`)
})
