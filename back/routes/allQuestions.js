import express from "express";
import Answer from "../models/Answer.js";
import Question from "../models/Question.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const questionsList = await Question.find({})
    .populate("author")
    .populate("answers");
  const answersList = await Answer.find({})
    .populate("author")
    .populate("answers");
  res.json({ answersList, questionsList, cookies: req.cookies });
});

export default router;
