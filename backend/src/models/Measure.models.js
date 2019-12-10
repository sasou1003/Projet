const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// create a schema
const MeasureSchema = new Schema({
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

var Measuremodel = mongoose.model('Measure', MeasureSchema,'Measure');

module.exports = Measuremodel;
