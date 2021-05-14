import express from "express";
import Question from "../models/Question.js";
import Answer from "../models/Answer.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const question = await Question.findById(id);

  const answers = await Answer.find({ question: question._id });
  // console.log(answers);
  res.status(200).json({ question, answers });
});

router.post("/", async (req, res) => {
  const { title, body, authorid } = req.body;
  console.log(authorid);
  const newPost = await Question.create({
    title,
    body,
    author: mongoose.Types.ObjectId(authorid),
    date: new Date(),
  });
  res.json(newPost);
});

router.put("/:id", async (req, res) => {
  // console.log(req.body);
  let x = await Question.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        body: req.body.body,
      },
    }
  );

  res.json(x);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Question.findByIdAndDelete(id, (error, questionToDelete) => {
    if (error) {
      res.status(400).json({ delete: false, error });
    } else if (!questionToDelete) {
      res.status(404).json({ delete: false });
    } else {
      res.status(200).json({ delete: true, id });
    }
  });
});
export default router;
