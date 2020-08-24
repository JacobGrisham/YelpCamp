# YelpCamp
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

First full-stack web application. Fundamentally, it's Yelp for campsites. Compared to the other projects, this one is meant to display proficiency with basic technologies. This project was based on the capstone project from the Udemy course [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/).

![Landing Page](https://aqueous-reaches-28926.herokuapp.com/stylesheets/Thumbnail-rectangle.png)

## Table of Contents
- [Application Links](#application-links)
- [Technologies](#technologies)
- [Methodology](#methodology)
- [Features](#features)
- [Project Status](#project-status)
- [Getting Started](#getting-started)
- [Acknowledgments](#acknowledgments)

## Application Links
- [App](https://aqueous-reaches-28926.herokuapp.com/)
- [App demo video](https://youtu.be/9IqcgAHhJ8k)

## Technologies
Graphic Design |  Front-End | Back-End | Database | Deployment
-------------- | ---------- | -------- | -------- | ----------
Inkscape | HTML5 | Node.js | Mongoose | Heroku |
. | CSS3 | ExpressJS | MongoDB | MongoDB Atlas |
. | Bootstrap 4 | EJS | . | Git |
. | Javascript | . | . | . |

## Methodology
- Developed app in [GoormIDE](https://ide.goorm.io/) to gain exposure to cloud-based IDE
- Bootstrap 4 as the CSS framework to keep the UI simple and quick to build
- ExpressJS as the Node.js application framework for its basic functionality. Some companies still use ExpressJS so it was important to implement it.
- PassportJs for the authentication and authorization
- NoSQL database for the flexibility compared to a SQL database, MongoDB in particular because of its prevalence in the industry.

## Features
- Login, sign-up, Admin role
- Create, Edit, Update, Delete (CRUD) for campgrounds, comments, and reviews
- Create routes have authentication
- Edit, Update, and Delete routes have authentication and authorization
- Google Maps API

To Do:
- Forgot password, change username, change password
- Sort campgrounds by review, distance, country, and state
- Disallow duplicate campgrounds. I.e. no more than one unique campground
- Not safe for work (NSFW) picture filter
- Allow multiple photos to be uploaded
- Write comment directly on show page
- Write review directly on show page
- Show 1/3, 1/2, and 2/3 star

## Project Status
- Complete

## Getting Started
To run this project, install it locally using npm:

```
$ npm install
$ npm start
```

## Acknowledgments
- [Colt Steele's YelpCamp Github Repository](https://github.com/Colt/yelp-camp-refactored)
