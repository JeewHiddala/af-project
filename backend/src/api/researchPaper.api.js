const express = require('express');
const router = express.Router();
const researchPaperController = require('../controllers/researchPaperController');

module.exports = function () {
    router.post('/create', researchPaperController.createResearchPaper);    
    router.get('/', researchPaperController.getAllResearchPapersDetails);       
    router.get('/:id', researchPaperController.getSelectedResearchPaperDetails);       
    router.delete('/:id', researchPaperController.deleteResearchPaper);         
    router.put('/update/:id', researchPaperController.updateSelectedResearchPaper);  

    return router;
}