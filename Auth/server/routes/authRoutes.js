import express from "express";
import { userAdd, userVerify } from "../controller/authController.js";
import { limiter } from "../middleware/rateLimiters.js";

const authRouter = express.Router();

authRouter.post("/sign-up",limiter, userAdd);
authRouter.get("/sign-in",limiter,userVerify);


export default authRouter;
