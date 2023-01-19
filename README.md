<div align="center">
  <img width="200" src="public/favicon/android-chrome-512x512.png" alt="YelpCamp logo">

# [YelpCamp](https://www.yelpcamp.app/)
![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=brightgreen&up_message=online&url=https%3A%2F%2Fyelpcamp.app)
![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fwww.yelpcamp.app)
[![Maintainability](https://api.codeclimate.com/v1/badges/5db672c308be3e556462/maintainability)](https://codeclimate.com/github/JacobGrisham/YelpCamp/maintainability)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/6272d48144774479b06e9b4b2caea0d6)](https://www.codacy.com/manual/JacobGrisham/YelpCamp?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JacobGrisham/YelpCamp&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/6272d48144774479b06e9b4b2caea0d6)](https://www.codacy.com/gh/JacobGrisham/YelpCamp/dashboard?utm_source=github.com&utm_medium=referral&utm_content=JacobGrisham/YelpCamp&utm_campaign=Badge_Coverage)
[![CircleCI](https://img.shields.io/circleci/build/github/JacobGrisham/YelpCamp)](https://app.circleci.com/pipelines/github/JacobGrisham/YelpCamp)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/jacobgrisham/YelpCamp)
![GitHub all releases](https://img.shields.io/github/downloads/jacobgrisham/yelpcamp/total)
 </div>

## 🧭 Folder/File Structure
(ignoring image and SEO files)
```
|-- README.md
|-- app.js
|-- globalConfig.json
|-- index.test.js
|-- jest-mongodb-config.js
|-- jest.config.js
|-- middleware
|   `-- index.js
|-- models
|   |-- campground.js
|   |-- comment.js
|   |-- review.js
|   `-- user.js
|-- package-lock.json
|-- package.json
|-- public
|   `-- stylesheets
|       |-- analytics.js
|       |-- main.css
|-- routes
|   |-- campgrounds.js
|   |-- comments.js
|   |-- index.js
|   `-- reviews.js
`-- views
    |-- campgrounds
    |   |-- edit.ejs
    |   |-- index.ejs
    |   |-- new.ejs
    |   `-- show.ejs
    |-- comments
    |   |-- edit.ejs
    |   `-- new.ejs
    |-- landing.ejs
    |-- login.ejs
    |-- partials
    |   |-- footer.ejs
    |   `-- header.ejs
    |-- register.ejs
    |-- reviews
    |   |-- edit.ejs
    |   |-- index.ejs
    |   `-- new.ejs
    `-- users
        `-- show.ejs
```

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
To run the tests:
```
$ npm test
```

## 📣 Acknowledgments
-	The skeleton of this project was based on [Colt Steele's YelpCamp](https://github.com/Colt/yelp-camp-refactored) during the Web Development Bootcamp.

## 🔒 License
Copyright Notice and Statement: currently not offering any license. Permission only to view and download.
