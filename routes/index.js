var express = require("express");
var	router = express.Router();
var passport = require("passport");
var	User = require("../models/user");
var Campground = require("../models/campground");
var middleware = require("../middleware"); // Note that the default file in a directory is index.js. Therefore, we don't need to write out ("../middleware/index.js") 

// This is the landing page
router.get("/", function(req,res){
	res.render("landing");
});


// Authorization Routes
// Show register form
router.get("/register", function(req, res){
	res.render("register");
});

//handle sign up logic
router.post("/register", function(req, res){
	// Create User object
	var newUser = new User({
			username: req.body.username, 
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			avatar: req.body.avatar
		});
	// Verify is user entered adminCode
	if(req.body.adminCode === process.env.ADMIN_CODE){
		newUser.isAdmin = true;
	}
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render("register", {"error": err.message});
		}
		passport.authenticate("local")(req, res, function(){
			req.flash("success", "Welcome to YelpCamp " + user.username);
			res.redirect("/campgrounds");
		});
	});
});
// Show form
router.get("/login", function(req, res){
	res.render("login");
});
// Post form
router.post("/login", passport.authenticate("local",
	{
	successRedirect: "/campgrounds",
	failureRedirect: "/login"
	}), function(req, res){
});
// Logout Route
router.get("/logout", function(req, res){
	req.logout();
	req.flash("success", "You've logged out");
	res.redirect("/campgrounds");
});

// User Profile
router.get("/users/:id", function (req, res){
	User.findById(req.params.id, function (err, foundUser){
		if(err){
			req.flash("error", err.message);
			res.redirect("/");
		}
		Campground.find().where("author.id").equals(foundUser._id).exec(function(err, campgrounds){
			if(err) {
				req.flash("error", err.message);
				res.redirect("/");
			}
		res.render("users/show", {user: foundUser, campgrounds: campgrounds});
		});
	});
});

module.exports = router;