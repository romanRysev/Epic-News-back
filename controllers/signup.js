const bcrypt = require('bcryptjs');

const User = require('../models/user');

module.exports.signUp = (req, res, next) => {
  const { name,  email, password } = req.body;

  bcrypt.hash(password, 10)
  .then(hash => {User.createUser.create({ name,  email, password: hash })})
  .then(user => res.send({data: user}))
  .catch(next)
}