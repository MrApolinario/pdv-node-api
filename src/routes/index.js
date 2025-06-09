const express = require('express'); 
const router = express.Router(); 
const pdvRoutes = require('./pdvRoutes'); 
 
router.use('/pdv', pdvRoutes); 
 
module.exports = router; 
