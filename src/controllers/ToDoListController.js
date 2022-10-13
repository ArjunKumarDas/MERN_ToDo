const ToDoListModel = require('../models/ToDoListModel');

exports.CreateToDo=(req,res)=>{
    let reqBody=req.body;

    let ToDoSubject= reqBody['ToDoSubject']
    let ToDoDescription= reqBody['ToDoDescription']
    let UserName = req.headers['username']
    let ToDoStatus = "NEW"
    let ToDoCreateDate = Date.now();
    let ToDoUpdateDate = Date.now();

    let PostBody={
        UserName:UserName,
        ToDoSubject:ToDoSubject,
        ToDoDescription:ToDoDescription,
        ToDoStatus:ToDoStatus,
        ToDoCreateDate:ToDoCreateDate,
        ToDoUpdateDate:ToDoUpdateDate
    }



    ToDoListModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Fail", data:err})
        }
        else{
            res.status(200).json({status:"Sucess", data:data})
        }
    })
}

exports.SelectToDo=(req,res)=>{
    let UserName=req.headers['username']
    ToDoListModel.find({UserName:UserName},(err, data) =>{
        if(err){
            res.status(400).json({status:'fail',data:data})
        }
        else{
            res.status(200).json({status:'success',data:data})
        }
    })
}


exports.UpdateToDo=(req,res)=>{
  let ToDoSubject = req.body['ToDoSubject'];
  let ToDoDescription = req.body['ToDoDescription'];
  let _id = req.body['_id'];
  let ToDoUpdateDate = Date.now();
  let PostBody={
    ToDoSubject:ToDoSubject,
    ToDoDescription:ToDoDescription,
    ToDoUpdateDate:ToDoUpdateDate
  }
  ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
    if(err){
        res.status(400).json({status:'fail',data:data})
    }
    else{
        res.status(200).json({status:'success',data:data})
    }
  })
}


exports.UpdateStatusToDo=(req,res)=>{
    let ToDoStatus = req.body['ToDoStatus'];
    let _id = req.body['_id'];
    let ToDoUpdateDate = Date.now();
    let PostBody={
      ToDoStatus:ToDoStatus,
      ToDoUpdateDate:ToDoUpdateDate
    }
    ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
      if(err){
          res.status(400).json({status:'fail',data:data})
      }
      else{
          res.status(200).json({status:'success',data:data})
      }
    })
  }