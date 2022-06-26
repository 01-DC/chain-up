const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema for todo
const TodoSchema = new Schema({
	name: {
		type: String,
		required: [true, "The name text field is required"],
	},
	details: {
		type: String,
		required: [true, "The details text field is required"],
	},
	description: {
		type: String,
		required: [true, "The description text field is required"],
	},
	domain: {
		type: String,
		required: [true, "The domain text field is required"],
	},
	valuation: {
		type: String,
		required: [true, "The valuation text field is required"],
	},
	revenue: {
		type: String,
		required: [true, "The revenue text field is required"],
	},
	age: {
		type: String,
		required: [true, "The age text field is required"],
	},
	companyLogo: {
		type: String,
		required: [true, "The companyLogo text field is required"],
	},
	pitchVideo: {
		type: String,
		required: [true, "The pitchVideo text field is required"],
	},
	cryptoAddress: {
		type: String,
		required: [true, "cryptoAddress field is required"],
	},
	perksList: {
		type: String,
		required: [true, "cryptoAddress field is required"],
	},
})

// Create model for todo
const Todo = mongoose.model("todo", TodoSchema)

module.exports = Todo
