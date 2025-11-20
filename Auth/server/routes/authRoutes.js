import express from "express";
import { userAdd } from "../controller/authController.js";
import { limiter } from "../middleware/rateLimiters.js";

const authRouter = express.Router();

authRouter.post("/sign-up",limiter, userAdd);

export default authRouter;
