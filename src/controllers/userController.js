const userService = require('../services/userService');

async function cadastrarUsuario(req, res) {
  try {
    const usuario = await userService.criarUsuario(req.body);
    return res.status(201).json(usuario);
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
}

module.exports = {
  cadastrarUsuario,
};
