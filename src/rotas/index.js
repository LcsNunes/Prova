const { Router } = require("express");

const jogadorRotas = require('./jogadorRotas')
const timesRotas = require('./timesRotas')

const rotas = Router()

// Rotas dos controllers
rotas.use('/jogador', jogadorRotas)
rotas.use('/times', timesRotas)


module.exports = rotas

