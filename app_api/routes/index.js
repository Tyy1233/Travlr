const express = require('express');
const router = express.Router();
const {expressjwt: jwt} = require('express-jwt');
const auth = jwt({
    secret: "secret",
    userProperty: 'payload',
    algorithms: ["HS256"]
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);
    
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;