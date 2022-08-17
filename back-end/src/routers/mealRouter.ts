import { Router } from "express";
import { createMeal, getMeals, getTotalCalories } from "../controllers/mealController.js";
import { authorization } from "../middlewares/authMiddleware.js";
import { validateExistFoods } from "../middlewares/mealMiddleware.js";

const mealRouter = Router();

mealRouter.get("/meals", authorization, getMeals);
mealRouter.post("/meals", authorization, validateExistFoods, createMeal);
mealRouter.get("/meals/totalCalories", authorization, getTotalCalories);

export default mealRouter;