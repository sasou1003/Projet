
// Patches
const {inject, errorHandler} = require('express-custom-error');
inject(); // Patch express in order to use async / await syntax

// Require Dependencies
require('dotenv').config();

const http = require('http');

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');


const logger = require('./util/logger');

// Load .env Enviroment Variables to process.env
const port = process.env.PORT;
const mongoDbUri = process.env.DB_URI || 'localhost:27017';
const mongoDbName = process.env.DB_NAME || 'DashboardProject' ;


// Instantiate an Express Application
const app = express();

//Connection BDD
mongoose.connect(`mongodb://${mongoDbUri}/${mongoDbName}`,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log(`Connexion à MongoDB échouée : ${mongoDbDatabase}!`));



// Configure Express App Instance
app.use(express.json( { limit: '50mb' } ));
app.use(express.urlencoded( { extended: true, limit: '10mb' } ));

// Configure custom logger middleware
app.use(logger.dev, logger.combined);

app.use(cookieParser());
app.use(cors());
app.use(helmet());

// This middleware adds the json header to every response
app.use('*', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
})

// Assign Routes

app.use('/', require('./routes/router.js'));


// Handle errors
app.use((err, req, res, next) => { // Print errors (if any)
    if(err)
        console.error("Error: ", err);
    next();
});
app.use(errorHandler()); // Respond to errors

// Handle not valid route
app.use('*', (req, res) => {
    res
    .status(404)
    .json( {status: false, message: 'Endpoint Not Found'} );
})

// Open Server on selected Port
app.listen(
    port,
    () => console.info('Server listening on port ', port)
);