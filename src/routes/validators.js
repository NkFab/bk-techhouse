import { celebrate, Joi, Segments } from "celebrate";

export const createCandidate = celebrate({
  [Segments.BODY]: Joi.object()
    .options({ abortEarly: false })
    .keys({
      first_name: Joi.string().required().label("first name"),
      last_name: Joi.string().required().label("last name"),
      email: Joi.string().required().email().label("email"),
      phone_number: Joi.number()
        .integer()
        .required()
        // .min(10)
        .label("phone number"),
      cv: Joi.string().required().label("cv"),
    }),
});

export const changeStatus = celebrate({
  [Segments.BODY]: Joi.object().keys({
    status: Joi.string()
      .valid("pending", "passed", "dropped")
      .required()
      .label("candidate status"),
  }),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
});

export const getOne = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required().label("candidate id"),
  }),
});
