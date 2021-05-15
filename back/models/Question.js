import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  title: String,
  body: String,
  theme: String,
  author: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
  answers: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Answers" }],
  date: Date,
});

const Question = mongoose.model("Questions", questionSchema);

export default Question;
