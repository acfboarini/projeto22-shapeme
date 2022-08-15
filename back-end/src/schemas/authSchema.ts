import Joi from "joi";

export const signUpSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    birthDate: Joi.string().required(),
    image: Joi.string(),
    currentWeight: Joi.number().required(),
    height: Joi.number().required(),
    basalRate: Joi.number()
})

export const signInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})