const mongoose = require('mongoose');
mongoose.set('debug', true);



const produtoSchema = mongoose.Schema({
    _id: Number,
    nome: String,
    preco: Number,
    img: String,
    categoria: String,
    opcionais: Array,
    descricao: String,
    cardapio: String

}, {
    timestamps: true,
    collection: 'Produto'
});
module.exports = mongoose.model('Produto',produtoSchema);