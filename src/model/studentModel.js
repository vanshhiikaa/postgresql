const sequelize = require('../../db')
const { DataTypes, Model } = require("sequelize");
  // ----------------------------------------------- schema definitions --------------------------------------
const Student = sequelize.define("Students", {
  name: DataTypes.STRING,
  email : DataTypes.STRING,
  age: DataTypes.INTEGER,
  dob: DataTypes.DATE,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

  
// ---------------------------------------------------- exports ----------------------------------------------------------
module.exports = Student;