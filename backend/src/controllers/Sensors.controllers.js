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


//Création et sauvegarde d'un capteur
exports.create = (req, res) => {
    // id invalide ou non présent
    if (!req.body.sensorId) {

        return res.status(400).send({
            message: 'id can not be empty'
        });
    }

    if (!ObjectId.isValid(req.body.sensorId)) {
        return Promise.reject(new TypeError(`Invalid id: ${req.body.sensorId}`));
    }

    // Création d'un capteur
    const sensor = new Sensor({
        _id: ObjectId(req.body.sensorId),
        creationDate: req.body.creationDate,
        location: req.body.location,
        userID: ObjectId(req.body.userID)
    });

    // Sauvegarde capteur dans la bdd
    sensor
        .save()
        .then(data => {
            // we wait for insertion to be complete and we send the newly user integrated
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Sensor.'
            });
        });
};


//Update un capteur par son id
exports.update = (req, res) => {
    // id incoonu ou invalide
    if (!req.body.sensorId) {
        return res.status(400).send({
            message: 'id can not be empty'
        });
    }

    if (!ObjectId.isValid(req.body.sensorId)) {
        return Promise.reject(new TypeError(`Invalid id: ${req.body.sensorId}`));
    }

    // Find sensor and update it with the request body
    Sensor.findByIdAndUpdate(
        req.params.sensorId,
        {
            _id: ObjectId(req.body.sensorId),
            creationDate: req.body.creationDate,
            location: req.body.location,
            userID: ObjectId(req.body.userID)
        }
    )
        .then(sensor => {
            if (!sensor) {
                return res.status(404).send({
                    message: 'Sensor not found with id ' + req.params.sensorId
                });
            }
            res.send(sensor);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Sensor not found with id ' + req.params.sensorId
                });
            }
            return res.status(500).send({
                message: 'Error updating Sensor with id ' + req.params.sensorId
            });
        });
};


//Suppression d'un capteur avec son id
exports.delete = (req, res) => {
    Sensor.findByIdAndRemove(req.params.sensorId)
        .then(sensor => {
            if (!sensor) {
                return res.status(404).send({
                    message: 'Sensor not found with id ' + req.params.sensorId
                });
            }
            res.send({ message: 'Sensor deleted successfully!' });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: 'Sensor not found with id ' + req.params.sensorId
                });
            }
            return res.status(500).send({
                message: 'Could not delete sensor with id ' + req.params.sensorId
            });
        });
};