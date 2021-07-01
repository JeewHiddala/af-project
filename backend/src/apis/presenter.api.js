const express = require('express');
const router = express.Router();
const presenterController = require('../controllers/presenter.controller');

module.exports = function () {
    router.post('/create', presenterController.createPresenter);    
    router.get('/', presenterController.getAllPresentersDetails);       
    router.get('/:id', presenterController.getSelectedPresenterDetails);       
    router.delete('/:id', presenterController.deletePresenter);         
    router.patch('/update/:id', presenterController.updateSelectedPresenter);  

    return router;
}
