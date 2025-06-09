/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Limpa tabela
  await knex('categorias').del();

  // Insere categorias fixas
  await knex('categorias').insert([
    { descricao: 'Informática' },
    { descricao: 'Celulares' },
    { descricao: 'Beleza e Perfumaria' },
    { descricao: 'Mercado' },
    { descricao: 'Livros e Papelaria' },
    { descricao: 'Brinquedos' },
    { descricao: 'Moda' },
    { descricao: 'Bebê' },
    { descricao: 'Games' },
  ]);
};
