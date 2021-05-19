import express from "express";
import Answer from "../models/Answer.js";
import Question from "../models/Question.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const questionsList = await Question.find({})
    .populate("author")
    .populate("answers")
    .populate({
      path: "answers",
      populate: {
        path: "comments",
        model: "Comment",
        populate: { path: "author", model: "User" },
      },
    });
  const answersList = await Answer.find({})
    .populate("author")
    .populate("question")
    .populate({
      path: "comments",
      model: "Comment",
      populate: { path: "author", model: "User" },
    });
  res.json({ answersList, questionsList, cookies: req.cookies });
});

export default router;
