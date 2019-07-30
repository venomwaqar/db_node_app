const Sequelize = require('sequelize');

const sequelize = new Sequelize(`${process.env.MYSQL_SCHEMA}`, `${process.env.MYSQL_DB_USER}`, `${process.env.MYSQL_DB_PASSWORD}`, {
  dialect: `${process.env.DB_TYPE}`,
  host: `${process.env.MYSQL_DB_HOST}`
});

module.exports = sequelize;
  
