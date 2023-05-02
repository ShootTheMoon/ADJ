const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Show a list of all registered users and their values
const showAll = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({
                status: 'Accepted',

                response
                })
        })
        .catch(error => {
            res.json({
                status: 'error',
                message: 'An error occurred!'
                })
        })
}


// register a user
const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json ({
                error: err
            })
            let User = new User({
                name: req.body.name,
                username: req.body.username,
                password: hashedPass


            })
            User.save()
                .then(user => {
                    res.json({
                        status: 'Accepted',
                        message: 'user Added Successfully'
                    })
                })
                .catch(error => {
                    res.json({
                        status: 'error',
                        message: 'An error has occurred'
                    })
                })
        }
    })
}

// login a user
const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({ $or: [{ name: username }, { username: username }] })
        .then(User => {
            if (User) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                       // let token = jwt.sign({ username = user.username }, 'SecretFormula', { expiresIn: '10h' })
                       // let refreshtoken = jwt.sign({ username = user.username }, 'refreshTokenTime', { expiresIn: '81h' })
                        res.status(200).json({
                            status: 'Accepted',
                            message: 'Login Successful!',
                          //  token,
                           // refreshtoken
                        })
                    }
                })
            }
            else {
                res.status(200).json({
                    status: 'error',
                    message: 'No user found'
                })
            }
            
    })

}

//refresh token
/*
 const refreshToken = (req, res, next) => {
    const refreshToken = req.body.refreshToken
    jwt.verify(refreshToken, 'refreshTokenTime', function (err, decode) {
        if (err) {
            res.status(400).json({
                error: err
            })
        }
        else {

            let token = jwt.sign({ username = decode.username }, 'refreshTokenTime', { expiresIn: '10h' })
            let refreshtoken = req.body.refreshtoken
            res.status(200).json({
                message: 'Token Refresh Successful!',
                token,
                refreshtoken
            })
        }
    }
)}
*/

//update user information
const update = (req, res, next) => {
        let userID = req.body.userID

        let updateData = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        }

        User.findByIDAndUpdate(userID, { $set: updateData })
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



//Delete a user
const destroy = (req, res, next) => {
    let userID = req.body.userID
    User.findOneANdRemove(userID)
        .then(() => {
            res.json({
                status: 'Accepted',
                message: 'User account has been deleted'
                })
        })
        .catch(error => {
            res.json({
                status: 'error',
                message: 'Error occurred deleting account'
                })
        })
}

module.exports = {
    showAll,
    register,
    login,
    //refreshToken,
    update,
    destroy
    }