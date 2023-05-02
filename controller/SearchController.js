const Search = require('../models/Search')

// show all posts generated
const showAll = (req, res, next) => {
    Search.find()
        .then(response => {
            res.json({
                response,
                 status: 'Accepted',
            })
        })
        .catch(error => {
            res.json({
                status: 'error',
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
                    status: 'Accepted',
                    message: 'post Added Successfully'
                })
            })
            .catch(error => {
                res.json({
                    status: 'error',
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
                status: 'Accepted',
                message: "User's post updataed successfully!"
            })
        })
        .catch(error => {
            res.json({
                status: 'error',
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
                status: 'Accepted',
                message: 'User post has been deleted'
            })
        })
        .catch(error => {
            res.json({
                status: 'error',
                message: 'Error occurred deleting post'
            })
        })
}

module.exports = {
    showAll,
    create,
    update,
    destroy
}