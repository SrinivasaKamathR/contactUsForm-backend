const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const User = sequelize.define("user", {
  enteredName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  enteredEmail: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  enteredPhone: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = User;
