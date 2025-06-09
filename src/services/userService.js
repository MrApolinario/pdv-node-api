const knex = require('../database');

async function criarUsuario(dados) {
  const { nome, email, senha } = dados;
  // validações, hashing, etc...
  const usuario = await knex('usuarios').insert({ nome, email, senha }).returning('*');
  return usuario[0];
}

module.exports = {
  criarUsuario,
};
