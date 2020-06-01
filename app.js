const express = require('express');
const mongoose = require('mongoose');
const { PORT, DB_ADRESS } = require('./config');
const routes = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

mongoose.connect(DB_ADRESS, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(requestLogger);
app.use(routes);
app.use(errorLogger);

app.listen(PORT, () => {
});
