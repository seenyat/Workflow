import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import questionRouter from "../routes/question.js";
import allQuestionsRouter from "../routes/allQuestions.js";
import answerRouter from "../routes/answers.js";

const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  app.use(cors());

  app.use("/question", questionRouter);
  app.use("/allquestions", allQuestionsRouter);
  app.use("/answer", answerRouter);

  mongoose.connect("mongodb://localhost:27017/Prep", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default config;
