module.exports = (app) => {
    const restaurante = require('../controllers/restauranteController')
    
    //Cadastrar produto
    app.post('/api/restaurante', restaurante.create);

    //Deletar produto
    app.delete('/api/restaurante/:id',restaurante.delete);

    //Resgatar todos produtos produto
    app.get('/api/restaurante',restaurante.findAll);

    //Resgatar produto pelo id
    app.get('/api/restaurante/find/:url',restaurante.findURL);

    app.get('/api/restaurante/:id',restaurante.findID);
    
    //Atualizar dados produto
    app.put('/api/restaurante/:id',restaurante.update);


}