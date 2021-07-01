const mongoose = require("mongoose");
const Presenter = require('../models/presenterModel');

const createPresenter = async (req, res) => {      
    if (req.body) {
        const presenter = new Presenter(req.body);
        presenter.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllPresentersDetails = async (req, res) => {       
    await Presenter.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getSelectedPresenterDetails = async (req, res) => {         
    if (req.params && req.params.id) {
        await Presenter.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data : data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const updateSelectedPresenter = async (req, res) => {      
    if (req.params && req.params.id){
        const {id} = req.params;       
        const presenter = req.body;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No presenter With That id');    
        const updatedPresenter = await Presenter.findByIdAndUpdate(id, presenter,{new : true});      
        res.json(updatedPresenter);
    }
}

const deletePresenter = async (req, res) => {       
    if (req.params && req.params.id) {
        const {id} = req.params;           
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No presenter with id: ${id}`);     
        await Presenter.findByIdAndRemove(id);        
        res.json({message: "presenter deleted successfully."});
    }
}

module.exports = {
    createPresenter,
    getAllPresentersDetails,
    getSelectedPresenterDetails,
    updateSelectedPresenter,
    deletePresenter
};