const express = require('express');
const router = express.Router();
const editorController = require('../controllers/editor.controller');

module.exports = function () {
    router.post('/create', editorController.createEditor);        // create editor.
    router.get('/', editorController.getAllEditorsDetails);       //get all editors.
    router.get('/:id', editorController.getSelectedEditorDetails);       //get selected editor details.
    router.delete('/:id', editorController.deleteEditor);         //delete selected editor details.
    router.patch('/update/:id', editorController.updateSelectedEditor);  //update selected editor details.

    return router;
}