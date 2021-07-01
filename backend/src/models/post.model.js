const mongoose = require('mongoose');       //import mongoose

const PostSchema = new mongoose.Schema({    //make schema
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    submittedDate: { type: String, required: true, trim: true },
    status: { type: String, required: true, trim: true },
    approvedDate: { type: String, required: true ,trim: true },
    remarks: { type: String, required: true, trim: true },
    editors: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'editors'}],
});

const Post = mongoose.model('posts', PostSchema);        //give name for collection
module.exports = Post; 
