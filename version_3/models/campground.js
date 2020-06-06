// Calling npm packages
const mongoose = require("mongoose")
// Create the MongoDB "yelp_camp"
mongoose.connect("mongodb://localhost/yelp_camp_v3", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// MongoDB Schema setup.
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	// Adding an object ID to the campground schema in order to associate comments with a campground
	comments: [
		{
			type: mongoose.Schema.Types.ObjectID,
			ref: "Comment" // name of the model
		}
	]
});


// Compiling campgroundSchema into a model
module.exports = mongoose.model("Campground", campgroundSchema);