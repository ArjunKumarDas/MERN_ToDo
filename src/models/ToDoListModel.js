const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
    UserName:{type:String},
    ToDoSubject:{type:String},
    ToDoDescription:{type:String},
    ToDoStatus:{type:String, default:"New"},
    ToDoCreateDate:{type:Date, default:Date.now},
    ToDoUpdateDate:{type:Date, default:Date.now}




},{versionKey:false});

const ToDoListModel =mongoose.model('List', DataSchema)
module.exports=ToDoListModel;