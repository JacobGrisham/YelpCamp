var mongoose = require("mongoose");


// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
	name: {type: String,
			required: "Campground name cannot be blank."
		},
	price: Number,
	image: {type: String,
			required: "Campground image cannot be blank."
		},
	description: String,
	location: String,
	lat: Number,
	lng: Number,
	createdAt: {type: Date, default: Date.now},
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	],
	reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    rating: {
        type: Number,
        default: 0
    }
});

const Comment = require("./comment");
campgroundSchema.pre("remove", async function() {
	await Comment.remove({
		_id: {
			$in: this.comments
		}
	});
});

// Compiling Schema into a Model
var Campground = mongoose.model("Campground", campgroundSchema);

module.exports = mongoose.model("Campground", campgroundSchema);