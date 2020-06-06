const router = require('express').Router();

const getMe = require('../controllers/getMe');
const articles = require('./articles');
const auth = require('../middlewares/auth');
const signin = require('../controllers/signin');
const signup = require('../controllers/signup');

router.post('/signup', signup);
router.post('/signin', signin);
router.use(auth);
router.get('/users/me', getMe);
router.use('/articles', articles);

module.exports = router;