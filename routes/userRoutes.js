const userController = require('../controllers/userController')

const express = require('express')
const userRoutes = express.Router()

userRoutes.post('/', userController.create)
userRoutes.post('/login', userController.login)
userRoutes.delete('/:id', userController.delete)
userRoutes.get('/:userId/getcities', userController.getCities)
userRoutes.delete('/:userId/delete/:cityId', userController.deleteCity)

module.exports = userRoutes