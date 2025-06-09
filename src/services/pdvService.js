exports.getAll = async () =
    return [{ id: 1, nome: "Produto Exemplo" }]; 
}; 
 
exports.create = async (dados) =
    return { id: 2, ...dados }; 
}; 
