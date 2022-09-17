const ProfileModel = require('../models/ProfileModel');
const jwt = require('jsonwebtoken');


exports.CreateProfile=(req,res)=>{
    let reqBody=req.Body;
    ProfileModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:'fail',data:data})
        }
        else{
            res.status(200).json({status:'success',data:data})
        }
    })
}

exports.UserLogin=(res,req)=>{
   
    let UserName = req.body['UserName'];
    let Password = req.body['Password'];

    ProfileModel.find( {UserName:UserName, Password:Password} (err,data)=>{
        if(err){
            res.status(400).json({status:'fail',data:err})
        }
        else{
            if(data.length>0){

                // Create Auth Token
                let Payload={exp: Math.floor(Date.now() / 1000) + (24*60 * 60), data:data[0]}
                let token = jwt.sign(Payload 'SecreateKey1234');

                res.status(200).json({status:'success', token:token, data:data})
            }
            else{
              res.status(401).json({status:"unauthorized"})
            }
    })
}
  
exports.SelectProfile=(req,res)=>{
    let UserName=""
    ProfileModel.find({UserName:UserName}(err.data)=>{
        if(err){
            res.status(400).json({status:'fail',data:data})
        }
        else{
            res.status(200).json({status:'success',data:data})
        }
    })
}