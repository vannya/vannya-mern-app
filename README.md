## vannya-mern-app

MERN app generator by [Van Tabbert](https://github.com/vannya).  
[NPM link](npmjs.com/package/vannya-mern-app)  

My personal generator for quick CRUD applications.  

Lots of the format is pulled from courses I have taken and merged together.
This is a work in progress as I find my fav setup and delve deeper into Node.
This generator does take a bit to load, but be patient and it could save you a bunch of setup time.  

If you'd like to use, please read all of the instructions before starting.

Requires npm 5.2+.  Make sure your node and npm are up to date!

---

## Data to collect before install

Please make sure that you have the following data for creation of the app:  
Note: these are in gitignored.  I'll add a better walk through at a later date.  
1. [Google+ API OAuth Client ID and Secret ID.](https://console.developers.google.com)
2. [mLab database created with database user added.](https://mlab.com) You'll need the URI code with your user and password inserted into it.
3. [Heroku for deployment](https://www.heroku.com).  You'll need to add the config variables in your app at heroku.com.

---

## Installation

Run using `npx install vannya-mern-app` and answering the questions for setup.  
Setup takes a while, especially at the Create-React-App step. Go get a drink and c'mon back!  

After install navigate to the new directory (your app name) and `npm run dev`!

---

### Included features

#### Front End:
+ Create-react-app
+ Redux
+ Google authorization
+ Small and growing collection of helpers and utils that I use on projects.
+ React Router V4
+ 7-1 Sass architecture


#### Backend: 
+ Express
+ Mongo/Mongoose
+ Passport
+ Google Auth 
+ Dev and Prod keys setup
+ Cookie Session

---

### Future Planned Additions
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