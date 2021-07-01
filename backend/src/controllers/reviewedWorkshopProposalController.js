const mongoose = require("mongoose");
const ReviewedWorkshopProposal = require('../models/reviewedWorkshopProposalModel');

const createReviewedWorkshopProposal = async (req, res) => {      
    if (req.body) {
        const reviewedWorkshopProposal = new ReviewedWorkshopProposal(req.body);
        reviewedWorkshopProposal.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllReviewedWorkshopProposalsDetails = async (req, res) => {       
    await ReviewedWorkshopProposal.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getSelectedReviewerDetails = async (req, res) => {         
    if (req.params && req.params.id) {
        await ResearchPaper.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data : data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

module.exports = {
    createReviewedWorkshopProposal,
    getAllReviewedWorkshopProposalsDetails,
    getSelectedReviewerDetails
};
