const mongoose = require('mongoose');       

const PresenterSchema = new mongoose.Schema({    
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    mobileNo: { type: Number, required: true, trim: true },
    userName: {type: String, required: true, trim: true},
    password: { type: String, required: true, trim: true },
    workplace: { type: String, required: true, trim: true },
    presenterType: { type: String, required: true, trim: true },
    sessionType: { type: String, required: true, trim: true },
    gender: { type: String, required: true, trim: true },
    jobRole: { type: String, required: true, trim: true },
    researchArea: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    workshopProposal: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'workshopProposal'}],
    researchPaper: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'researchPaper'}],
    reviewers:[{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'reviewers'}],
});

const Presenter = mongoose.model('presenter', PresenterSchema);      
module.exports = Presenter;