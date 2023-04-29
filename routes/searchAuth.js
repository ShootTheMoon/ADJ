const express = require('express')
const router = express.Router()

const searchController = require('../controller/SearchController')


router.get('/posts',searchController.showAll)
router.post('/createPost', searchController.create)
router.post('/updatePost', searchController.update)
router.post('/deletePost', searchController.destroy)

module.exports = router