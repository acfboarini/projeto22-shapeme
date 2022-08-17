import Joi from "joi";

export const mealSchema = Joi.object({
    name: Joi.string().required(),
    foodName: Joi.number().required(),
    amount: Joi.number().required(),
})