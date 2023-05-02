const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')


const AuthRoute = require('./routes/auth')
const SearchRoute = require('./routes/searchAuth')
const home = require('./routes/home')

const urL = 'mongodb+srv://MrBeast:6000@atlascluster.zpsuia0.mongodb.net/?retryWrites=true&w=majority'; // Put DB here

async function connect() {
    try {
        await mongoose.connect(urL);
        console.log('Connected to DB')

    } catch (error) {
        console.error(error)
    }
}

connect()
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())
const Port = 5000 //process.env.PORT ||

app.listen(Port, () => {
    console.log('Server is running on port', Port)
})

app.use('./routes/home', home)
app.use('./routes/auth', AuthRoute)
app.use('./routes/searchAuth', SearchRoute)