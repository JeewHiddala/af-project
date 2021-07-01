const mongoose = require('mongoose');       //import mongoose

const AdminSchema = new mongoose.Schema({    //make schema
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    nicNo: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    mobileNumber: { type: Number, required: true },
    userName: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    salary: { type: Number, required: true },
    editors: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'editors'}],
    reviewers: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'reviewers'}]
});

const Admin = mongoose.model('admins', AdminSchema);        //give name for collection
module.exports = Admin;