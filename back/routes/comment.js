import express from "express";
import mongoose from "mongoose";
import Answer from "../models/Answer.js";
import Comment from "../models/Comment.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { authorId, answerId, content } = req.body;
  let comment = await Comment.create({
    author: mongoose.Types.ObjectId(authorId),
    answer: mongoose.Types.ObjectId(answerId),
    content,
    date: new Date(),
  });
  comment = await comment.populate("author").execPopulate();
  const answer = await Answer.findById(answerId);
  answer.comments.push(comment._id);
  await answer.save();
  res.status(200).json({ comment, questionId: answer.question });
});

export default router;
