const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

module.exports = function () {
    router.post('/create', adminController.createAdmin);        // create admin.
    router.get('/', adminController.getAllAdminsDetails);       //get all admin.
    router.get('/:id', adminController.getSelectedAdminDetails);       //get selected admin details.
    router.delete('/:id', adminController.deleteAdmin);         //delete selected admin details.
    router.patch('/update/:id', adminController.updateSelectedAdmin);  //update selected admin details.
    router.post('/totalsalary', adminController.calculateTotalAdminsSalary);      //get all admins Total salary.

    return router;
}