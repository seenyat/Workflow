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

router.delete("/", async (req, res) => {
  const { content } = req.body;
  await Comment.findByIdAndDelete(content._id);
  const answer = await Answer.findById(content.answer);
  answer.comments = answer.comments.filter((comm) => comm._id !== content._id);
  await answer.save();
  res.json({ content, question: answer.question });
});

export default router;
