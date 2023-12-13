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

const PostApiV1Login = async (req , res)=>{
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




export { PostApiV1Signup ,PostApiV1Login , GetApiV1Users }