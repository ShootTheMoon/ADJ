const mongoose = require('mongoose')
const Schema = mongoose.Schema

const searchSchema = new Schema({
	name: {
		type: String
	},
	username: {
		type: String
	},
	description: {
		type: String
		},
	upVote: {
		type: int
	},
	downVote: {
		type: int
		}
}, { timestamps: true })

const User = mongoose.model('Search', searchSchema)
module.exports = Search
