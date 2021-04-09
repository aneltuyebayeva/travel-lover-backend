const models = require('../models')

const userController = {}

userController.create = async(req,res) => {
    try {
        const user = await models.user.create ({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({message: 'user created', user})
    } catch (error) {
        res.status(400)
        res.json({error: 'email is already taken'})
    }
}


userController.login = async(req,res) => {
    const user = await models.user.findOne({
        where: {
            email: req.body.email,
        }
    }) 
    if (user.password === req.body.password) {
        res.status(200)
        res.json({id: user.id, name: user.name})
    } else {
        res.status(400)
        res.json({error: 'invalid password'})
    }
}


module.exports = userController