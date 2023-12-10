import { model , Schema } from "mongoose"

const trancationSchema = new Schema({
    user :{
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    amount : {
        type: Number,
        requeired : true,
    },
    type: {
        type: String,
        enum : ['credit' , 'debit'],
        required : true 
    },
    catagory: {
        type : String,
        enum : [ "food" , "entertainement" , "shopping", "rent" ,"travel" , "education" ,"salary" ,"freelancing" , "side-hussle" , "other" ],
        default : "other"
    },
    description : {
        type : String
    }
},{
    timestamps : true
})

const Transaction = model("Transaction" ,trancationSchema )

export default Transaction