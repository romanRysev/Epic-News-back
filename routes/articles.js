const router = require('express').Router();
const validatePostArticles = require('../middlewares/validators/validatePostArticles');
const validateDeleteArticles = require('../middlewares/validators/validateDeleteArticles');

const { getArticles, postArticles, deleteArticle } = require('../controllers/articles');

router.get('/', getArticles);
router.post('/', validatePostArticles, postArticles);
router.delete('/:articleId', validateDeleteArticles, deleteArticle);

module.exports = router;
