// We moved the middleware from the routes to this separate file to uphold the principle of DRY code. It also helps with scalability.

var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middlewareObj = {};

// Defining the objects after delcaring the variable. You could also declare the variables inside the object

// Middleware: Authentication
middlewareObj.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "You need to logged in to do that"); // line must come before the redirect.
	res.redirect("/login");
}

// Middleware: Campgroundd Authorization
middlewareObj.checkCampgroundOwnership = function(req, res, next){
	// First Is any user logged in
	if(req.isAuthenticated()){
		// Find the Campground by Id
		Campground.findById(req.params.id, function(err, foundCampground){
			if(err){
				req.flash("error", "Sorry, campground not found");
				res.redirect("back");
			} else {
				// Verify that user owns the campground
				if(foundCampground.author.id.equals(req.user._id)){
					next();
				} else {
					req.flash("error", "Sorry, you don't have permissions to do that");
					res.redirect("back");
				}
			}
		});
	} else {
		req.flash("error", "You need to logged in to do that");
		res.redirect("back");
	}
}

// Middleware: Comment Authorization
middlewareObj.checkCommentOwnership = function(req, res, next){
	// First Is any user logged in
	if(req.isAuthenticated()){
		// Find the Campground by Id
		Comment.findById(req.params.comment_id, function(err, foundComment){
			if(err){
				res.redirect("back");
			} else {
				// Verify that user owns the comment
				if(foundComment.author.id.equals(req.user._id)){
					next();
				} else {
					req.flash("error", "Sorry, only the user who posted the content can edit this");
					res.redirect("back");
				}
			}
		});
	} else {
		req.flash("error", "You need to logged in to do that");
		res.redirect("back");
	}
}

module.exports = middlewareObj