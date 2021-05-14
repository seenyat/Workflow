import express from "express";
import mongoose from "mongoose";
import Answer from "../models/Answer.js";

const router = express.Router();

router.post("/", async (req, res) => {
console.log(req.body);
  const { workflows, comment, id ,authorId} = req.body;

  const answer = await Answer.create({
    workflows,
    comment,
    question: mongoose.Types.ObjectId(id),
    author:mongoose.Types.ObjectId(authorId),
    date: new Date(),
  });

  res.json(answer);
});

export default router;
