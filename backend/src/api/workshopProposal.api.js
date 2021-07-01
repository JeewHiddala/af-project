const express = require('express');
const router = express.Router();
const workshopProposalController = require('../controllers/workshopProposalController');

module.exports = function () {

    router.post('/create', workshopProposalController.createWorkshopProposal);    
    router.get('/', workshopProposalController.getAllWorkshopProposalsDetails);       
    router.get('/:id', workshopProposalController.getSelectedWorkshopProposalDetails);        
    router.delete('/:id', workshopProposalController.deleteWorkshopProposal);         
    
    return router;
}