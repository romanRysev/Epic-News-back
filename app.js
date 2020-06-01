const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { PORT, DB_ADRESS } = require('./config');
const routes = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const error = require('./middlewares/errors.js');

const app = express();

mongoose.connect(DB_ADRESS, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(requestLogger);
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(error);

app.listen(PORT, () => {
});
