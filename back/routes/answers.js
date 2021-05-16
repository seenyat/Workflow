import express from "express";
import mongoose from "mongoose";
import Answer from "../models/Answer.js";
import Question from "../models/Question.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { workflows, comment, id, authorId } = req.body;
  const answer = await Answer.create({
    workflows,
    comment,
    question: mongoose.Types.ObjectId(id),
    author: mongoose.Types.ObjectId(authorId),
    date: new Date(),
  });
  const question = await Question.findById(id);
  question.answers.push(answer._id);
  await question.save();
  res.status(200).json(answer);
});

router.post("/like", async (req, res) => {
  let { userID, answerID } = req.body;
  userID = mongoose.Types.ObjectId(userID);
  let answer = await Answer.findById(answerID);
  if (answer.likes.includes(userID)) {
    answer.likes = answer.likes.filter((el) => {
      return String(el) !== String(userID);
    });
    await answer.save();
    res.status(200).json(answer);
  } else {
    answer.likes.push(userID);
    await answer.save();
    res.status(200).json(answer);
  }
});

export default router;
