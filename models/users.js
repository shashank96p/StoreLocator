'use strict';
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require("../models/index")

  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  
 
}
// var Artist = sequelize.define('users', {
//   firstname: DataTypes.STRING,
//   lastname: DataTypes.STRING,
//   username: DataTypes.STRING,
//   password: DataTypes.STRING
// }, {});
  Users.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  },{
    sequelize,
    tableName: 'users',
    modelName: 'Users',
    
  });
  module.exports =Users;

