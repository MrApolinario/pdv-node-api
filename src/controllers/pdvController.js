const pdvService = require('../services/pdvService'); 
 
exports.getAll = async (req, res, next) =
    try { 
        const dados = await pdvService.getAll(); 
        res.json(dados); 
    } catch (error) { 
        next(error); 
    } 
}; 
 
exports.create = async (req, res, next) =
    try { 
        const novoItem = await pdvService.create(req.body); 
        res.status(201).json(novoItem); 
    } catch (error) { 
        next(error); 
    } 
}; 
