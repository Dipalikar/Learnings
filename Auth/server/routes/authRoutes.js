import express from "express";
import { userAdd } from "../controller/authController.js";
import { limiter } from "../middleware/rateLimiters.js";

const authRouter = express.Router();

authRouter.post("/sign-up", userAdd);

export default authRouter;
