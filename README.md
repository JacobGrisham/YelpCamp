# [YelpCamp](https://aqueous-reaches-28926.herokuapp.com/)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://aqueous-reaches-28926.herokuapp.com/)
![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Faqueous-reaches-28926.herokuapp.com%2F)
[![Maintainability](https://api.codeclimate.com/v1/badges/5db672c308be3e556462/maintainability)](https://codeclimate.com/github/JacobGrisham/YelpCamp/maintainability)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/6272d48144774479b06e9b4b2caea0d6)](https://www.codacy.com/manual/JacobGrisham/YelpCamp?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JacobGrisham/YelpCamp&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/6272d48144774479b06e9b4b2caea0d6)](https://www.codacy.com/gh/JacobGrisham/YelpCamp/dashboard?utm_source=github.com&utm_medium=referral&utm_content=JacobGrisham/YelpCamp&utm_campaign=Badge_Coverage)
[![CircleCI](https://img.shields.io/circleci/build/github/JacobGrisham/YelpCamp)](https://app.circleci.com/pipelines/github/JacobGrisham/YelpCamp)
![David](https://img.shields.io/david/jacobgrisham/yelpcamp)

## 🎥 Walkthrough on Youtube
[<img src="public/stylesheets/youtube-thumbnail.png" width="100%">](https://youtu.be/9IqcgAHhJ8k)

## 💡Lessons Learned
-	First full-stack web application
-	ExpressJS
-	MongoDB database design
-	Bootstrap 4
-	Optimizing performance, security, and accessibility using Google Lighthouse
-	Integration testing with Jest
-	Code review with Codacy and CodeClimate
-	CI/CD with CircleCI
-	Creating SVG illustrations
-	Deploying app to Heroku and Database to MongoDB Atlas

## 🛠 Technologies
|Graphic Design|Front-End|Back-End|Database|Deployment|Testing |
|------------- | ------- | ------ | ------ | -------- | -------|
|Inkscape	     |HTML5	   |Node.js |Mongoose|Heroku	  |Jest    |
|.			       |CSS3		 |ExpressJS|MongoDB|MongoDB Atlas|Lighthouse|
|.			       |Bootstrap 4|EJS	  |.		   |Git		    |.       |
|.			       |Javascript|.		  |.		   |.		      |.       |

## ⚖️ Methodology
-	Developed app in [GoormIDE](https://ide.goorm.io/) to gain exposure to cloud-based IDE.
-	[Bootstrap 4](https://getbootstrap.com/) as the CSS framework to keep the UI simple and quick to build.
-	[ExpressJS](https://expressjs.com/) as the Node.js application framework for its basic functionality. Some companies still use ExpressJS so it was important to implement it.
-	[PassportJs](https://github.com/jaredhanson/passport) for the authentication and authorization.
-	NoSQL database for the flexibility compared to a SQL database, [MongoDB](https://www.mongodb.com/) in particular because of its prevalence in the industry.
-	[Heroku](https://www.heroku.com/) for the CirceCI continous integration and development support. Application is kept awake from 6:00 a.m. to 11:59 p.m. PST with [Kaffeine](https://kaffeine.herokuapp.com/)

## ⚙️ Features
-	Login, sign-up, Admin role
-	REST API (create, read, update, delete) for campgrounds, comments, and reviews
-	Create routes have authentication
-	Edit, Update, and Delete routes have authentication and authorization
-	[Google Maps API](https://developers.google.com/maps/documentation)

To Do:
-	Sort campgrounds by review, distance, country, and state
-	Disallow duplicate campgrounds. I.e. no more than one unique campground
-	Not safe for work (NSFW) picture filter
-	Allow multiple photos to be uploaded
-	Write comment directly on show page
-	Write review directly on show page
-	Show 1/3, 1/2, and 2/3 of a star
-	Forgot password, change username, change password

## 🚀 Getting Started
Create an .env file and add values to the following variables:
```
GEOCODER_API_KEY=
API_KEY=
DATABASEURL=
PASSPORT_SECRET=
ADMIN_CODE=
```
In a terminal window, initialize a Mongoose Database 
```
$ ./mongod
```
In a second terminal window, display the Mongoose Database 
```
$ mongoose
```
In a third terminal window, install dependencies using npm:

```
$ npm install
```
And then run the application with
```
$ npm start
```
or
```
$ nodemon app.js
```

## 📐 Tests
The integration tests using [Jest](https://jestjs.io/) test the creation of data, the functionality of the schema, and the functionality of the validation. The tests are iterated over each of the models: campgrounds, comments, reviews, users.
To run the tests:
```
$ npm test
```

## 📣 Acknowledgments
-	The skeleton of this project was based on [Colt Steele's YelpCamp](https://github.com/Colt/yelp-camp-refactored) during the Web Development Bootcamp.

## 🔒 License
Copyright Notice and Statement: currently not offering any license. Permission only to view and download.
