const express = require('express');
const router = express.Router();
const attendeeController = require('../controllers/attendee.controller');

module.exports = function () {
    router.post('/create', attendeeController.createAttendee);
    router.get('/:id',  attendeeController.getSelectedAttendeeDetails);
    router.patch('/update/:id', attendeeController.updateAttendee);
    router.delete('/:id', attendeeController.deleteAttendee);           
    router.get('/', attendeeController.getAllAttendeesDetails);       

    return router;
}