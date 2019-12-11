const {ObjectId} = require('mongodb');
const User = require('../models/User.models.js');
//const Sensor = require('../models/Sensors.models.js');
//const Measure = require('../models/Measure.models.js');


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
exports.create = (req, res) => {
    // Vérification des erreurs
    if (!req.body.userId) {
        return res.status(400).send({
            message: 'remplissez le champ userId'
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
};


//Update un user
exports.update = (req, res) => {
    // Verification id
    if (!req.body.userId) {
        return res.status(400).send({
            message: 'Le champ ne doit pas être vide'
        });
    }

    if (!ObjectId.isValid(req.body.userId)) {
        return Promise.reject(new TypeError(`Invalid id: ${req.body.userId}`));
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(
        req.params.userId,
        {
            _id: ObjectId(req.body.userId),
            location: req.body.location,
            personsInHouse: req.body.personsInHouse,
            houseSize: req.body.houseSize
        },
    )
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: 'User not found with id ' + req.params.userId
                });
            }
            res.send(user);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'User not found with id ' + req.params.userId
                });
            }
            return res.status(500).send({
                message: 'Error updating user with id ' + req.params.userId
            });
        });
};


//Supprimer un user avec son id
exports.delete = (req, res) => {

    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: 'User not found with id ' + req.params.userId
                });
            }
            res.send({ message: 'User deleted successfully!' });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: 'User not found with id ' + req.params.userId
                });
            }
            return res.status(500).send({
                message: 'Could not delete user with id ' + req.params.userId
            });
        });
};

