import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  author: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
  likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: "users" }],
  question:{ type: mongoose.SchemaTypes.ObjectId,ref: "Questions"},
  workflows: [],
  comment: String,
  date: Date,
});

const Answer = mongoose.model("Answers", answerSchema);

export default Answer;
