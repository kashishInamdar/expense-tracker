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




export { PostApiV1Signup  }