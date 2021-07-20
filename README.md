<div align="center">
  <img width="200" src="public/stylesheets/android-chrome-512x512.png" alt="YelpCamp logo">

# [YelpCamp](https://www.yelpcamp.app/)
![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=brightgreen&up_message=online&url=https%3A%2F%2Fyelpcamp.app)
![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fwww.yelpcamp.app)
[![Maintainability](https://api.codeclimate.com/v1/badges/5db672c308be3e556462/maintainability)](https://codeclimate.com/github/JacobGrisham/YelpCamp/maintainability)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/6272d48144774479b06e9b4b2caea0d6)](https://www.codacy.com/manual/JacobGrisham/YelpCamp?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JacobGrisham/YelpCamp&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/6272d48144774479b06e9b4b2caea0d6)](https://www.codacy.com/gh/JacobGrisham/YelpCamp/dashboard?utm_source=github.com&utm_medium=referral&utm_content=JacobGrisham/YelpCamp&utm_campaign=Badge_Coverage)
[![CircleCI](https://img.shields.io/circleci/build/github/JacobGrisham/YelpCamp)](https://app.circleci.com/pipelines/github/JacobGrisham/YelpCamp)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/jacobgrisham/YelpCamp)
 </div>

## 🎥 Walkthrough on Youtube
[<img src="public/stylesheets/youtube-thumbnail.png" width="100%">](https://youtu.be/9IqcgAHhJ8k)

## 💡Lessons Learned
-	First full-stack web application
-	Introduction to [Express.js](https://expressjs.com/)
-	Introduction to [MongoDB](https://www.mongodb.com/) database design
-	Introduction to [Bootstrap 5](https://getbootstrap.com/)
-	Optimizing performance, security, and accessibility using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
-	Integration testing with [Jest](https://jestjs.io/)
-	Automated code review with [Codacy](https://app.codacy.com/project/badge/Coverage/6272d48144774479b06e9b4b2caea0d6) and [CodeClimate](https://codeclimate.com/github/JacobGrisham/YelpCamp/maintainability)
-	Continuous Integration and Continuous Deployment with [CircleCI](https://app.circleci.com/pipelines/github/JacobGrisham/YelpCamp)
-	Deploying app to [Heroku](https://www.heroku.com/) and Database to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
-	[Cloudflare](https://www.cloudflare.com/) as a Content Delivery Network in conjunction with custom [Google Domain](https://domains.google/) and Heroku
-	Creating the background SVG illustration with [Inkscape](https://inkscape.org/)

## 🛠 Technologies
|Graphic Design|Front-End	|Back-End	|Database	|Deployment		|Testing 	|
|------------- | ------- 	| ------ 	| ------ 	| --------		| -------	|
|Inkscape	   |HTML5	 	|Node.js 	|Mongoose	|Heroku	  		|Jest    	|
|.			   |CSS3	 	|ExpressJS	|MongoDB	|MongoDB Atlas	|Lighthouse	|
|.			   |Bootstrap 5	|EJS	  	|.		    |Cloudflare		|.       	|
|.			   |Javascript	|.		  	|.		    |Git	      	|.       	|

## ⚖️ Methodology
-	Used a [Model-View-Controller (MVC)](https://martinfowler.com/eaaDev/uiArchs.html#ModelViewController) [Monolithic Architecture](https://www.youtube.com/watch?v=qYhRvH9tJKw) since it's the most simple architecture to gain an introduction to full-stack web development. Building a MVC Monolith allows one to gain a perspective on the range of achitectures, particularly the lower-end of the range. The Monolith Architecture falls short in scalability and separation of front-end and back-end. The MVC Architecture falls short when the application begins to grow in complexity with the addition of services that could stand on thier own. The MVC Architecture is [perhaps best used for simple proof-of-concept projects](https://www.youtube.com/watch?v=rckfN7xFig0), like this one.
-	Developed and maintain the app in [GoormIDE](https://ide.goorm.io/) to gain exposure to a cloud-based IDE.
-	[Bootstrap 5](https://getbootstrap.com/) as the CSS framework to keep the UI simple and quick to build. Since the website takes a performance hit for loading Bootstrap, took full advantage of advanced Bootstrap features such as [custom validation](https://getbootstrap.com/docs/5.0/forms/validation/) for all forms and [animated form input](https://getbootstrap.com/docs/4.0/examples/floating-labels/) for the login and register pages.
-	[Express.js](https://expressjs.com/) as the Node.js application framework since it's a lightweight framework, which is ideal for gaining an understanding of how to build the backend from scratch. Compared to a framework like [Nest.js](https://nestjs.com/) or even [Django](https://www.djangoproject.com/), Express.js doesn't have many features out of the box.
-	[PassportJs](https://github.com/jaredhanson/passport) for the authentication and authorization.
-	NoSQL database for the flexibility compared to a SQL database, [MongoDB](https://www.mongodb.com/) in particular because of its prevalence in the industry.
-	[Embedded Javascript Templates (EJS)](https://ejs.co/) as the front-end templating language for more DRY code compared to plain HTML and for dynamic user-experiences. This is a simple templating language, similar to [Jinja](https://jinja.palletsprojects.com/en/3.0.x/) for Python. Both however fall short on front-end scalability, modularity, and performance compared to a framework like [React](https://reactjs.org/). Working with simple templating languges helps to remind me the benefits of working with a framework like React.
-	[Heroku](https://www.heroku.com/) as the cloud hosting provider to gain experience with PaaS. Since I'm using the free tier, which normally causes the application to sleep after 30 minutes of inactivity, the application is kept awake from 6:00 a.m. to 11:59 p.m. PST with [Kaffeine](https://kaffeine.herokuapp.com/).
-	[Cloudflare](https://www.cloudflare.com/) as the Content Delivery Network to serve users outside of the U.S. with faster load times and for the free SSL certificate, which is needed for domain forwarding to [https://www.yelpcamp.app](https://www.yelpcamp.app). Cloudflare also offers improved security and performance over the defaults in Google Domains.
-	[Inkscape](https://inkscape.org/) to create SVG illustrations from scratch to gain a deeper understanding of SVG. I don't plan on creating SVG graphics from scratch often, but now that I know how to do it, I can easily edit existing SVGs. If I'm unable to find an open-source SVG, now I can always create one exactly as needed.

## ⚙️ Features
-	Login, sign-up, Admin role
-	RESTful routes (Create, Read, Update, Delete) for campgrounds, comments, and reviews
-	Create and Update forms have both client-side and server-side validation
-	Create routes have authentication
-	Update, and Delete routes have authentication and authorization
-	[Google Maps API](https://developers.google.com/maps/documentation)

## 🚀 Getting Started
### To run this project on your system:
Create an .env file and add values to the following variables:
```
GEOCODER_API_KEY=
API_KEY=
DATABASEURL=
PASSPORT_SECRET=
ADMIN_CODE=
```
Make sure you have [MongoDB](https://docs.mongodb.com/manual/installation/) installed on your system
In a terminal window, initialize a MongoDB Database 
```
$ ./mongod
```
In a second terminal window, access the MongoDB Database with Mongoose
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
or for hot reloading (recommended)
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
