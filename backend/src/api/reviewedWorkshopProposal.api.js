const express = require('express');
const router = express.Router();
const reviewedWorkshopProposalController = require('../controllers/reviewedWorkshopProposalController');

module.exports = function () {
    router.post('/create', reviewedWorkshopProposalController.createReviewedWorkshopProposal);    
    router.get('/', reviewedWorkshopProposalController.getAllReviewedWorkshopProposalsDetails); 
    router.get('/:id', reviewedWorkshopProposalController.getSelectedReviewerDetails);      
     
    return router;
}