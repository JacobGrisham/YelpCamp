# YelpCamp
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

First full-stack web application. Fundamentally, it's Yelp for campsites. The main features are login, sign-up, Admin role, Google Maps API, and Create, Edit, Update, Delete (CRUD) for campgrounds, comments, and reviews. Create routes have authentication. Edit, Update, and Delete routes have authentication and authorization. Compared to the other projects, this one is meant to display proficiency with basic technologies.
![Landing Page](production/public/stylesheets/Thumbnail-rectangle.png)

## Table of Contents
### [Application Links](#application-links)
### [Technologies](#technologies)
### [Methodology](#methodology)
### [Getting Started](#getting-started)
### [Acknowledgments](#acknowledgements)

## Application Links
- [App](https://aqueous-reaches-28926.herokuapp.com/)
- [App demo](https://youtu.be/9IqcgAHhJ8k)

## Technologies
### Front-End:
- HTML5, CSS3, Bootstrap 4, Javascript
### Back-End:
- Node.js, ExpressJS, EJS
### Database:
- Mongoose, MongoDB
### Deployment:
- Heroku, MongoDB Atlas, Git

## Methodology
- Developed app in [GoormIDE](https://ide.goorm.io/) to gain exposure to cloud-based IDE
- Bootstrap 4 as the CSS framework to keep the UI simple and quick to build
- ExpressJS as the Node.js application framework for its basic functionality. Some companies still use ExpressJS so it was important to implement it.
- PassportJs for the authentication and authorization
- NoSQL database for the flexibility compared to a SQL database, MongoDB in particular because of its prevalence in the industry.

## Getting Started
To run this project, install it locally using npm:

```
$ cd ../lorem
$ npm install
$ npm start
```

## Acknowledgments
- The basic foundation was built in the capstone project from the Udemy course [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/).
