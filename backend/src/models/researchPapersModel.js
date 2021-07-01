const mongoose = require('mongoose');       

const ResearchPaperSchema = new mongoose.Schema({    
    title: { type: String, required: true, trim: true },
    authors: { type: String, required: true, trim: true },
    conferenceName: { type: String, required: true, trim: true },
    researchArea: { type: String, required: true, trim: true },
    submissionFile: { type: String, required: true, trim: true },
    submittedDate: {type: Date},
    status: { type: String, required: true, trim: true },
    approvedDate: {type: Date},
    presenter: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'presenter'}],
    reviewers: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'reviewers'}]
});

const ResearchPaper = mongoose.model('researchPaper', ResearchPaperSchema);      
module.exports = ResearchPaper;