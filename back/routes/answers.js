import express from "express";
import mongoose from "mongoose";
import Answer from "../models/Answer.js";

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

  res.json(answer);
});

router.post("/like", async (req, res) => {
  let { userID, answerID } = req.body;
  userID = mongoose.Types.ObjectId(userID);
  let answer = await Answer.findById(answerID);
  if (answer.likes.includes(userID)) {
    answer.likes = answer.likes.filter((el) => {
      return el === userID;
    });
    await answer.save();
  } else {
    answer.likes.push(userID);
    await answer.save();
    res.status(200).json(answer);
  }
});

export default router;
