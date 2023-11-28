const responder = async ({res, success , data , message}  )=>{

    res.json({
        success : success || false ,
        data : data || null,
        message : message || null 
    })
}

export {responder }