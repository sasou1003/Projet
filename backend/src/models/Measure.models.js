const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// create a schema
const measureSchema = new Schema({
    _id:{
        type : ObjectId,
        required : true
    },
    type:{
        type : String,
        required : true
    },
    creationDate:{
        type :  Date,
        required : true
    },
    sensorID:{
        type :  ObjectId,
        required : true
    },
    value: {
        type : Number,
        required : true
    }
});


module.exports = mongoose.model('Measure', measureSchema,'Measure');
