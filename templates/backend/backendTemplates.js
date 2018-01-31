module.exports = {
  "services/passport.js": require("./services/passport"),
  "routes/authRoutes.js": require("./routes/authRoutes"),
  "models/User.js": require("./models/User"),
  "middlewares/requireLogin.js": require("./middlewares/requireLogin"),
  "index.js": require("./index"),
  "config/dev.js": require("./config/dev"),
  "config/prod.js": require("./config/prod"),
  "config/keys.js": require("./config/keys"),
  ".gitignore": require("./gitignore")
};