const Article = require('../models/article');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

const getArticles = (req, res, next) => {
  Article.find({})
    .then((article) => { res.send({ data: article }); })
    .catch(next);
};

const postArticles = (req, res, next) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = req.body;

  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner: req.user._id,
  })
    .then((article) => {
      res.send({ data: article });
    })
    .catch(next);
};

const deleteArticle = (req, res, next) => {
  Article.findById(req.params.articleId)
    .then((article) => {
      if (!article) {
        throw new NotFoundError('Article not found!');
      }
      return article;
    })
    .then((article) => {
      if (article.owner.toString() !== req.user._id) {
        throw new ForbiddenError('Forbidden!');
      }
      return article;
    })
    .then((article) => {
      Article.deleteOne(article, () => {});
    })
    .then(() => res.send({ message: 'successfuly!' }))
    .catch(next);
};

module.exports = { getArticles, postArticles, deleteArticle };
