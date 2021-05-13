import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import Answer from "../models/Answer.js";
import Question from "../models/Question.js";

router.post("/", async (req, res) => {
console.log(req.body);
  const { workflows, comment, id ,authorId} = req.body;

  const answer = await Answer.create({
    workflows,
    comment,
    question: mongoose.Types.ObjectId(id),
    author:mongoose.Types.ObjectId(authorId)
  });

  res.json(answer);
});

export default router;
