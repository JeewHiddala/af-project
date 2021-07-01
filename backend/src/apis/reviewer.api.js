const express = require('express');
const router = express.Router();
const reviewerController = require('../controllers/reviewer.controller');

module.exports = function () {
    router.post('/create', reviewerController.createReviewer);        // create reviewer.
    router.get('/', reviewerController.getAllReviewersDetails);       //get all reviewers.
    router.get('/:id', reviewerController.getSelectedReviewerDetails);       //get selected reviewer details.
    router.delete('/:id', reviewerController.deleteReviewer);         //delete selected reviewer details.
    router.patch('/update/:id', reviewerController.updateSelectedReviewer);  //update selected reviewer details.

    return router;
}