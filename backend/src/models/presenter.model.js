const mongoose = require('mongoose');       

const PresenterSchema = new mongoose.Schema({    
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    mobileNo: { type: String, required: true, trim: true },
    username: {type: String, required: true, trim: true},
    password: { type: String, required: true, trim: true },
    workplace: { type: String, required: true, trim: true },
    presenterType: { type: String, required: true, trim: true },
    sessionType: { type: String, required: true, trim: true },
    jobRole: { type: String, required: true, trim: true },
    researchArea: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true }
});

const Presenter = mongoose.model('presenter', PresenterSchema);      
module.exports = Presenter;