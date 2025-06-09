const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex({
  client: 'pg',
  connection: process.env.DB_CONNECTION_STRING || process.env.URL_DB_Local,
});

module.exports = db;


