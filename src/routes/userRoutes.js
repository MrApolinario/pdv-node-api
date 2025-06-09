const express = require('express');
const { cadastrarUsuario } = require('../controllers/userController');

const router = express.Router();

router.post('/usuarios', cadastrarUsuario);

module.exports = router;
