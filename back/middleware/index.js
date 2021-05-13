import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import questionRouter from "../routes/question.js";
import allQuestionsRouter from "../routes/allQuestions.js";
import answerRouter from "../routes/answers.js";
import authRouter from "../routes/auth.js";
import passport from "passport";
import session from "express-session";

const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  app.use(cors());
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(
    session({
      key: "Workflow",
      secret: "secretKeyWorkflow",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
        expires: 600000
      },
    })
  );

  app.use("/question", questionRouter);
  app.use("/allquestions", allQuestionsRouter);
  app.use("/answer", answerRouter);
  app.use("/", authRouter);

  mongoose.connect("mongodb://localhost:27017/Workflow", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default config;
