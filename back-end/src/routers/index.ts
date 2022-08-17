import { Router } from "express";
import authRouter from "./authRouter.js";
import foodRouter from "./foodRouter.js";
import mealRouter from "./mealRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(foodRouter);
router.use(mealRouter);

export default router;