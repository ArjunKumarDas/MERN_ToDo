const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    FristName:{type:String},
    LastName:{type:String},
    Email:{type:String, unique:true},
    Mobile:{type:String},
    City:{type:String},
    UserName:{type:String},
    Passward:{type:String},
}, {versionKey:false});
 
const ProfileModel = mongoose.model('Profile', DataSchema);
module.exports =ProfileModel;