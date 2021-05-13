import express from "express";
import Question from "../models/Question.js";
const router = express.Router();

router.get("/", async (req, res) => {

  const questionsList = await Question.find({});

  res.json({ questionsList, cookies: req.cookies });

});

export default router;
