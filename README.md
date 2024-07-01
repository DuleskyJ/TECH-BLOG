# Tech Blog

This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts. This application follows the MVC paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and express-session for authentication.

## Features

- User authentication (sign up, login, logout)
- Create, read, update, and delete blog posts
- Comment on blog posts
- View all blog posts on the homepage
- User dashboard to manage posts

## Installation

1. Clone the repository:

git clone https://github.com/your-username/tech-blog.git

Install dependencies:

npm install

Create a .env file in the root directory and add the following:

DB_NAME='tech_blog_db'
DB_USER='your_mysql_username'
DB_PW='your_mysql_password'
SESSION_SECRET='your_generated_secret'

Initialize the database:
go to bash
run these lines of code 
'mysql -u root -p'
'source path/to/db/schema.sql'

Seed the database:

npm run seed

Start the server

npm start

Navigate to http://localhost:3001 in your browser to use the application.

## License
This project is licensed under the MIT License.