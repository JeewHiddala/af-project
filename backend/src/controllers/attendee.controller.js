const Attendee = require('../models/attendee.model');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


const createAttendee = async (req, res) => {
    if (req.body) {
        const attendee = new Attendee(req.body);

        //check for existing username
        if (await Attendee.findOne({ username: req.body.username })) {
            res.status(500).send({ error: 'Username is already taken' });
        }
        console.log("uname: " + req.body.username);

        // hash password
        if (req.body.password) {
            attendee.password = bcrypt.hashSync(req.body.password, 10);
        }
        await attendee.save()
            .then(data => {
                console.log("id: " + data._id);

                res.status(200).send({ data: data._id });
            })
            .catch(error => {
                res.status(400).send({ error: error.message });
            });
    }
}

const updateAttendee = async (req, res) => {
    if (req.params && req.params.id) {
        const { id } = req.params;
        
        const user = await Attendee.findById(id);

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Error: Details not found');
        
        //check uniqueness of username if changed
        if (user.username !== req.body.username && await Attendee.findOne({ username: req.body.username })) {
            res.status(500).send({ error: 'Username is already taken' });
        }

        // hash password if it was changed
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        }else{
            req.body.password = user.password;
        }
        const attendee = req.body;
        const updatedAttendee = await Attendee.findByIdAndUpdate(id, attendee, { new: true });
        console.log("update: " + updatedAttendee);
        res.status(200).send({ data: updatedAttendee._id });
        //res.json(updatedAttendee);
    }
}
const getAllAttendeesDetails = async (req, res) => {       
  await Attendee.find({})
      .then(data => {
          res.status(200).send({ data: data });
      })
      .catch(error => {
          res.status(500).send({ error: error.message });
      });
}

const getSelectedAttendeeDetails = async (req, res) => {         
  if (req.params && req.params.id) {
      await Attendee.findById(req.params.id)
          .then(data => {
              res.status(200).send({ data : data });
          })
          .catch(error => {
              res.status(500).send({ error: error.message });
          });
  }
}


const deleteAttendee = async (req, res) => {       
  if (req.params && req.params.id) {
      const {id} = req.params;           
      if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No attendee with id: ${id}`);     
      await Attendee.findByIdAndRemove(id);        
      res.json({message: "attendee deleted successfully."});
  }
}

module.exports = {
    createAttendee,
    updateAttendee,
    getAllAttendeesDetails,
    deleteAttendee,
    getSelectedAttendeeDetails
};