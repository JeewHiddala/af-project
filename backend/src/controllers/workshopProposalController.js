const mongoose = require("mongoose");
const WorkshopProposal = require('../models/workshopProposalModel');

const createWorkshopProposal = async (req, res) => {      
    if (req.body) {
        const workshopProposal = new WorkshopProposal(req.body);
        workshopProposal.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllWorkshopProposalsDetails = async (req, res) => {       
    await WorkshopProposal.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getSelectedWorkshopProposalDetails = async (req, res) => {         
    if (req.params && req.params.id) {
        await WorkshopProposal.findById(req.params.id)
        
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const updateSelectedWorkshopProposal = async (req, res) => {      
    if (req.params && req.params.id){
        const {id} = req.params;       
        const workshopProposal = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No workshopProposal With That id');    
        const updatedWorkshopProposal = await WorkshopProposal.findByIdAndUpdate(id, workshopProposal,{new : true});      
        res.json(updatedWorkshopProposal);
    }
}

const deleteWorkshopProposal = async (req, res) => {       
    if (req.params && req.params.id) {
        const {id} = req.params;           
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No workshopProposal with id: ${id}`);     
        await WorkshopProposal.findByIdAndRemove(id);        
        res.json({message: "workshopProposal deleted successfully."});
    }
}

module.exports = {
    createWorkshopProposal,
    getAllWorkshopProposalsDetails,
    getSelectedWorkshopProposalDetails,
    updateSelectedWorkshopProposal,
    deleteWorkshopProposal
};