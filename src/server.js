// server.js
const dotenv = require("dotenv");
const express = require("express");
const router = require("./routers");
const db = require("./database"); 

dotenv.config();

const app = express();
app.use(express.json());

// Testa a conexão
db.raw("SELECT 1")
  .then(() => {
    console.log("Conectado ao banco!");

    app.use(router);

    app.listen(process.env.PORT, () => {
      console.log(`Servidor ouvindo na porta ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao iniciar o servidor:", err);
  });

