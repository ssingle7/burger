# 🍔 Eat Da Burger 

### Overview
A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them!
Please check out the launched app on Heroku [here]()!
# Installation

Using an home-grown ORM, the app has 3 basic CRUD functions...
  1. READ all entries from the MySQL database and display them to the DOM using Handlebars.
  2. UPDATE a selected burger by clicking "Devour It", which...
    * hits an `/burger/eat/:id` route in Express to change its "devoured" status in the MySQL database
    * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
  3. CREATE a new burger using the "Place Order" form, which...
    * hits a `/burger/create` route in Express to insert a new burger into the MySQL database
    * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)
## Preview 

![EatDaBurger](/eatdaburger1.PNG)
![EatDaBurger](eat-da-burger1.PNG)

### Credits

* 02-ask-the-class

* Tutor

* Ask BCS 

### License 

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub license](https://img.shields.io/badge/Javascript-yellow)
![GitHub license](https://img.shields.io/badge/-node.js-green)
![GitHub license](https://img.shields.io/badge/-inquirer-red)
![GitHub license](https://img.shields.io/badge/mySQL-blue)

Copyright (c) [2020] [Selena Singleton]