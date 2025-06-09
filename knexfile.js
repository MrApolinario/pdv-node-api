require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.URL_DB_Local,
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.URL_DB_Prod,
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  }
};
