const mongoose = require('mongoose');       

const WorkshopProposalSchema = new mongoose.Schema({    
    content: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    venue: { type: String, required: true, trim: true },
    date: {type: Date, required: true, trim: true},
    presenter: { type: String, required: true, trim: true },
    organizers: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    status: { type: String, required: true, trim: true },
    document: { type: String, required: true, trim: true },
    presenter: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'presenter'}],
    reviewedWorkshopProposal: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'reviewedWorkshopProposal'}]
});

const WorkshopProposal = mongoose.model('workshopProposal', WorkshopProposalSchema);      
module.exports = WorkshopProposal;