import mongoose from 'mongoose';

const answerSchema= new mongoose.Schema({
  author:{type:mongoose.SchemaTypes.ObjectId, ref:"User"},
  likes:[],
  workflows:[],
  comment:String
})
