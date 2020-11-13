const mongoose = require('mongoose')


const pedidoSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    pedido: Array,
    cardapio: String ,
    check: String,
    Total: Number
    
}, {
    timestamps: true
});

module.exports = mongoose.model('pedido', pedidoSchema)