import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  author: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
  likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: "users" }],
  workflows: [],
  comment: String,
});

const Answer = mongoose.model("Answers", answerSchema);

export default Answer;
