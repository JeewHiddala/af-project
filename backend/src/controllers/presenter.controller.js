const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const Presenter = require('../models/presenter.model');

const createPresenter = async (req, res) => {      
    if (req.body) {
        const presenter = new Presenter(req.body);

        //check for existing username
        if (await Presenter.findOne({ username: req.body.username })) {
            res.status(500).send({ error: 'Username is already taken' });
        }
        console.log("uname: " + req.body.username);

        // hash password
        if (req.body.password) {
            presenter.password = bcrypt.hashSync(req.body.password, 10);
        }
        await presenter.save()
            .then(data => {
                console.log("id: " + data._id);

                res.status(200).send({ data: data._id });
            })
            .catch(error => {
                res.status(400).send({ error: error.message });
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
        const { id } = req.params;
        
        const user = await Presenter.findById(id);

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Error: Details not found');
        
        //check uniqueness of username if changed
        if (user.username !== req.body.username && await Presenter.findOne({ username: req.body.username })) {
            res.status(500).send({ error: 'Username is already taken' });
        }

        // hash password if it was changed
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        }else{
            req.body.password = user.password;
        }
        const presenter = req.body;
        const updatedPresenter = await Presenter.findByIdAndUpdate(id, presenter, { new: true });
        console.log("update: " + updatedPresenter);
        res.status(200).send({ data: updatedPresenter._id });
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