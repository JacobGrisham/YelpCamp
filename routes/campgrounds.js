var express = require("express");
var	router = express.Router();
var Campground = require("../models/campground");
var Review = require("../models/review");
var middleware = require("../middleware"); // Note that the default file in a directory is index.js. Therefore, we don't need to write out ("../middleware/index.js")

// Google Geocoder API Middleware
var NodeGeocoder = require("node-geocoder");
var options = {
  provider: "google",
  httpAdapter: "https",
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null
};
var geocoder = NodeGeocoder(options);

//=======================
// ROUTES
//=======================

// For Fuzzy Search
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// INDEX ROUTE
// This is how we see the data
router.get("/", function(req,res){
	var noMatch = null;
	if (req.query.search) {
		const regex = new RegExp(escapeRegex(req.query.search), "gi");
		// Get the campground that matches the query string
		Campground.find({name: regex}, function(err, allCampgrounds){
			if(err){
				console.log(err);
			} else {
				if(allCampgrounds.length < 1) {
					noMatch = "No campgrounds found";
				}
				res.render("campgrounds/index", {campgrounds:allCampgrounds, noMatch: noMatch});
				// "campgrounds" is the name of the data that we expect to find in that file
				// recall that {"name we want":"data"}. We could name them differently, but they are commonly called the same thing. 
			}
		});
	} else  {
		// Get all campgrounds from DB
		Campground.find({}, function(err, allCampgrounds){
			if(err){
				console.log(err);
			} else {
				res.render("campgrounds/index", {campgrounds:allCampgrounds, noMatch: noMatch});
			}
		});
	}
});

//CREATE ROUTE - add new campground to DB
router.post("/", middleware.isLoggedIn, function(req, res){
  // Note that the post request and the get request share the same url, but they are different routes. We could name them differently, but this is part of the naming convention of REST.
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
      id: req.user._id,
      username: req.user.username
  }
  geocoder.geocode(req.body.location, function (err, data) {
    if (err || !data.length) {
      req.flash("error", "Invalid address");
      return res.redirect("back");
    }
    var lat = data[0].latitude;
    var lng = data[0].longitude;
    var location = data[0].formattedAddress;
    var newCampground = {name: name, image: image, description: desc, author:author, location: location, lat: lat, lng: lng};
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
			// Note that the redirect defaults to the GET request, not the POST request
        }
    });
  });
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
	Campground.findById(req.params.id).populate("comments").populate({
			path: "reviews",
			options: {sort: {createdAt: -1}}
	}).exec(function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
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

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
	delete req.body.campground.rating; // protect the campground.rating field from manipulation
  geocoder.geocode(req.body.location, function (err, data) {
    if (err || !data.length) {
      req.flash("error", "Something went wrong");
		console.log(err);
		return res.redirect("back");
    }
    req.body.campground.lat = data[0].latitude;
    req.body.campground.lng = data[0].longitude;
    req.body.campground.location = data[0].formattedAddress;
	
	// First find and update the correct campgrounds
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, campground){
        if(err){
            req.flash("error", err.message);
            res.redirect("back");
        } else {
			// Second redirect to the show page. We need to add the Id.
			// We can use req.params.id or updatedCampground._id
            req.flash("success","Successfully Updated!");
            res.redirect("/campgrounds/" + campground._id);
        }
    });
  });
});

// DESTROY ROUTE
// Remove all the associated Comment and Review documents from the database when we delete the campground
router.delete("/:id", middleware.checkCampgroundOwnership, function (req, res) {
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            res.redirect("/campgrounds");
        } else {
			//  delete the campground
			campground.remove();
			req.flash("success", "Campground deleted successfully!");
			res.redirect("/campgrounds");
            }
        });
    });

module.exports = router;
