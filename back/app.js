import middleware from "./middleware/index.js";
import express from "express";
import ansRouter from './routes/answers'
import questRouter from './routes/questions' 
const app = express();
middleware(app);


export default app;

