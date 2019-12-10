const {ObjectId} = require('mongodb');
const User = require('../models/User.models.js');
const Sensor = require('../models/Sensors.models.js');



/* Tous les users de la database */
exports.findAll = (req, res) => {
    Sensor.find()
        .then(sensors => {
            res.status(200).json(sensors);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Erreur.'
            });
        });
};

// Trouver un user par Id
exports.findOne = (req, res) => {
    Sensor.findById(req.params.sensorId)
        .then(sensor => {
            if (!sensor) {
                return res.status(404).send({
                    message: 'Capteur non trouvé avec id : ' + req.params.sensorId
                });
            }
            res.send(sensor);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Capteur non trouvé avec id :' + req.params.sensorId
                });
            }
            return res.status(500).send({
                message: 'Erreur pour trouver le capteur avec id ' + req.params.sensorId
            });
        });
};