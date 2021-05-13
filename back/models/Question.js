import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  title: String,
  body: String,
  theme: String,
  author: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
  likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: "users" }],
  answers: [{ type: mongoose.SchemaTypes.ObjectId, ref: "questions" }],
});

const Question = mongoose.model("Questions", questionSchema);

export default Question;
