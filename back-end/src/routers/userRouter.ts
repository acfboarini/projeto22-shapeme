import { Router } from "express";
import { getInfosUser, updateInfosUser } from "../controllers/userController.js";
import { authorization } from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.get("/user", authorization, getInfosUser);
userRouter.put("/user", authorization, updateInfosUser);

export default userRouter;