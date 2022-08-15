import { Router } from "express";
import { createFood } from "../controllers/foodController.js";
import { authorization } from "../middlewares/authMiddleware.js";
import { validateFoodSchema } from "../middlewares/foodMiddleware.js";

const foodRouter = Router();

foodRouter.post("/foods", authorization, validateFoodSchema, createFood);

export default foodRouter;