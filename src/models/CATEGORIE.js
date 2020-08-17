/* jshint indent: 2 */

const connexion = require('../../config/dbConnection');
const DataTypes = require('sequelize');

const categoorie = connexion.define('CATEGORIE', {
    'ID_CATEGORIE': {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'NAME': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'CATEGORIE'
  });
module.exports = categoorie;
