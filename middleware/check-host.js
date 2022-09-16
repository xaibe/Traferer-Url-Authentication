module.exports = (req, res, next) => {
    
        const referer=req.headers.referer;
        console.log(referer);
        if(referer==="http://localhost:3000/"){
            next();
        }
        else{
            next({
                message: 'Host Auth failed Unauthorized',
                status: 401
            });  
        }
     
};