const errorHandler =  (err,req,res, next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)
    res.json({
        message: err.message,
        //show error message if env is development
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports =  {errorHandler}