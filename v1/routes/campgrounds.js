var express = require("express");
var	router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware"); // Note that the default file in a directory is index.js. Therefore, we don't need to write out ("../middleware/index.js") 

/*
// This is an array that we used to work with some starter data
var campgrounds = [
		{name: "Salmon Creek", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"},
		{name: "Granite Hill", image: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"},
		{name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1584291414588-4c2cbcfa0c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}
	]
*/


// INDEX ROUTE
// This is how we see the data
router.get("/", function(req,res){
	// Get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		} else {
			res.render("campgrounds/index", {campgrounds:allCampgrounds});
			// "campgrounds" is the name of the data that we expect to find in that file
			// recall that {"name we want":"data"}. We could name them differently, but they are commonly called the same thing. 
		}
	});
});


/*
// This is a database insertion that we used to verify connection to database
Campground.create(
	{name: "Granite Hill", image: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80", description: "The ground is so hard!!"}, function(err, campground){
		if(err){
			console.log(err);
		} else {
			console.log("New campground");
			console.log(campground);
		}
	});
*/

// CREATE ROUTE
// This is how we create data
router.post("/", middleware.isLoggedIn, function(req, res){
// Note that the post request and the get request share the same url, but they are different routes. We could name them differently, but this is part of the naming convention of REST.
	// In this reqest we want to get data from the campgrounds array
	var name = req.body.name;
	var price = req.body.price
	var image = req.body.image;
	var desc = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	
	// We create a new variable to use in the push below
	var newCampground = {name: name, image: image, description: desc, author:author, price:price} // We use the same naming convention as the one in the array above
	
	// We push data into the array named campgrounds
	// campgrounds.push(newCampground);
	
	
	
	// Create a  new campground and save to the database
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			// Next, we want to redirect back to the campgrounds page
			res.redirect("/campgrounds");
			// Note that the redirect defaults to the GET request, not the POST request
		}
	})
});


// NEW ROUTE
// This is page where we send/update the data
router.get("/new", middleware.isLoggedIn, function(req, res){
// Again, this naming convention is part of REST naming convention.
	res.render("campgrounds/new");
});


// SHOW ROUTE
// Show more info about one campground
// It's important that the show route is written after the new route. Otherwise, this code will treat "/campgrounds/new" as an id
router.get("/:id", function(req, res){
	// find the campground with the provided ID
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			console.log(foundCampground);
			// render the show template with that campground
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});
});

// EDIT ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
	// Find the Campground by Id
	Campground.findById(req.params.id, function(err, foundCampground){
		// Third Render the edit page in order to access to the edit form
		res.render("campgrounds/edit", {campground: foundCampground});
	});
});

// UPDATE ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
	// First find and update the correct campgrounds
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
		if(err){
			res.redirect("back");
		} else {
			// Second redirect to the show page. We need to add the Id.
			// We can use req.params.id or updatedCampground._id
			res.redirect("/campgrounds/" + req.params.id);
		}
	});
});

// DESTROY ROUTE
/*router.delete("/:id", function(req, res){
	// Find by ID and remove
	Campground.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("./campgrounds");
		} else {
			res.redirect("./campgrounds");
		}
	});
});
*/
router.delete("/:id", middleware.checkCampgroundOwnership, async(req, res) => {
  try {
    let foundCampground = await Campground.findById(req.params.id);
    await foundCampground.remove();
    res.redirect("/campgrounds");
  } catch (error) {
    console.log(error.message);
    res.redirect("/campgrounds");
  }
});

module.exports = router;
