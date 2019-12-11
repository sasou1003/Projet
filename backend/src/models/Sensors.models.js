const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const SensorSchema = new Schema({
        _id:{
            type : ObjectId,
            required : true
        },
        creationDate: {
            type: Date,
            required: true
        },
        location: {
            type: String,
            required: true
        },

        userId:{
            type : ObjectId,
            required : true
        },
    });

var Sensormodel = mongoose.model('Sensors', SensorSchema, 'Sensor');

module.exports = Sensormodel;