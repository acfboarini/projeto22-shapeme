import Joi from "joi";

export const foodSchema = Joi.object({
    name: Joi.string().required(),
    portion: Joi.number().required(),
    protein: Joi.number().required(),
    carbo: Joi.number().required(),
    fat: Joi.number().required(),
    kcal: Joi.number().required(),
})