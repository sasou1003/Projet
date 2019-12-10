const {ObjectId} = require('mongodb');
const User = require('../models/User.models.js');
const Sensor = require('../models/Sensors.models.js');
const Measure = require('../models/Measure.models.js');


/* Tous les users de la database */
exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Erreur pour trouver les utilisateurs.'
            });
        });
};

// Trouver un user par Id
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: 'Utilisateur non trouvé avec id : ' + req.params.userId
                });
            }
            res.send(user);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Utilisateur non trouvé avec id :' + req.params.userId
                });
            }
            return res.status(500).send({
                message: 'Erreur pour trouver le user avec id ' + req.params.userId
            });
        });
};

//Création d'un user
/*exports.create = (req, res) => {
    // Vérification des erreurs
    if (!req.body.userId) {
        return res.status(400).send({
            message: 'remplissez le champ id'
        });
    }

    if (!ObjectId.isValid(req.body.userId)) {
        return Promise.reject(new TypeError(`Invalid id: ${req.body.userId}`));
    }

    // On enregistre les données entrées par l'utilisateur
    const user = new User({
        _id: ObjectId(req.body.userId),
        location: req.body.location,
        personsInHouse: req.body.personsInHouse,
        houseSize: req.body.houseSize
    });

    // Sauvegarde dans la BDD
    user
        .save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Erreur dans la création de l utilisateur.'
            });
        });
};*/

