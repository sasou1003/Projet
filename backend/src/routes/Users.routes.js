var express = require('express');
var router = express.Router();

// we import our user controller
const users = require('../controllers/User.controllers');

/* Tous les users de la database */
router.get('/', users.findAll);

module.exports = router;