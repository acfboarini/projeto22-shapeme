import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/authController.js";
import { 
    validateSignUpSchema, validateSignInSchema, validateSignInData, validateSignUpData, authorization 
} from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSignUpSchema, validateSignUpData, signUp);
authRouter.post("/sign-in", validateSignInSchema, validateSignInData, signIn);
authRouter.delete("/sign-out", authorization, signOut);

export default authRouter;