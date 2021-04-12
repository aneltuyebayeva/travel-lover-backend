const userController = require('../controllers/userController')

const express = require('express')
const cityController = require('../controllers/cityController')
const cityRoutes = express.Router()

cityRoutes.post('/search', cityController.search)

module.exports = cityRoutes