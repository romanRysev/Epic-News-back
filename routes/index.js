const router = require('express').Router();

const getMe = require('../controllers/getMe');
const articles = require('./articles');
const auth = require('../middlewares/auth');
const signIn = require('../controllers/signin');
const signUp = require('../controllers/signup');
const NotFoundError = require('../errors/NotFoundError');
const { notFoundMessage } = require('../const');
const validateSignup = require('../middlewares/validators/validateSignup');
const validateSignin = require('../middlewares/validators/validateSignin');

router.post('/signup', validateSignup, signUp);
router.post('/signin', validateSignin, signIn);
router.use(auth);
router.get('/users/me', getMe);
router.use('/articles', articles);
router.use('/', (req, res, next) => { next(new NotFoundError(notFoundMessage)); });

module.exports = router;
