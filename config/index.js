// config/index.js

const dbUser = `fitness`;
const dbPassword = `fitness1`;

const MONGODB_URI = `mongodb://${dbUser}:${dbPassword}@ds247637.mlab.com:47637/heroku_8bff610v`;

module.exports = MONGODB_URI;

