const { celebrate, Joi } = require('celebrate');

const validateDeleteArticles = celebrate({
  params: Joi.object().keys({
    articleId: Joi.string().alphanum().pattern(new RegExp('^[0-9a-fA-F]{24}$')),
  }),
});

module.exports = validateDeleteArticles;
