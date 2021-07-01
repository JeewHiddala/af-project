const Reviewer = require('../models/reviewerModel');     
const mongoose = require("mongoose");

const createReviewer = async (req, res) => {      
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

const getAllReviewersDetails = async (req, res) => {       
    await Reviewer.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getSelectedReviewerDetails = async (req, res) => {         
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

const updateSelectedReviewer = async (req, res) => {      
    if (req.params && req.params.id){
        const {id} = req.params;       
        const reviewer = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No reviewer With That id');    
        const updatedReviewer = await Reviewer.findByIdAndUpdate(id, reviewer,{new : true});      
        res.json(updatedReviewer);
    }
}

const deleteReviewer = async (req, res) => {       
    if (req.params && req.params.id) {
        const {id} = req.params;           
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No reviewer with id: ${id}`);     
        await Reviewer.findByIdAndRemove(id);        
        res.json({message: "reviewer deleted successfully."});
    }
}

module.exports = {
    createReviewer,
    getAllReviewersDetails,
    getSelectedReviewerDetails,
    updateSelectedReviewer,
    deleteReviewer,
    
};