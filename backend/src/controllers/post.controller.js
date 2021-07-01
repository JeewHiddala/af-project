const Post = require('../models/post.model');       //import post model
const mongoose = require("mongoose");

const createPost = async (req, res) => {       //create a post to db.
    if (req.body) {
        const post = new Post(req.body);
        post.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllPostsDetails = async (req, res) => {       //get all posts 
    await Post.find({})
    .populate('editors','name')
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}
const getSelectedPostDetails = async (req, res) => {          //get selected post details.
    if (req.params && req.params.id) {
        await Post.findById(req.params.id)
        .populate('editors','name')
            .then(data => {
                res.status(200).send({ data : data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}
const updateSelectedPost = async (req, res) => {       //update selected post
    if (req.params && req.params.id){
        const {id} = req.params;        // fetching the id of the post.
        const post = req.body;

        if(!mongoose.Types.ObjectId.isValid(id))
         return res.status(404).send('No post With That id');      // validating the post id
        const updatedPost = await Post.findByIdAndUpdate(id, post,{new : true});      // find post and Update post
        res.json(updatedPost);
    }
}

const deletePost = async (req, res) => {               // delete selected post
    if (req.params && req.params.id) {
        const {id} = req.params;            // fetching the id of the post
        if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send(`No post with that id: ${id}`);       //validating the post id.
        await Post.findByIdAndRemove(id);         // find post and remove admin.
        res.json({message: "post deleted successfully."});
    }
}
module.exports = {
    createPost,
    getAllPostsDetails,
    getSelectedPostDetails,
    updateSelectedPost,
    deletePost
};