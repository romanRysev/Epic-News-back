const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/user");
const UnauthorizedError = require("../errors/UnauthorizedError");
const { loginErrorMessage } = require("../const");
const config = require("../config");

const signIn = (req, res, next) => {
  const { email, password, mode } = req.body;

  if (mode == "logout") {
    res.clearCookie("jwt", { path: '/',sameSite: 'none', secure: true }).send({ Message: "Выход из профиля" });
  } else {
    User.findOne({ email })
      .select("+password")
      .then((user) => {
        if (!user) {
          throw new UnauthorizedError(loginErrorMessage);
        }
        return bcrypt
          .compare(password, user.password)
          .then((matched) => {
            if (!matched) {
              throw new UnauthorizedError(loginErrorMessage);
            }
            const token = jwt.sign({ _id: user._id }, config.JWT_SECRET, {
              expiresIn: "7d",
            });
            res
              .cookie("jwt", token, {
                maxAge: 3600000 * 24 * 7,
                httpOnly: true,
                sameSite: 'none',
                secure: true,
              })
              .send({ Message: "OK" });
          })
          .catch(next);
      })
      .catch(next);
  }
};

module.exports = signIn;
