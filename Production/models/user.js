var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	avatar: String,
	firstName: String,
	lastName: String,
	email: String,
	isAdmin: {type: Boolean, defualt: false}
	// Note that you can put an "is" before the property name when delaing with booleans
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);