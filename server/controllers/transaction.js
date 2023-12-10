import Transaction from "../models/transaction.js";
import { responder } from "../util.js";

const PostApiTransaction = async (req, res) => {
    const { amount, type, catagory, description, user } = req.body;

    const transaction = new Transaction({
        user,
        amount,
        type,
        catagory,
        description,
    });
    try {
        const respons = await transaction.save()

        responder({ res, success: true, data: respons, message: "transaction add successfuly" })

        // res.json({
        //     success : true,
        //     data : respons ,
        //     message : "transaction add successfuly"
        // })
    } catch (err) {

        responder({ message: err.message })
        // res.json({
        //     success : false,
        //     message : err.message
        // })

    }

}

const GetApiTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();

        responder({ res, success: true, data: transactions, message: "Successfuly fatch all Transaction" })

    } catch (err) {

        responder({ message: err.message })
    }

}

const GetApiTransactionByUserId = async (req, res) => {
    try {
        const { id } = req.params;

        const userTransaction = await Transaction.find({ user: id }).populate('user')

        userTransaction.forEach((singleTransaction) => {
            singleTransaction.user.password = undefined;
        })
        res.json({
            success: true,
            data: userTransaction,
            message: "fetch user transaction"
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
}

const DeleteApiTransactionById = async (req, res) => {
    const { id } = req.params;

    try {
        const deletTran = await Transaction.deleteOne({ _id: id })

        res.json({
            success: true,
            data: deletTran,
            massage: "Delete Transaction"
        })
    }catch(err){
        res.json({
            success : false,
            massage : err.massage
        })
    }
}

export { PostApiTransaction, GetApiTransactions, GetApiTransactionByUserId, DeleteApiTransactionById };