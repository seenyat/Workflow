import express from "express";
import Question from "../models/Question.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { title, body } = req.body;
  const newPost = await Question.create({
    title,
    body,
  });
  res.json(newPost);
});

export default router;
