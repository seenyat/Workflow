import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";

const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  app.use(cors());

  mongoose.connect("mongodb://localhost:27017/Prep", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
};

export default config;
