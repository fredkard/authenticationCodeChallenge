'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    user_id: DataTypes.INTEGER,
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      //field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate : DataTypes.NOW,
      //field: 'updated_at',
    },
  }, {
    sequelize,
    modelName: 'users_session26',
  });
  return user;
};
