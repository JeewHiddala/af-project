const mongoose = require("mongoose");
const ResearchPaper = require('../models/researchPapersModel');

const createResearchPaper = async (req, res) => {      
    if (req.body) {
        const researchPaper = new ResearchPaper(req.body);
        researchPaper.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllResearchPapersDetails = async (req, res) => {       
    await ResearchPaper.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getSelectedResearchPaperDetails = async (req, res) => {         
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

const updateSelectedResearchPaper = async (req, res) => {      
    if (req.params && req.params.id){
        const {id} = req.params;       
        const researchPaper = req.body;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No ResearchPaper With That id');    
        const updatedResearchPaper = await ResearchPaper.findByIdAndUpdate(id, researchPaper,{new : true});      
        res.json(updatedResearchPaper);
    }
}

const deleteResearchPaper = async (req, res) => {       
    if (req.params && req.params.id) {
        const {id} = req.params;           
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No ResearchPaper with id: ${id}`);     
        await ResearchPaper.findByIdAndRemove(id);        
        res.json({message: "ResearchPaper deleted successfully."});
    }
}

 
module.exports = {
    createResearchPaper,
    getAllResearchPapersDetails,
    getSelectedResearchPaperDetails,
    updateSelectedResearchPaper,
    deleteResearchPaper,
    
    
};