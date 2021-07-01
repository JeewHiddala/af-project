const mongoose = require('mongoose');       

const AttendeeSchema = new mongoose.Schema({    
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    mobileNo: { type: Number, required: true, trim: true },
    username: {type: String, required: true, trim: true},
    password: { type: String, required: true, trim: true },
    workplace: { type: String, required: true, trim: true },
    jobRole: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    country:{ type: String, required: true, trim: true },
    emergencyContactNo: { type: Number, required: true },
    emergencyContactName: { type: String, required: true, trim: true }

});

const Attendee = mongoose.model('attendee', AttendeeSchema);      
module.exports = Attendee;