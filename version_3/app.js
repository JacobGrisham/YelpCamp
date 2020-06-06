// Calling npm packages
const express 		= require('express'),
	  app 			= express(),
	  bodyParser 	= require('body-parser'),
	  mongoose 		= require("mongoose")
// Calling the campground.js file in the models directory, which has the campgroundSchema and commentSchema
var Campgrounds		= require("./models/campground.js")
var Comment			= require("./models/comment.js")

// Create the MongoDB "yelp_camp"
mongoose.connect("mongodb://localhost/yelp_camp_v3", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
// Enable bodyParser
app.use(bodyParser.urlencoded({extended: true}));
// Use this so we don't have to specify ".ejs" at the end of every ejs file
app.set("view engine", "ejs");

// Campground.create({
// 	name: "Salmon Creek",
// 	image:"https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
// 	description: "Unwind and relax under the boughs of redwood trees and let the babbling water of Salmon creek lull you to sleep in this 5 star campground."},
// 	{name: "Granite Hill",
// 	 image:"https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1559&q=80",
// 	 description: "Take in the thrilling view of Sky's Valley atop of Granite Hill in this one of a kind campground!"});

app.get("/", function(req, res){
	res.render("landing");
});

// INDEX Route
app.get("/campgrounds", function(req, res){
	// Retrieve all campgrounds from the yelp_camp database
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		// Render all the campgrounds
		} else {
			res.render("index", {campgrounds:allCampgrounds});
		}
	});
});

// CREATE route
app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.decription;
	var newCampground = {name:name, image:image, description: desc}
	// Create a new campground and save to the database
	Campground.create(newCampground, function(err, campgroundAdded){
		if(err){
			console.log(err);
		// Take user back to the campgrounds page to see that campground was added
		} else {
			res.redirect("/campgrounds");
		}
	});
});

// NEW route
app.get("/campgrounds/new", function(req, res){
	res.render("new");
})

// SHOW route. Must come before "campgrounds/new" because this will think "new" is the id
app.get("/campgrounds/:id", function(req, res){
	// Find the campground with the provided ID
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if (err){
			console.log(err);
		} else { // Render the SHOW template with that campground
		console.log(foundCampground);
		res.render("show", {campground: foundCampground});
		}
	});
});

app.listen(3000, function(){
	console.log("Server is on");
	});