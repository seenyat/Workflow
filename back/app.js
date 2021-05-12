import middleware from "./middleware/index.js";
import express from "express";
// import ansRouter from "./routes/answers.js";
// import questRouter from "./routes/questions.js";

import questionRouter from "./routes/question.js";
import allQuestionsRouter from "./routes/allQuestions.js";

const app = express();
middleware(app);

app.use("/postQuestion", questionRouter);
app.use("/allquestions", allQuestionsRouter);

export default app;
