import Transaction from "../models/transaction.js";
const PostApiTransaction =  async (req , res)=>{
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
    
}

const GetApiTransactions = async (req , res)=>{
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
    
}

export {PostApiTransaction , GetApiTransactions} ;