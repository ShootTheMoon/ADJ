const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
	Name: {
		type: String,
		unique: true
	},
	Username: {
		type: String,
		unique: true
	},
	Password: {
		type: String,
		unique: true
		}
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = User

