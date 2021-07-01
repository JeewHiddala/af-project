const express = require('express');
const router = express.Router();
const reviewedResearchPaperUploadController = require('../controllers/reviewedResearchPaperUploadController');

module.exports = function () {
    router.post('/create', reviewedResearchPaperUploadController.createReviewedResearchPaper);    
    router.get('/', reviewedResearchPaperUploadController.getAllreviewedResearchPapersDetails); 
    router.get('/:id', reviewedResearchPaperUploadController.getSelectedReviewedResearchPaperDetails);      
    
    return router;
}