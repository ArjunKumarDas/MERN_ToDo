const ToDoListModel = require('../models/ToDoListModel');

exports.CreateToDo=(req,res)=>{
    let reqBody=req.body;
    ToDoListModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Fail", data:err})
        }
        else{
            res.status(200).json({status:"Sucess", data:data})
        }
    })
}