import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import Answer from "../models/Answer.js";
import Question from "../models/Question.js";

router.post("/", async (req, res) => {
  const { workflows, comment, id } = req.body;
  const answer = await Answer.create({
    workflows,
    comment,
    question: mongoose.Types.ObjectId(id),
  });

  res.json(answer);
});

export default router;
