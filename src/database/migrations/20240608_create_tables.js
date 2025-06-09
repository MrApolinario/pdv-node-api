/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  // Tabela usuarios
  await knex.schema.createTable('usuarios', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable().unique();
    table.string('senha').notNullable();
  });

  // Tabela categorias
  await knex.schema.createTable('categorias', (table) => {
    table.increments('id').primary();
    table.string('descricao').notNullable();
  });

  // Tabela produtos
  await knex.schema.createTable('produtos', (table) => {
    table.increments('id').primary();
    table.string('descricao').notNullable();
    table.integer('quantidade_estoque').notNullable();
    table.integer('valor').notNullable(); // valor em centavos
    table.integer('categoria_id').unsigned().notNullable()
      .references('id').inTable('categorias').onDelete('RESTRICT');
    table.string('produto_imagem'); // opcional
  });

  // Tabela clientes
  await knex.schema.createTable('clientes', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable().unique();
    table.string('cpf').notNullable().unique();
    table.string('cep');
    table.string('rua');
    table.string('numero');
    table.string('bairro');
    table.string('cidade');
    table.string('estado');
  });

  // Tabela pedidos
  await knex.schema.createTable('pedidos', (table) => {
    table.increments('id').primary();
    table.integer('cliente_id').unsigned().notNullable()
      .references('id').inTable('clientes').onDelete('RESTRICT');
    table.text('observacao');
    table.integer('valor_total').notNullable(); // em centavos
  });

  // Tabela pedido_produtos
  await knex.schema.createTable('pedido_produtos', (table) => {
    table.increments('id').primary();
    table.integer('pedido_id').unsigned().notNullable()
      .references('id').inTable('pedidos').onDelete('CASCADE');
    table.integer('produto_id').unsigned().notNullable()
      .references('id').inTable('produtos').onDelete('RESTRICT');
    table.integer('quantidade_produto').notNullable();
    table.integer('valor_produto').notNullable(); // em centavos
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('pedido_produtos');
  await knex.schema.dropTableIfExists('pedidos');
  await knex.schema.dropTableIfExists('clientes');
  await knex.schema.dropTableIfExists('produtos');
  await knex.schema.dropTableIfExists('categorias');
  await knex.schema.dropTableIfExists('usuarios');
};
