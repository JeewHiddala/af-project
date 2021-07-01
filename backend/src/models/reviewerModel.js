const mongoose = require('mongoose');       

const ReviewerSchema = new mongoose.Schema({    
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    nicNo: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    mobileNumber: { type: Number, required: true },
    userName: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    reviewerSalary: { type: Number, required: true },
    admins: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'admins'}],
    reviewedWorkshopProposal: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'reviewedWorkshopProposal'}]
});

const Reviewer = mongoose.model('reviewers', ReviewerSchema);      
module.exports = Reviewer;