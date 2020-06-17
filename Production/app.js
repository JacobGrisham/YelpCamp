// CALLING ENVIRONMENTAL VARIABLE MODULE
require('dotenv').config();

// CALLING DEPENDECNIES IN PACKAGE.JSON
const express 			= require("express"),
	app 				= express(),
	bodyParser 			= require("body-parser"),
	mongoose 			= require("mongoose"),
	flash				= require("connect-flash"),
	passport 			= require("passport"),
	LocalStrategy 		= require("passport-local"),
	methodOverride		= require("method-override"),
	Campground 			= require("./models/campground"),
	Comment 			= require("./models/comment"),
	User 				= require("./models/user"),
	seedDB 				= require("./seeds"),
	MongoClient			= require("mongodb");
// CALLING ROUTES
const 	commentRoutes 		= require("./routes/comments"),
		reviewRoutes     	= require("./routes/reviews"),
		campgroundRoutes 	= require("./routes/campgrounds"),
		indexRoutes 		= require("./routes/index");


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
// linking the database here with the one on Heroku
var url = "mongodb://localhost/temporary_database" || process.env.DATABASEURL // Two options.
// checking DATABASEURL value
console.log(process.env.DATABASEURL);
mongoose.connect(url);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public")); // Using __dirname + is a better way to navigate to the file
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());

// Moment JS for timestamps
app.locals.moment = require("moment");

// Passport Configuration
app.use(require("express-session")({
	secret: process.env.PASSPORT_SECRET,
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware used below
app.use(function(req, res, next){
	res.locals.currentUser = req.user; // passing user into every single template
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});


app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds/:id/reviews", reviewRoutes);

const port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){
	console.log("Server is on");
	});