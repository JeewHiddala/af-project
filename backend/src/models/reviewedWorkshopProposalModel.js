const mongoose = require('mongoose');       

const ReviewedWorkshopProposalSchema = new mongoose.Schema({    
    approvedDate: { type: Date},
    status: {type: String,  required: true, trim: true},
    title: {type: String,  required: true, trim: true},
    presenter: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'presenter'}],
    reviewers: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'reviewers'}],
    workshopProposalId: {type: mongoose.Schema.Types.ObjectId, required: false, ref: 'workshopProposal'},
      
});

const ReviewedWorkshopProposal = mongoose.model('reviewedWorkshopProposal', ReviewedWorkshopProposalSchema);      
module.exports = ReviewedWorkshopProposal;