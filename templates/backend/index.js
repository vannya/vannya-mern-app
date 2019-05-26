module.exports = `const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");

// Exit if the Google Auth information is not provided
if(!keys.googleClientSecret || !keys.googleClientID){
  console.log('Please provide Google Auth information for authentication to work.')
  process.exit(1);
} else {
  require("./services/passport");
}

// Exit if URI not provided
if(!keys.mongoURI) {
  console.log('Please provide Mongo URI for authentication to work.')
  process.exit(1);
} else {
  mongoose.connect(keys.mongoURI, { useNewUrlParser: true } );
}

const app = express();

app.use(bodyParser.json());

if(!keys.cookieKey) {
  console.log('Please provide Cookie Key in dev.js configuration file.');
  process.exit(1);
} else {
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );
}

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);`