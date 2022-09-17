const jwt = require('jsonwebtoken');


module.exports(req,res,next)=>{
    let token=req.headers['token-key']
    jwt.verify(token, 'SecreateKey1234'), function(err, decoded){
        if(err){
            res.status(401).json({status:'unauthorized'})
        }
        else{
            
            next();
        }
    }
}