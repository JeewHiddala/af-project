const mongoose = require('mongoose');       

const ReviewedResearchPaperSchema = new mongoose.Schema({    
    approvedDate: { type: Date},
    status: {type: String,  required: true, trim: true},
    title: {type: String,  required: true, trim: true},
    presenter: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'presenter'}],
    reviewers: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'reviewers'}],
    researchPaperId: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'researchPaper'}]
    
});

const ReviewedResearchPaper = mongoose.model('reviewedResearchPaper', ReviewedResearchPaperSchema);      
module.exports = ReviewedResearchPaper;