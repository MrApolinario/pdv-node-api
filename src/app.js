require('dotenv').config(); 
const express = require('express'); 
const helmet = require('helmet'); 
const cors = require('cors'); 
const routes = require('./routes'); 
const errorHandler = require('./middlewares/errorHandler'); 
 
const app = express(); 
 
app.use(helmet()); 
app.use(cors()); 
app.use(express.json()); 
 
app.use('/api/v1', routes); 
 
app.use(errorHandler); 
 
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () =
    console.log("Server running on port "); 
}); 
 
module.exports = app; 
