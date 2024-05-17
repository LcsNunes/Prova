const { Router } = require('express')

const JogadorController = require('../controller/JogadorController')

const jogadorRotas = Router()

const jogadorController = new JogadorController()


jogadorRotas.post('/create', jogadorController.create)
jogadorRotas.delete('/delete', jogadorController.delete)
jogadorRotas.put('/update', jogadorController.update)
jogadorRotas.get('/', jogadorController.MostrarTodos)


module.exports = jogadorRotas
