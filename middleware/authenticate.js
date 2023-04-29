const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    try {

        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'SecretFormula')

        req.user = decode
        next()
    }
    catch (error) {
        if (error.name == 'TokenExpiredError') {
            res.json({
                message: 'Token Expired!'
            })
        } else {
            res.json({
                message: 'Authentication Failed!'
            })
        }
    }
}

module.exports = authenticate