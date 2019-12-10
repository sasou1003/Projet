const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// create a schema
const UserSchema = new Schema({
    _id:{
        type : ObjectId,
        required : true
    },
    location: {
        type : String,
        required : true
    },
    personsInHouse:{
        type : Number,
        required : true
    },
    houseSize: {
        type: String,
        required : true
    }
});

var Usermodel =  mongoose.model('User', UserSchema,'User');

module.exports = Usermodel;