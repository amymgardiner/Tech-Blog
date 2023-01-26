# Tech Blog

## About

This was my module 14 challenge for my coding bootcamp.

It is a CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts as well. I built this site completely from scratch and deployed it to Heroku. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## How It Works

GIVEN a CMS-style blog site, WHEN you visit the site for the first time, THEN you are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the option to log in.

WHEN you click on any other links in the navigation, THEN you are prompted to either sign up or sign in. WHEN you choose to sign up, THEN you are prompted to create a username and password. WHEN you click on the sign-up button, THEN your user credentials are saved and you are logged into the site. WHEN you revisit the site at a later time and choose to sign in, THEN you are prompted to enter my username and password.

WHEN your are signed in to the site, THEN you will see navigation links for the homepage, the dashboard, and the option to log out. WHEN you click on the homepage option in the navigation, THEN you are taken to the homepage and presented with existing blog posts that include the post title and the date created.

WHEN you click on an existing blog post, THEN you are presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment. WHEN you enter a comment and click on the submit button while signed in, THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.

WHEN you click on the dashboard option in the navigation, THEN you are taken to the dashboard and presented with any blog posts you have already created and the option to add a new blog post. WHEN you click on the button to add a new blog post, THEN you are prompted to enter both a title and contents for your blog post. WHEN you click on the button to create a new blog post, THEN the title and contents of your post are saved and you are taken back to an updated dashboard with your new blog post. WHEN you click on one of your existing posts in the dashboard, THEN you are able to delete or update your post and taken back to an updated dashboard.

WHEN you click on the logout option in the navigation, THEN you are signed out of the site. Also WHEN you are idle on the site for more than a set time (20 minutes), THEN you are able to view comments but you are prompted to log in again before you can add comments.

## Link

[Tech Blog Render App](https://tech-blog-bz1d.onrender.com/)

![nameless-wave-53843 herokuapp com_ (1)](https://user-images.githubusercontent.com/99151426/189772200-3bf988b9-0bc1-49d6-b85d-d193667aeb8c.png)

**Update: Due to the removal of Heroku's free product plans, I have found another free hosting platform that was not taught in the bootcamp. The [Heroku link](https://nameless-wave-53843.herokuapp.com/) for this site no longer works. Please view this site with the new link above. Thanks!**
