module.exports = `const passport = require("passport");
const mongoose = require('mongoose');
require('../models/User');
const User = mongoose.model("users");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.put("/api/current_user/:id", (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if(err){
        res.status(500).send(err);
      } else {
        user.googleId = req.body.googleId;
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        user.save((err, user) => {
          if(err) {
            res.status(500).send(err);
          }
          res.status(200).send(user);
        });
      }
    })
  });
};`
