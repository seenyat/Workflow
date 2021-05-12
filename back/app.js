import middleware from './middleware/index.js'
import express from "express";

const app = express();
middleware(app);

export default app
