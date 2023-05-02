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
		type: String
	},
	downVote: {
		type: String
		}
}, { timestamps: true })

const Search = mongoose.model('Search', searchSchema)
module.exports = Search
