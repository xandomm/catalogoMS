const server = require('express').Router()
const { MP } = require('../controllers/mensalidadeController')

server.post('/', MP)

module.exports = server