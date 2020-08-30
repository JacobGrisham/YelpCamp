# YelpCamp
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat&color=green)](https://github.com/feross/standard)
[![Maintainability](https://api.codeclimate.com/v1/badges/5db672c308be3e556462/maintainability)](https://codeclimate.com/github/JacobGrisham/YelpCamp/maintainability)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ebfdffcf2f03490a9060decba3139874)](https://www.codacy.com/manual/JacobGrisham/YelpCamp?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JacobGrisham/YelpCamp&amp;utm_campaign=Badge_Grade)

First full-stack web application. Fundamentally, it's Yelp for campsites. Compared to the other projects, this one is meant to display proficiency with the basics of the technologies listed in the table below. The skeleton of this project was based on the capstone project from the Udemy course [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/).

![Landing Page](https://aqueous-reaches-28926.herokuapp.com/stylesheets/Thumbnail-rectangle.png)

- [App](https://aqueous-reaches-28926.herokuapp.com/)
- [App demo video](https://youtu.be/9IqcgAHhJ8k)

## Table of Contents
- [Technologies](#technologies)
- [Methodology](#methodology)
- [Features](#features)
- [Project Status](#project-status)
- [Getting Started](#getting-started)
- [Tests](#tests)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Technologies
Graphic Design |  Front-End | Back-End | Database | Deployment | Testing
-------------- | ---------- | -------- | -------- | ---------- | -------
[Inkscape](https://inkscape.org/) | HTML5 | Node.js | Mongoose | Heroku | [Jest](https://jestjs.io/)
. | CSS3 | ExpressJS | MongoDB | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) | [Lighthouse](https://developers.google.com/web/tools/lighthouse)
. | Bootstrap 4 | EJS | . | Git | .
. | Javascript | . | . | . | .

## Methodology
- Developed app in [GoormIDE](https://ide.goorm.io/) to gain exposure to cloud-based IDE.
- [Bootstrap 4](https://getbootstrap.com/) as the CSS framework to keep the UI simple and quick to build.
- [ExpressJS](https://expressjs.com/) as the Node.js application framework for its basic functionality. Some companies still use ExpressJS so it was important to implement it.
- [PassportJs](https://github.com/jaredhanson/passport) for the authentication and authorization.
- NoSQL database for the flexibility compared to a SQL database, [MongoDB](https://www.mongodb.com/) in particular because of its prevalence in the industry.
- [Heroku](https://www.heroku.com/) due to the simple nature of the application and don't foresee scaling up server usage.

## Features
- Login, sign-up, Admin role
- REST API (create, read, update, delete) for campgrounds, comments, and reviews
- Create routes have authentication
- Edit, Update, and Delete routes have authentication and authorization
- [Google Maps API](https://developers.google.com/maps/documentation)

To Do:
- Sort campgrounds by review, distance, country, and state
- Disallow duplicate campgrounds. I.e. no more than one unique campground
- Not safe for work (NSFW) picture filter
- Allow multiple photos to be uploaded
- Write comment directly on show page
- Write review directly on show page
- Show 1/3, 1/2, and 2/3 of a star
- Forgot password, change username, change password

## Project Status
- Complete

## Getting Started
To run this project, install it locally using npm:

```
$ npm install
$ npm start
```

## Tests
The unit tests using [Jest](https://jestjs.io/) test the creation of data, the functionality of the schema, and the functionality of the validation. The tests are iterated over each of the models: campgrounds, comments, reviews, users.
To run the tests:
```
$ npm test
```

## Acknowledgments
- [Colt Steele's YelpCamp Github Repository](https://github.com/Colt/yelp-camp-refactored)

## License
Copyright Notice and Statement: currently not offering any license. Permission only to view and download.
