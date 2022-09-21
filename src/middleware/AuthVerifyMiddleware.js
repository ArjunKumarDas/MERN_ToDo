const jwt = require('jsonwebtoken');


module.exports(req,res,next)=>{
    let Token=req.headers['token-key']
    jwt.verify(Token, 'SecreateKey1234', function(err, decoded){
        if(err){
            res.status(401).json({status:'unauthorized'})
        }
        else{
            // Get UserName From Decoded Token and Add with head request
            let username = decoded['data']['UserName']
            req.headers.username=username
            next();
        }
    })
}