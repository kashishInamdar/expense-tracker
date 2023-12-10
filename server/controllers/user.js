import User from "../models/user.js";

const PostApiV1Signup = async (req ,res)=>{
    const {name , email , gender , password , address , mobile} = req.body;

    const users = new User({
        name,
        email,
        gender,
        password,
        address,
        mobile
    })

    try{
        const userdata = await users.save()

        res.status(200).json({
            success : true ,
            data :userdata,
            message : "Successfully get user info"
        })
    }
    catch(err){
        
        res.json({
            success : false,
            message : err.message
        })

    }
   
}

const GetApiV1Users = async (req ,res) =>{
    try{
        const Transaction = await User.find()

        res.status(201).json({
            success : true,
            data : Transaction , 
            massage : "Successfuly get all tarnsaction"
        })

    }
    catch(err){
        res.status(400).json({
            success : false,
            message : err.massage
        })
    }
}




export { PostApiV1Signup , GetApiV1Users }