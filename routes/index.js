const router = require('express').Router();

const users = require('./users');
const articles = require('./articles');
const auth = require('../middlewares/auth');

router.use(auth);
router.use('/users', users);
router.use('/articles', articles);

module.exports = router;
