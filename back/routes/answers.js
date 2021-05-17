import express from "express";
import mongoose from "mongoose";
import Answer from "../models/Answer.js";
import Question from "../models/Question.js";
import User from "../models/User.js";
import nodemailer from "nodemailer";

const workflowEmailAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "workflowelbrus@gmail.com",
    pass: "WorkflowElbrus2021",
  },
});

const router = express.Router();

router.post("/", async (req, res) => {
  const { workflows, comment, id, authorId } = req.body;
  const answer = await Answer.create({
    workflows,
    comment,
    question: mongoose.Types.ObjectId(id),
    author: mongoose.Types.ObjectId(authorId),
    date: new Date(),
  });
  const question = await Question.findById(id);
  question.answers.push(answer._id);
  await question.save();
  const user = await User.findById(authorId);
  if (user.email !== null) {
    await transporter.sendMail({
      from: 'workflowelbrus@gmail.com"',
      to: user.email,
      subject: "Получен новый ответ",
      html: `Перейдите по <a href=${
        process.env.MAIN_BACK + "question/" + question._id
      }>ссылке </a>для просмотра нового ответа на Ваш вопрос`,
    });
  }
  res.status(200).json(answer);
});

router.delete("/", async (req, res) => {
  let questionForUpdate = await Question.findById(req.body.questionID);
  questionForUpdate.answers = questionForUpdate.answers.filter(
    (ans) => String(ans) !== String(req.body.answerID)
  );
  await questionForUpdate.save();
  await Answer.findByIdAndDelete(req.body.answerID);
  res.json({ questionID: req.body.questionID, answerID: req.body.answerID });
});

router.post("/like", async (req, res) => {
  let { userID, answerID } = req.body;
  userID = mongoose.Types.ObjectId(userID);
  let answer = await Answer.findById(answerID);
  if (answer.likes.includes(userID)) {
    answer.likes = answer.likes.filter((el) => {
      return String(el) !== String(userID);
    });
    await answer.save();
    res.status(200).json(answer);
  } else {
    answer.likes.push(userID);
    await answer.save();
    res.status(200).json(answer);
  }
});

export default router;
