const { Router } = require('express')

const JogadorController = require('../controller/jogadorController')

const jogadorRotas = Router()

const jogadorController = new JogadorController()


jogadorRotas.post('/create', jogadorController.create)
jogadorRotas.delete('/delete', jogadorController.delete)


module.exports = jogadorRotas