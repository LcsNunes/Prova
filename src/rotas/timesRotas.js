const { Router } = require('express')

const TimesController = require('../controller/TimesController')

const timesRotas = Router()

const timesController = new TimesController()


timesRotas.post('/create', timesController.create)



module.exports = timesRotas

