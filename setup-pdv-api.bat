@echo off
REM Criar pastas
mkdir src
mkdir src\controllers
mkdir src\routes
mkdir src\models
mkdir src\services
mkdir src\middlewares
mkdir src\config
mkdir src\utils

REM Criar arquivo app.js
echo require('dotenv').config(); > src\app.js
echo const express = require('express'); >> src\app.js
echo const helmet = require('helmet'); >> src\app.js
echo const cors = require('cors'); >> src\app.js
echo const routes = require('./routes'); >> src\app.js
echo const errorHandler = require('./middlewares/errorHandler'); >> src\app.js
echo. >> src\app.js
echo const app = express(); >> src\app.js
echo. >> src\app.js
echo app.use(helmet()); >> src\app.js
echo app.use(cors()); >> src\app.js
echo app.use(express.json()); >> src\app.js
echo. >> src\app.js
echo app.use('/api/v1', routes); >> src\app.js
echo. >> src\app.js
echo app.use(errorHandler); >> src\app.js
echo. >> src\app.js
echo const PORT = process.env.PORT ^|^| 3000; >> src\app.js
echo app.listen(PORT, () => { >> src\app.js
echo     console.log(^"Server running on port %PORT%^"); >> src\app.js
echo }); >> src\app.js
echo. >> src\app.js
echo module.exports = app; >> src\app.js

REM Criar arquivo routes\index.js
echo const express = require('express'); > src\routes\index.js
echo const router = express.Router(); >> src\routes\index.js
echo const pdvRoutes = require('./pdvRoutes'); >> src\routes\index.js
echo. >> src\routes\index.js
echo router.use('/pdv', pdvRoutes); >> src\routes\index.js
echo. >> src\routes\index.js
echo module.exports = router; >> src\routes\index.js

REM Criar arquivo routes\pdvRoutes.js
echo const express = require('express'); > src\routes\pdvRoutes.js
echo const router = express.Router(); >> src\routes\pdvRoutes.js
echo const pdvController = require('../controllers/pdvController'); >> src\routes\pdvRoutes.js
echo. >> src\routes\pdvRoutes.js
echo router.get('/', pdvController.getAll); >> src\routes\pdvRoutes.js
echo router.post('/', pdvController.create); >> src\routes\pdvRoutes.js
echo. >> src\routes\pdvRoutes.js
echo module.exports = router; >> src\routes\pdvRoutes.js

REM Criar arquivo controllers\pdvController.js
echo const pdvService = require('../services/pdvService'); > src\controllers\pdvController.js
echo. >> src\controllers\pdvController.js
echo exports.getAll = async (req, res, next) => { >> src\controllers\pdvController.js
echo     try { >> src\controllers\pdvController.js
echo         const dados = await pdvService.getAll(); >> src\controllers\pdvController.js
echo         res.json(dados); >> src\controllers\pdvController.js
echo     } catch (error) { >> src\controllers\pdvController.js
echo         next(error); >> src\controllers\pdvController.js
echo     } >> src\controllers\pdvController.js
echo }; >> src\controllers\pdvController.js
echo. >> src\controllers\pdvController.js
echo exports.create = async (req, res, next) => { >> src\controllers\pdvController.js
echo     try { >> src\controllers\pdvController.js
echo         const novoItem = await pdvService.create(req.body); >> src\controllers\pdvController.js
echo         res.status(201).json(novoItem); >> src\controllers\pdvController.js
echo     } catch (error) { >> src\controllers\pdvController.js
echo         next(error); >> src\controllers\pdvController.js
echo     } >> src\controllers\pdvController.js
echo }; >> src\controllers\pdvController.js

REM Criar arquivo services\pdvService.js
echo exports.getAll = async () => { > src\services\pdvService.js
echo     return [{ id: 1, nome: "Produto Exemplo" }]; >> src\services\pdvService.js
echo }; >> src\services\pdvService.js
echo. >> src\services\pdvService.js
echo exports.create = async (dados) => { >> src\services\pdvService.js
echo     return { id: 2, ...dados }; >> src\services\pdvService.js
echo }; >> src\services\pdvService.js

REM Criar arquivo middlewares\errorHandler.js
echo module.exports = (err, req, res, next) => { > src\middlewares\errorHandler.js
echo     console.error(err); >> src\middlewares\errorHandler.js
echo     res.status(err.statusCode ^|^| 500).json({ >> src\middlewares\errorHandler.js
echo         error: err.message ^|^| 'Erro interno do servidor' >> src\middlewares\errorHandler.js
echo     }); >> src\middlewares\errorHandler.js
echo }; >> src\middlewares\errorHandler.js

REM Criar arquivo .env
echo PORT=3000 > .env
echo DB_CONNECTION_STRING=sua-string-de-conexao >> .env

REM Criar arquivo .gitignore
echo node_modules/ > .gitignore
echo .env >> .gitignore

REM Instalar dependências
npm install express helmet cors dotenv

REM Instalar nodemon como devDependency
npm install --save-dev nodemon

REM Atualizar package.json scripts
powershell -Command "(gc package.json) -replace '\"scripts\" *: *{', '\"scripts\": {`n    \"start\": \"node src/app.js\",`n    \"dev\": \"nodemon src/app.js\",' | Out-File package.json -Encoding utf8"

echo.
echo Setup concluído! Rode "npm run dev" para iniciar em modo desenvolvimento.
pause