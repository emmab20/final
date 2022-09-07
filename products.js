const mongoose = require("mongoose");

// create a schema
// which will be passed to the backend
// first parameter: Schema model; what we define
// second parameter: the collection that we want to look in
const schema = mongoose.Schema(
	{
		//_id: mongoose.ObjectId,
		title: String,
		description: String,
		category: String,
		image: String,
		rating: Number,
		price: Number,
	},
	{ collection: "Products" }
);

module.exports = mongoose.model("products", schema);
