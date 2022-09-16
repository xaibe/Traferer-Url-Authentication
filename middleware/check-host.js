module.exports = (req, res, next) => {
    try{
        const referer=req.headers.referer;
        console.log(referer);
        if(referer==="http://localhost:3002/"){
            next();
        }
        else{
            throw error;
        }
    }catch(error){
        res.send({
            status:401,
            message:'Host Auth failed Unauthorized',
           })

    }
};