const userController = require('../controllers/userController')

const express = require('express')
const cityController = require('../controllers/cityController')
const cityRoutes = express.Router()

cityRoutes.post('/search', cityController.search)
cityRoutes.get('/search/:cityId', cityController.searchOne)
cityRoutes.post('/:userId/save/:cityId', cityController.save)
module.exports = cityRoutes