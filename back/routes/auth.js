import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import GitHubStrategy from "passport-github";
import dotenv from "dotenv";
import User from "../models/User.js";
dotenv.config();

const github = GitHubStrategy.Strategy;

const router = express.Router();

passport.serializeUser(function (user, cb) {
  // console.log(user);
  cb(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log(id);
  User.findOne({ githubID: id })
    .then((user) => {
      console.log(user);
      done(null, user);
    })
    .catch((e) => {
      console.log(e);
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(
  new github(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/login/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      const { name, avatar_url, login, email, id } = profile._json;
      let user = await User.findOne({ login: login });
      if (!user) {
        user = await User.create({
          githubID: id,
          name,
          avatar_url,
          login,
          email,
        });
      }
      return cb(null, profile);
    }
  )
);

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated",
    });
  } else {
    next();
  }
};
router.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies,
  });
});

router.get("/login/auth/github", passport.authenticate("github"));

router.get(
  "/login/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/",
    successRedirect: "http://localhost:3000/",
  })
);

router.get("/logout", (req, res) => {
  res.clearCookie("Workflow");
  req.session.destroy(function (err) {
    res.redirect("http://localhost:3000/");
  });
});

export default router;
