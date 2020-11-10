module.exports = (app) => {
    const produto = require('../controllers/produtoController');
    
    //Cadastrar produto
    app.post('/api/produto/:url',produto.create);

    //Deletar produto
    app.delete('/api/produto/:id',produto.delete);

    //Resgatar todos produtos produto
    app.get('/api/produto/find/:url',produto.findAll);
 
    //Resgatar produito pelo id
    app.get('/api/produto/:id',produto.findID);

    //Atualizar dados produto
    app.put('/api/produto/:id',produto.update);

    //Diminuir do estoque
    app.put('/api/produto/:id/dec',produto.decrement);
}