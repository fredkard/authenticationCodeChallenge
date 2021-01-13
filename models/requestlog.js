'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class requestLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  requestLog.init({
    userid: DataTypes.STRING,
    result_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'requestLog',
  });
  return requestLog;
};