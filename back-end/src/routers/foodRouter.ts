import { Router } from "express";
import { createFood, deleteFood, getFoods } from "../controllers/foodController.js";
import { authorization } from "../middlewares/authMiddleware.js";
import { validateFoodName, validateFoodSchema } from "../middlewares/foodMiddleware.js";

const foodRouter = Router();

foodRouter.post("/foods", authorization, validateFoodSchema, validateFoodName, createFood);
foodRouter.get("/foods", authorization, getFoods);
foodRouter.delete("/foods/:foodId", authorization, deleteFood);
//foodRouter.put("foods", authorization);

export default foodRouter;