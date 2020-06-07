const User = require('../models/user');

const getMe = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => { res.send({ data: user }); })
    .catch(next);
};

module.exports = getMe;
