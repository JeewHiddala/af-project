//const mongoose = require('mongoose');
const AttendeePayment = require('../models/attendeePayment.model');

const addAttendeePayment = async (req, res) => {
    let attendeePayment = new AttendeePayment({
        paymentMethod: req.body.paymentMethod,
        attendeeId: req.body.attendeeId
    })
    if (req.file) {
        attendeePayment.paymentSlip = req.file.path
    }
    attendeePayment.save()
        .then(response => {
            res.json({
                message: 'Payment added'
            })
        })
        .catch(error => {
            res.json({
                message: 'Payment not added'
            })
        })
}



module.exports = {
    addAttendeePayment
};