const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: process.env.PORT || 5000,
    dbURL: process.env.MONGO_URI,
    origin: ['http://localhost:5555', 'http://localhost:4200'],
  },
  production: {
    port: process.env.PORT || 5000,
    dbURL: process.env.MONGO_URI,
    origin: ['http://localhost:4200'],
  },
};

module.exports = config[env];
