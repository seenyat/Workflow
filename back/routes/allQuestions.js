import express from "express";
import Question from "../models/Question.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const questionsList = await Question.find();
  console.log(questionsList);
  res.json(questionsList);
});

export default router;
