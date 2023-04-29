const Search = require('../models/Search')

// show all posts generated
const showAll = (req, res, next) => {
    Search.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occurred!'
            })
        })
}

//create a post
const create = (req, res, next) => {
    if (err) {
        res.json({
            error: err
        })
        let post = new Search({
            name: req.body.name,
            username: req.body.username,
            description: req.body.description,
            upvote: 0,
            downvote: 0
        })
        post.save()
            .then(post => {
                res.json({
                    message: 'user Added Successfully'
                })
            })
            .catch(error => {
                res.json({
                    message: 'An error has occurred'
                })
            })
    }
}

// edit a post
const update = (req, res, next) => {
    let postID = req.body.searchID

    let updateData = {
        name: req.body.name,
        username: req.body.username,
        description: req.body.description,
        upvote: req.body.upvote,
        downvote: req.body.downvote
    }

    Search.findByIDAndUpdate(postID, { $set: updateData })
        .then(() => {
            res.json({
                message: "User updataed successfully!"
            })
        })
        .catch(error => {
            res.json({
                message: 'Error occurred updating info'
            })
        })
}

//delete a post
const destroy = (req, res, next) => {
    let postID = req.body.postID
    Search.findOneANdRemove(postID)
        .then(() => {
            res.json({
                message: 'User account has been deleted'
            })
        })
        .catch(error => {
            res.json({
                message: 'Error occurred deleting account'
            })
        })
}

module.exports = {
    showAll,
    create,
    update,
    destroy
}