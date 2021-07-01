const express = require('express');
const router = express.Router();
const reviewerController = require('../controllers/reviewerController');

module.exports = function () {
    
    router.post('/create', reviewerController.createReviewer);    
    router.get('/', reviewerController.getAllReviewersDetails);       
    router.get('/:id', reviewerController.getSelectedReviewerDetails);       
    router.delete('/:id', reviewerController.deleteReviewer);           
    router.put('/update/:id', reviewerController.updateSelectedReviewer);  

    return router;
}