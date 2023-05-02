const express = require('express')
const router = express.Router()

const AuthController = require('../controller/UserController')
// const authenticate = require('../middleware/authenticate')

//Anything with authenticate in it will require a token to see in db


router.get('/usersAll', AuthController.showAll)
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/update', AuthController.update)
router.post('/destroy', AuthController.destroy)

module.exports = router
