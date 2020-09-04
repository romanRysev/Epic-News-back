const { celebrate, Joi } = require('celebrate');

const validateSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    mode: Joi.string(),
  }),
});


module.exports = validateSignin;
