// We moved the middleware from the routes to this separate file to uphold the principle of DRY code. It also helps with scalability.

var Campground = require("../models/campground");
var Comment = require("../models/comment");
var Review = require("../models/review");

// all the middleware goes here
var middlewareObj = {};

// Defining the objects after delcaring the variable. You could also declare the variables inside the object

// Middleware: Authentication
middlewareObj.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "You need to logged in to do that"); // line must come before the redirect.
	res.redirect("/login");
};

// Middleware: Campground Authorization
middlewareObj.checkCampgroundOwnership = function(req, res, next){
	// First Is any user logged in
	if(req.isAuthenticated()){
		// Find the Campground by Id
		Campground.findById(req.params.id, function(err, foundCampground){
			if(err){
				req.flash("error", "Sorry, campground not found");
				res.redirect("back");
			} else {
				// Verify that user owns the campground or is an Admin
				if(foundCampground.author.id.equals(req.user._id)|| req.user.isAdmin){
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
				// Verify that user owns the comment or is an Admin
				if(foundComment.author.id.equals(req.user._id) || req.user.isAdmin){
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

// Middleware: Rating Authorization
middlewareObj.checkReviewOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
        Review.findById(req.params.review_id, function(err, foundReview){
            if(err || !foundReview){
                res.redirect("back");
            }  else {
                // does user own the comment?
                if(foundReview.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
};

// Middleware: Check if user already reviewed
middlewareObj.checkReviewExistence = function (req, res, next) {
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id).populate("reviews").exec(function (err, foundCampground) {
            if (err || !foundCampground) {
                req.flash("error", "Campground not found.");
                res.redirect("back");
            } else {
                // check if req.user._id exists in foundCampground.reviews
                var foundUserReview = foundCampground.reviews.some(function (review) {
                    return review.author.id.equals(req.user._id);
                });
                if (foundUserReview) {
                    req.flash("error", "You already wrote a review.");
                    return res.redirect("/campgrounds/" + foundCampground._id);
                }
                // if the review was not found, go to the next middleware
                next();
            }
        });
    } else {
        req.flash("error", "You need to login first.");
        res.redirect("back");
    }
};

module.exports = middlewareObj;