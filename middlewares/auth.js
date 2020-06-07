const jwt = require('jsonwebtoken');

const config = require('../config');
const UnauthorizedError = require('../errors/UnauthorizedError.js');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;
  try {
    payload = jwt.verify(token, config.JWT_SECRET);
  } catch (err) {
    const error = new UnauthorizedError('Unauthorized');
    next(error);
  }
  req.user = payload;
  next();
};

module.exports = auth;
