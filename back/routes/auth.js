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
      return cb(null, profile);
    }
  )
);

router.get("/", async (req, res) => {
  res.send("main");
});

router.get("/login", async (req, res) => {
  res.send("login");
});

router.get("/login/auth/github", passport.authenticate("github"));

router.get(
  "/login/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  async function (req, res) {
    const { name, avatar_url, login, email } = req.user._json;
    let user = await User.findOne({ login: login });
    if (!user) {
      user = await User.create({
        name,
        avatar_url,
        login,
        email,
      });
    }
    res.status(200).json(req.user._json);
  }
);

router.get("/logout", (req, res) => {
  res.clearCookie("Workflow");
  res.redirect("/");
});

export default router;
