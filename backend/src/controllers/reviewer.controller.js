const Reviewer = require('../models/reviewer.model');       //import reviewer model
const mongoose = require("mongoose");

const createReviewer = async (req, res) => {       //create a reviewer to db.
    if (req.body) {
        const reviewer = new Reviewer(req.body);
        reviewer.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllReviewersDetails = async (req, res) => {       //get all reviewers details.
    await Reviewer.find({})
    .populate('admins','name')
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getSelectedReviewerDetails = async (req, res) => {          //get selected reviewer details.
    if (req.params && req.params.id) {
        await Reviewer.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data : data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const updateSelectedReviewer = async (req, res) => {       //update selected reviewer
    if (req.params && req.params.id){
        const {id} = req.params;        // fetching the id of the reviewer.
        const reviewer = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No reviewer With That id');      // validating the reviewer id
        const updatedReviewer = await Reviewer.findByIdAndUpdate(id, reviewer,{new : true});      // find reviewer and Update reviewer
        res.json(updatedReviewer);
    }
}

const deleteReviewer = async (req, res) => {               // delete selected reviewer
    if (req.params && req.params.id) {
        const {id} = req.params;            // fetching the id of the reviewer
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No reviewer with id: ${id}`);       //validating the reviewer id.
        await Reviewer.findByIdAndRemove(id);         // find reviewer and remove reviewer.
        res.json({message: "reviewer deleted successfully."});
    }
}

module.exports = {
    createReviewer,
    getAllReviewersDetails,
    getSelectedReviewerDetails,
    updateSelectedReviewer,
    deleteReviewer
};