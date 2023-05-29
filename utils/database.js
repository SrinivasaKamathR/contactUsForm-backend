const Sequelize = require("sequelize");

const sequelize = new Sequelize("contactform", "root", "rootuser", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
