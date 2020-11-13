module.exports = (app) => {
    const pedido = require('../controllers/pedidoController');
    
    //Cadastrar produto
    app.post('/api/pedido',pedido.create);

    //Deletar produto
    app.delete('/api/pedido/:id',pedido.delete);

    //Resgatar todos produtos produto
    app.get('/api/pedido/find/:url',pedido.findAll);
 
    //Resgatar produito pelo id
    app.get('/api/pedido/:id',pedido.findID);

    //Atualizar dados produto
    app.put('/api/pedido/:id',pedido.update);

 
}