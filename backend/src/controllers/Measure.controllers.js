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
    Measure.findById(req.params.measureid)
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
