require('dotenv').config();

module.exports = {
  PORT: 3001,
  DB_ADRESS: (process.env.NODE_ENV === 'production') ? process.env.DB_ADRESS : 'mongodb://localhost:27017/epicnews',
  JWT_SECRET: (process.env.NODE_ENV === 'production') ? process.env.JWT_SECRET : 'JWT_SECRET',
};
