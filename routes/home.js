const express = require('express')
const router = express.Router()

router.get('/', function (req, res) { // sends to front end to check if so will start the homepage
    console.log('API working properly')
})

module.exports = router