const bcrypt = require('bcryptjs');

const User = require('../models/user');

const signUp = (req, res, next) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({ name, email, password: hash }))
    .then((user) => res.send({ data: user.omitPrivate() }))
    .catch(next);
};

module.exports = signUp;
