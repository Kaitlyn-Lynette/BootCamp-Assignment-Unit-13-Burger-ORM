

# Eat-Da-Burger 

In this assignment, I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Followed the MVC design pattern; used Node and MySQL to query and route data in the app, and Handlebars to generate HTML.

# Table of Contents 

###### Learning Objectives
###### Development Process 
###### User Story
###### Summary of Topics Covered
###### Comprehension Check 
###### Installation and Usage
###### Credits, Tools, and References
###### Questions

# Learning Objectives

* Render dynamic HTML using the Handlebars.js template engine
* Implement MVC modularization in a full-stack web application
* Implement a custom ORM in the Model layer of an MVC framework
* Configure Heroku for deployment of an application using MySQL 
* Understand the interaction between the model, view and controller.
* Understand the benefits of object-relational mapping

# Development Process 

1. Understand the learning objectives, purpose, concept of the application
2. Create the database schema
3. Setup the MVC structure 
4. Implement handlebars for the views 
5. Develop functionality 
6. Review and deploy 

# User Story

1. Whenever a user submits a burger's name,  app will display the burger on the left side of the page -- waiting to be devoured.
2. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
3. The app will store every burger in a database, whether devoured or not.

# Summary of Topics Covered

* Template engines
* Handlebars.js
* Model-View-Controller
* Object Relational Mapping

# Comprehension Check 

1. What are the benefits of the MVC framework? 
MVC allows for the front-end and back-end teams to work simultaneously. The back-end team can work on building the model and controllers while the front-end team builds the view. 
MVC supports a concept in Computer Science called seperation of concerns (SoC) and because of the seperation, future development or modification and testability of the code can be better. 

2. What is an ORM?
ORM stands for Object-Relational Mapper. Allows developers to configure different databases and interact with a database with a language of choice instead of SQL. 

3. How does a template engine work?
Javascript templating engines allow a developer to add dynamic logic to static HTML pages. Handlebars specifically uses a template and an input object to generate HTML. Handlebars supports simple expressions from an object, supports next input objects, and built-in block-helpers each and with allow for changes in evaluation. For example, the change in status between a burger that devoured and not devoured. Also allows for partials, and partials allow for code reuse. 

# Installation and Usage

[GitHub Repo](https://github.com/Kaitlyn-Lynette/Unit-13-Burger-ORM)

[Deployed Application](https://burger-eater-orms.herokuapp.com/)

# Credits, Tools, and References

[HandleBars](https://handlebarsjs.com/guide/#partials)

# Questions

Questions, suggestions, feedback: Reach me at kaitlyn.l.rodriguez@gmail.com

