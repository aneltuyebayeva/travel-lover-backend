const models = require('../models')
const axios = require('axios')
const cityController = {}

cityController.search = async (req,res) => {
    try {
        let city = req.body.city
        // console.log(city)
        let search = await axios.get(`https://www.triposo.com/api/20210317/poi.json?location_id=${city}&account=WL3AG8DW&token=nheqyqle8sdffasohqa4p9jb035rhto1`)

       console.log(search.data)
       res.send(search.data)
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

cityController.searchOne = async (req,res) => {
    try {
        let city = req.body.cityId
        let searchOne = await axios.get(`https://www.triposo.com/api/20210317/poi.json?location_id=${city}&account=WL3AG8DW&token=nheqyqle8sdffasohqa4p9jb035rhto1`)
        res.send(searchOne)
    } catch (error) {
        res.json({error})
    }
}

cityController.save = async (req,res) => {
    try {
        let user = await models.user.findOne ({
            where: {
                id: req.params.userId
            }
        })
        console.log(user)
        const saveCity = await models.city.findOrCreate ({
            where: {
                cityId: req.params.cityId
            }
        })
        
        await user.addCity(saveCity[0])
        let results = await user.getCities()
        res.json({results})
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}
module.exports = cityController