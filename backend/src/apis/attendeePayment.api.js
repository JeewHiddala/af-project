const express = require('express');
const router = express.Router();
const attendeePaymentController = require('../controllers/attendeePayment.controller');
const upload = require('../middleware/upload')

module.exports = function () {
    router.post('/store', upload.single('paymentSlip'), attendeePaymentController.addAttendeePayment);
    
    return router;
}
