const mongoose = require("mongoose");
const ReviewedResearchPaper = require('../models/reviewedResearchPaperUploadModel');

const createReviewedResearchPaper = async (req, res) => {      
    if (req.body) {
        const reviewedResearchPaper = new ReviewedResearchPaper(req.body);
        reviewedResearchPaper.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllreviewedResearchPapersDetails = async (req, res) => {       
    await ReviewedResearchPaper.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getSelectedReviewedResearchPaperDetails = async (req, res) => {         
    if (req.params && req.params.id) {
        await ReviewedResearchPaper.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data : data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


module.exports = {
    createReviewedResearchPaper,
    getAllreviewedResearchPapersDetails,
    getSelectedReviewedResearchPaperDetails
};
