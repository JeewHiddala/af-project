const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controller');


module.exports = function () {
    router.post('/', loginController.login);
    
    return router;
}