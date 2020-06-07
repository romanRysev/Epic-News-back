const router = require('express').Router();

const getMe = require('../controllers/getMe');
const articles = require('./articles');
const auth = require('../middlewares/auth');
const signIn = require('../controllers/signin');
const signUp = require('../controllers/signup');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.use(auth);
router.get('/users/me', getMe);
router.use('/articles', articles);

module.exports = router;