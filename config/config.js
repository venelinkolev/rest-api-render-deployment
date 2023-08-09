const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: process.env.PORT || 5000,
    dbURL:
      'mongodb+srv://venelinkolev:AtlasVenelinKolev83MongoDB@cluster0.41cjroa.mongodb.net/recipes?retryWrites=true&w=majority',
    origin: ['http://localhost:5555', 'http://localhost:4200'],
  },
  production: {
    port: process.env.PORT || 5000,
    dbURL: process.env.DB_URL_CREDENTIALS,
    origin: [],
  },
};

module.exports = config[env];
