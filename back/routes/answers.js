import express from "express";
const router = express.Router();
import Answer from "../models/Answer.js";
import Question from "../models/Question.js";

router.post("/", async (req, res) => {
  const { workflows, comment } = req.body;
  const answer = await Answer.create({
    workflows,
    comment,
  });
  
  res.json(answer);
});

export default router;
