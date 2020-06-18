# Eat-Da-Burger App
A burger devouring app using the MVC architecture

### Topics Covered
* Model-View-Controller (MVC)
* Object Relational Mapping (ORM)
* Express.js
    * HTTP Requests (GET, POST)
    * Routes and static content
    * Handlebars engine integration
* Node.js
    * Backend API calls
* Handlebars Templates and Layouts
* MySQL

### Prerequisites
1. Node.js - Eat-Da-Burger requires Node to be installed

2. To install node visit [Node.js Website](https://nodejs.org/en/ "Node.js") and install node for your operating system.

### Description
This is a simple app that allows user to create a burger of desired and devour such burger.
The application keeps track of the burgers created and burgers devoured.


### Using the Application Locally
1. Create a MySQL database and run the following files to set up the schema
    * db/schema.sql
    * db/seeds.sql
2. Configure the database connection settings in config/connection.js
3. Navigate to the repository folder and run server.js to start

   ```
   $ node server.js
   ```

4. Navigate to localhost:8080 in the browser

5. Add burgers to the New Burgers List and eat them!
