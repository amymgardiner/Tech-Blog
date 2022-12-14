const Sequelize = require('sequelize');

// loads environment variables
require('dotenv').config();

// create connection to the database via the local server or heroku
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    });

module.exports = sequelize;
