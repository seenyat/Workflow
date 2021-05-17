import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  author: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
  answer: { type: mongoose.SchemaTypes.ObjectId, ref: "Answers" },
  date: Date,
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
