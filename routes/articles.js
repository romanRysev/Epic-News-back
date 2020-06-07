const router = require('express').Router();

const { getArticles, postArticles, deleteArticle } = require('../controllers/articles');

router.get('/', getArticles);
router.post('/', postArticles);
router.delete('/:articleId', deleteArticle);

module.exports = router;
