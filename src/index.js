require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(helmet());
app.use(express.json());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
