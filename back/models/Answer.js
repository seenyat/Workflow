import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  author: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
  question: { type: mongoose.SchemaTypes.ObjectId, ref: "Questions" },
  workflows: [],
  comment: Object,
  date: Date,
});

const Answer = mongoose.model("Answers", answerSchema);

export default Answer;
