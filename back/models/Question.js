import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  title:String,
  body:String,
  author: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
  likes: [{type:mongoose.SchemaTypes.ObjectId, ref:"users"}],
  answers:[],
});


const Question =mongoose.model("Questions",questionSchema)

export default Question
