const mongoose = require('mongoose');

const AttendeePaymentSchema = new mongoose.Schema({
    paymentMethod: {
        required: true,
        type: String
    },
    paymentSlip: {
        required: true,
        type: String
    },
    attendeeId: {
        required: true,
        type: mongoose.Schema.Types.ObjectId
    }
}, {timestamps: true})

const AttendeePayment = mongoose.model('attendeePayments', AttendeePaymentSchema)
module.exports = AttendeePayment