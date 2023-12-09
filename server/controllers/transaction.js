import Transaction from "../models/transaction.js";
import { responder } from "../util.js";

const PostApiTransaction =  async (req , res)=>{
    const {amount , type , catagory , description , user } = req.body ;

    const transaction = new Transaction({
        user,
        amount,
        type,
        catagory,
        description,
    });
    try{
        const respons = await transaction.save()

        responder({ res , success: true , data : respons , message: "transaction add successfuly" })

        // res.json({
        //     success : true,
        //     data : respons ,
        //     message : "transaction add successfuly"
        // })
    }catch(err){

        responder({message : err.message})
        // res.json({
        //     success : false,
        //     message : err.message
        // })

    }
    
}

const GetApiTransactions = async (req , res)=>{
    try{
        const transactions = await Transaction.find(); 

        responder({ res, success:true , data: transactions , message : "Successfuly fatch all Transaction" })

    }catch(err){

        responder({message : err.message})
    }
    
}

export {PostApiTransaction , GetApiTransactions} ;