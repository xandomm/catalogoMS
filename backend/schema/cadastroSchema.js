const mongoose = require('mongoose')


const cadastroSchema = mongoose.Schema({
    _id: Number,
    nome: String,
    plano: String,
    sobrenome: String ,
    email: String,
    senha: String,
    documento: Number
    
    
}, {
    timestamps: true
});

module.exports = mongoose.model('cadastro', cadastroSchema)