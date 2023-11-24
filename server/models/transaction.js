import { model , Schema } from "mongoose"

const trancationSchema = new Schema({

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
        emun : ['food' , 'education' , 'entertenment' , 'shoping' , 'travel' , 'other' ],
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