import express from "express";
import Question from "../models/Question.js";
const router = express.Router();

router.get("/", async (req, res) => {

  const questionsList = await Question.find({});
  // console.log(req.user);

  res.json({ questionsList, user: req.user, cookies: req.cookies });

});

export default router;
