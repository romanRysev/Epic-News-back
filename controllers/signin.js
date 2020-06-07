const jwt = require('jsonwebtoken');

const User = require('../models/user');
const UnauthorizedError = require('../errors/UnauthorizedError')
const config = require('../config');

module.exports.signIn = () => {
  const { email, password} = req.body;

  User.findOne(email).select('+password')
  .then(user => {
    if(!user) {
      throw new UnauthorizedError('Неправильные почта или пароль');
    }
    return bcrypt.compare(password, user.password)
    .then(matched => {
      if(!matched) {
        throw new UnauthorizedError('Неправильные почта или пароль');
      }
      const token = jwt.sign({ _id: user._id }, config.JWT_SECRET, { expiresIn: '7d' });
      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      })
    .end();
    })
    .catch(next);
})
.catch(next);
};
