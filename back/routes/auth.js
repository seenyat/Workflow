import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import GitHubStrategy from "passport-github";
import dotenv from "dotenv";
dotenv.config();

const github = GitHubStrategy.Strategy;

const router = express.Router();

passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  cb(null, id);
});

passport.use(
  new github(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/login/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // User.findOrCreate({ githubId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
      console.log(profile);
      cb(null, profile);
    }
  )
);


router.get("/", async (req, res) => {
  res.send("main");
});

router.get("/login", async (req, res) => {
  console.log(req.session.passport);
  res.send("login");
});

router.get("/login/auth/github", passport.authenticate("github"));

router.get(
  "/login/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/login");
  }
);

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/')
})

export default router;
