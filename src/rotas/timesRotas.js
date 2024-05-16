const { Router } = require('express')

const TimesController = require('../controller/TimesController')

const timesRotas = Router()

const timesController = new TimesController()


timesRotas.post('/create', timesController.create)
timesRotas.delete('/delete', timesController.delete)
timesRotas.put('/update', timesController.update)
timesRotas.get('/', timesController.MostrarTodos)


module.exports = timesRotas

