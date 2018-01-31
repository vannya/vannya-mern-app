## vannya-mern-app

MERN app generator by [Van Tabbert](https://github.com/vannya).  

My personal generator for quick CRUD applications.  

Lots of the format is pulled from courses I have taken and merged together.
This is a work in progress as I find my fav setup and delve deeper into Node.
This generator does take a bit to load, but be patient and it could save you a bunch of setup time.  

If you'd like to use, please read all of the instructions before starting.

---

## Installation

`npm install vannya-mern-app` || `yarn add vannya-mern-app`  

Run using `vannya-mern-app` and answering the questions for setup.  

## How to use

Please make sure that you have the following data for creation of the app:  
Note: these are in gitignored.  I'll add a better walk through at a later date.  
1. [Google+ API OAuth Client ID and Secret ID.](https://console.developers.google.com)
2. [mLab database created with database user added.](https://mlab.com) You'll need the URI code with your user and password inserted into it.
3. [Heroku for deployment](https://www.heroku.com).  You'll need to add the config variables in your app at heroku.com.

### Included features

#### Front End:
+ Create-react-app
+ Redux
+ Google authorization
+ Small and growing collection of helpers and utils that I use on projects.
+ React Router V4


#### Backend: 
+ Express
+ Mongo/Mongoose
+ Passport
+ Google Auth 
+ Dev and Prod keys setup
+ Cookie Session

---

### Future Planned Additions
+ 7-1 Sass architecture (building now)
+ Stripe Integration option.
+ Smaller React app generator.
+ Adding in tests.

---

### Reporting issues

+ Look for any related issues.  
+ If you find an issue that seems related, please comment there instead of creating a new one.  
+ If you find no related issue, create a new one.  
+ Include all details you can ( operative system, environment, interpreter version, etc.. ).  
+ Include the error log.  
+ Remember to check the discussion and update if there changes.  

### Contributing  

+ Fork the repository  
+ Create your feature branch  
+ Commit your changes and push the branch  
+ Submit a pull request