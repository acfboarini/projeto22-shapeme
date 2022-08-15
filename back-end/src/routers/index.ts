import { Router } from "express";
import authRouter from "./authRouter.js";
import foodRouter from "./foodRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(foodRouter);

export default router;