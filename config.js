require('dotenv').config();

module.exports = {
  PORT: 3000,
  DB_ADRESS: 'mongodb://localhost:27017/epicnews',
  JWT_SECRET: (process.env.NODE_ENV === 'production') ? process.env.JWT_SECRET : 'JWT_SECRET',
};
