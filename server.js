const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const home = require('./routes/home')
const AuthRoute = require('./routes/auth')
const SearchRoute = require('./routes/searchAuth')


mongoose.connect('mongodb:localhost:27017/testdb')
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection established')
})


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const Port = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
})
app.use('./routes/home', home)
app.use('./routes/auth', AuthRoute)
app.use('./routes/searchAuth', SearchRoute)
