const express = require('express');
const router = express.Router();
const presernterController = require('../controllers/presenterController');

module.exports = function () {
    router.post('/create', presernterController.createPresenter);    
    router.get('/', presernterController.getAllPresentersDetails);       
    router.get('/:id', presernterController.getSelectedPresenterDetails);       
    router.delete('/:id', presernterController.deletePresenter);         
    router.put('/update/:id', presernterController.updateSelectedPresenter);  

    return router;
}