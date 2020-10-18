const mongoose = require('mongoose')


const authSchema = mongoose.Schema({
    _id: Number,
    session: String
    
}, {
    timestamps: true
});

module.exports = mongoose.model('auth', authSchema)