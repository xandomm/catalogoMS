const mongoose = require('mongoose')


const cadastroSchema = mongoose.Schema({
    _id: Number,
    nomedocartao: String,
    dataExpiracao: String ,
    CA: String,
    CVV: String,
    cpf: Number
    
}, {
    timestamps: true
});

module.exports = mongoose.model('cadastro', cadastroSchema)