import express from "express";
import Question from "../models/Question.js";
import Answer from "../models/Answer.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const question = await Question.findById(id).populate("author");
  if (!question) {
    res.status(404).json({ error: "no such question" });
    return;
  }
  const answers = await Answer.find({ question: question._id }).populate(
    "answers"
  );
  res.status(200).json({ question, answers });
});

router.post("/", async (req, res) => {
  const { title, body, authorid, theme } = req.body;
  const newQuestion = await Question.create({
    title,
    body,
    theme,
    author: mongoose.Types.ObjectId(authorid),
    date: new Date(),
  });
  const populatedQuestion = await Question.findOne({
    _id: newQuestion._id,
  }).populate("author");
  res.json(populatedQuestion);
});

router.put("/:id", async (req, res) => {
  await Question.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        body: req.body.body,
      },
    }
  );
  let question = await Question.findById(req.params.id)
    .populate("author")
    .populate("answers");
  res.json(question);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const question = await Question.findById(id);

  await question.answers.map(async (ans) => {
    await Answer.findByIdAndDelete(ans);
  });
  await Question.findByIdAndDelete(id);
  res.json(id);
});

router.post("/like", async (req, res) => {
  let { userID, contentID } = req.body;
  let questionID = contentID;
  questionID = mongoose.Types.ObjectId(questionID);
  let question = await Question.findById(questionID);
  if (question.likes.includes(userID)) {
    question.likes = question.likes.filter((el) => {
      return String(el) !== String(userID);
    });
    await question.save();
    res.status(200).json(question);
  } else {
    question.likes.push(userID);
    await question.save();
    res.status(200).json(question);
  }
});

export default router;
