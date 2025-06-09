const express = require('express'); 
const router = express.Router(); 
const pdvController = require('../controllers/pdvController'); 
 
router.get('/', pdvController.getAll); 
router.post('/', pdvController.create); 
 
module.exports = router; 
