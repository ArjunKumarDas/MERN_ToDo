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