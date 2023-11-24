import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

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




const PORT = process.env.PORT || 5000 ; 

app.listen(PORT , ()=>{
    console.log(`server runing on Port ${PORT}`)
})
