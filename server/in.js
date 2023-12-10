const postApiLogin = async (req, res) => {
    const { email, password } = req.body;
    try{

    if (!email || !password) {
        return res.json({
            success: false,
            message: "please valid email or password !"
        })
    }
 
    const findeUser = await User.findOne({
        email: email,
        password: password
    }).select('name email mobile address gender')
    if (!findeUser) {
        res.json({
            success: false,
            message: 'User not found'
        })
    }
    res.json({
        success: true,
        data: findeUser,
        message: 'successfully login User'
    })
}
catch(err){
    res.json({
        success:false,
        message:err.message
    })
}
}