import express from "express";
const router = express.Router();
import Answer from "../models/Answer.js";
import User from "../models/User.js";
import Question from "../models/Question.js";
import mongoose from "mongoose";

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  const answers = await Answer.find({ author: user._id });
  const questions = await Question.find({ author: user._id });
  res.status(200).json({ user, answers, questions });
});


router.post('/addworkflow', async(req,res)=>{
 const {todo,userID}=req.body

 const user = await User.findById({id:userID})
 user.workflows.push(todo)
 await user.save()
res.json(user)
})
export default router;
