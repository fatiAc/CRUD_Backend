/* jshint indent: 2 */
const connexion = require('../../config/dbConnection');
const DataTypes = require('sequelize');

const product = connexion.define('PRODUCT', {
    'ID_PRODUCT': {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    'NAME': {
        type: DataTypes.STRING(),
        allowNull: false,
        comment: "null"
    },
    'DESCRIPTION': {
        type: DataTypes.STRING(),
        allowNull: false,
        comment: "null"
    },
    'DATE_SAISIE': {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "null"
    },
    'QUANTITE': {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "null"
    },
    'ID_CATEGORIE': {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "null",
        references: {
            model: 'CATEGORIE',
            key: 'ID_CATEGORIE'
        }
    }
}, {
    tableName: 'PRODUCT'
});

module.exports = product;
