var express = require("express");
var	router = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware"); // Note that the default file in a directory is index.js. Therefore, we don't need to write out ("../middleware/index.js") 


// COMMENTS NEW
router.get("/new", middleware.isLoggedIn, function(req, res){
	// find campground by id first
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
		} else {
			res.render("comments/new", {campground: campground});
		}
	});
	
});

// COMMENTS CREATE
router.post("/", middleware.isLoggedIn, function(req, res){
	// First lookup campground using id
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
			res.redirect("/campgrounds");
		} else {
			// Second create new comment
			Comment.create(req.body.comment, function(err, comment){
				if(err){
					req.flash("error", "Sorry, something went wrong");
				} else {
					// Third add username to comment
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					// Fourth save the comment
					comment.save();
					// Fourth connect new comment to campground
					campground.comments.push(comment);
					campground.save();
					req.flash("success", "Comment added");
					// Fourth redirect back to the campground show page
					res.redirect("/campgrounds/" + campground._id);
				}
			});
		}
	});
});

// COMMENTS EDIT ROUTE
router.get("/:comment_id/edit", function(req, res){
	Comment.findById(req.params.comment_id, function(err, foundComment){
		if(err){
			res.redirect("back");
		} else {
			Campground.findById(req.params.id, function(err, foundCampground){
				if (err){
					console.log(err);
				} else {
					res.render("comments/edit", {campground: foundCampground, comment: foundComment});
				}
			});
		}
	});
});

// COMMENTS UPDATE ROUTE
router.put("/:comment_id", function(req, res){
	Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
		if(err){
			res.redirect("back");
		} else {
			// Second redirect to the show page. We need to add the Id.
			// We can use req.params.id or updatedCampground._id
			req.flash("success", "Comment edited");
			res.redirect("/campgrounds/" + req.params.id);
		}
	});
})

// COMMENTS DESTROY ROUTE
router.delete("/:comment_id", function(req, res){
	// Find by ID and remove
	Comment.findByIdAndRemove(req.params.comment_id, function(err){
		if(err){
			res.redirect("back");
		} else {
			req.flash("success", "Comment deleted");
			res.redirect("/campgrounds/" + req.params.id);
		}
	});
});

module.exports = router;

