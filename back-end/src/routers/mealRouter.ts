import { Router } from "express";
import { createMeal, deleteMeal, getMeals, getTotalCalories } from "../controllers/mealController.js";
import { authorization } from "../middlewares/authMiddleware.js";
import { validateExistFoods, validateMealSchema, validateUserMealName } from "../middlewares/mealMiddleware.js";

const mealRouter = Router();

mealRouter.get("/meals", authorization, getMeals);
mealRouter.post("/meals", authorization, validateMealSchema, validateUserMealName, validateExistFoods, createMeal);
mealRouter.get("/meals/totalCalories", authorization, getTotalCalories);
mealRouter.delete("/meals/:mealId", authorization, deleteMeal);

export default mealRouter;