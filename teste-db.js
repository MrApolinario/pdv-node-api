require('dotenv').config();
const { db } = require('./src/database');

db.raw('SELECT 1')
  .then(() => {
    console.log('✅ Conectado ao banco com sucesso!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Erro de conexão:', err);
    process.exit(1);
  });

