const {ObjectId} = require('mongodb');
const Measure = require('../models/Measure.models.js');


/* Tous les users de la database */
exports.findAll = (req, res) => {
    Measure.find()
        .then(measures => {
            res.status(200).json(measures);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Erreur pour trouver les utilisateurs.'
            });
        });
};

// Trouver une mesure par Id
exports.findOne = (req, res) => {
    Measure.findById(req.params.measureId)
        .then(measure => {
            if (!measure) {
                return res.status(404).send({
                    message: 'Utilisateur non trouvé avec id : ' + req.params.measureId
                });
            }
            res.send(measure);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Utilisateur non trouvé avec id :' + req.params.measureId
                });
            }
            return res.status(500).send({
                message: 'Erreur pour trouver le user avec id ' + req.params.measureId
            });
        });
};

//Création et sauvegarde d'une mesure
exports.create = (req, res) => {
    // Si pas d'id ou id invalide
    if (!req.body.measureId) {

        return res.status(400).send({
            message: 'id can not be empty'
        });
    }

    if (!ObjectId.isValid(req.body.measureId)) {
        return Promise.reject(new TypeError(`Invalid id: ${req.body.measureId}`));
    }

    // Création nouvelle mesure
    const measure = new Measure({
        _id: ObjectId(req.body.measureId),
        type: req.body.type,
        creationDate: req.body.creationDate,
        sensorID: ObjectId(req.body.sensorID),
        value: req.body.value
    });

    // Sauvegarde dans la bdd
    measure
        .save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Erreur dans la création de la measure.'
            });
        });
};


//Update une mesure par son id
exports.update = (req, res) => {
    // Verifier id présent ou valide
    if (!req.body.measureId) {
        return res.status(400).send({
            message: 'id can not be empty'
        });
    }

    if (!ObjectId.isValid(req.body.measureId)) {
        return Promise.reject(new TypeError(`Invalid id: ${req.body.measureId}`));
    }

    // Find measure and update it with the request body
    Measure.findByIdAndUpdate(
        req.params.measureId,
        {
            _id: ObjectId(req.body.measureId),
            type: req.body.type,
            creationDate: req.body.creationDate,
            sensorID: ObjectId(req.body.sensorID),
            value: req.body.value
        }
    )
        .then(measure => {
            if (!measure) {
                return res.status(404).send({
                    message: 'Measure not found with id ' + req.params.measureId
                });
            }
            res.send(measure);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Measure not found with id ' + req.params.measureId
                });
            }
            return res.status(500).send({
                message: 'Error updating Measure with id ' + req.params.measureId
            });
        });
};


//Suppression mesure par son id
exports.delete = (req, res) => {
    Measure.findByIdAndRemove(req.params.measureId)
        .then(measure => {
            if (!measure) {
                return res.status(404).send({
                    message: 'Measure not found with id ' + req.params.measureId
                });
            }
            res.send({ message: 'Measure deleted successfully!' });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: 'Measure not found with id ' + req.params.measureId
                });
            }
            return res.status(500).send({
                message: 'Could not Measure sensor with id ' + req.params.measureId
            });
        });
};
