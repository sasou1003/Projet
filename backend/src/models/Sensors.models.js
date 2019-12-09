var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const SensorsSchema = new Schema({
        _id:{
            type : ObjectId,
            required : true
        },
        location: {
            type: String,
            required: true
        },
        creationDate: {
            type: Date,
            required: true
        }
        userId:{
            type : ObjectId,
            required : true
        },
    },
    {
        timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
    });

module.exports = mongoose.model('Sensors', SensorsSchema, 'Sensors');