var express 			= require("express"),
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
	seedDB 				= require("./seeds");

var commentRoutes 		= require("./routes/comments"),
	campgroundRoutes 	= require("./routes/campgrounds"),
	indexRoutes 		= require("./routes/index");

//seedDB();
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/temporary_database");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public")); // Using __dirname + is a better way to navigate to the file
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());

// Passport Configuration
app.use(require("express-session")({
	secret: "I will be a Google Engineer",
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

app.listen(3000, function(){
	console.log("Server is on");
	});