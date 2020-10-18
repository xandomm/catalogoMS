const mongoose = require('mongoose');


const restauranteSchema = mongoose.Schema({
    _id: Number,
    nome: String,
    telefone: Number,
    abertura: Number,
    fechamen : Number,
    img: String,
    endereco: String,
    valeRefeicao: Boolean,
    credito: Boolean,
    debito: Boolean,
    dinheiro: Boolean,
    frete: Boolean,
    freteV: Number,
    freteGratis: Boolean,
    freteGratisV: Number,
    compraMin: Boolean,
    compraMinV: Number,
    categorias: Array,
    retirar: Boolean,
    desc: String,
    cidade: String,
    token: String,
    estado: String,
    CEP: String,
    url:String
}, {
    timestamps: true
});

module.exports = mongoose.model('restaurante', restauranteSchema);