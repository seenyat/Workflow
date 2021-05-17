import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import questionRouter from "../routes/question.js";
import allQuestionsRouter from "../routes/allQuestions.js";
import answerRouter from "../routes/answers.js";
import authRouter from "../routes/auth.js";
import commentRouter from "../routes/comment.js"
import passport from "passport";
import session from "express-session";
import profileRouter from "../routes/user.js";
import fileStore from "session-file-store";

const FileStore = fileStore(session);

const config = (app) => {
  mongoose.connect("mongodb://localhost:27017/Workflow", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );

  app.use(
    session({
      store: new FileStore(),
      key: "Workflow",
      secret: "secretKeyWorkflow",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
        expires: 6000000,
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use("/", authRouter);
  app.use("/question", questionRouter);
  app.use("/allquestions", allQuestionsRouter);
  app.use("/answer", answerRouter);
  app.use("/profile", profileRouter);
  app.use("/comment", commentRouter);
};

export default config;
