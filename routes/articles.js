const router = require('express').Router();

const { getArticles, postArticles, deleteArticle } = require('../controllers/articles');

router.get('/articles', getArticles);
router.post('/articles', postArticles);
router.delete('articles/:articleId', deleteArticle);

module.exports = router;