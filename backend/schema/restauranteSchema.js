const mongoose = require('mongoose');


const restauranteSchema = mongoose.Schema({
    _id: String,
    nome: String,
    telefone: Number,
    abertura: String,
    fechamen : String,
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
    opcionais: Array,
    desc: String,
    cidade: String,
    token: String,
    estado: String,
    CEP: String,
    url:String,
    expires: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('restaurante', restauranteSchema);