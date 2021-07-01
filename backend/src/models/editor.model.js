const mongoose = require('mongoose');       //import mongoose

const EditorSchema = new mongoose.Schema({    //make schema
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    nicNo: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    mobileNumber: { type: Number, required: true },
    userName: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    editorSalary: { type: Number, required: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'posts'}],
    admins: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'admins'}]
    
});

const Editor = mongoose.model('editors', EditorSchema);        //give name for collection
module.exports = Editor;
