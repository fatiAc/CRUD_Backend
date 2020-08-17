let product = require('../models/PRODUCT');
let dbConnect = require('../../config/dbConnection');
let sequelize = require('sequelize');

class productService {


    static findAll() {
        return product.findAll({order: ['NAME']});
    }

    static findByCritaria(dateMin, dateMax, categrID) {
        let query = `SELECT ID_PRODUCT, product.NAME, categorie.NAME AS CATEGORIE, categorie.ID_CATEGORIE, DESCRIPTION, QUANTITE, FORMAT(DATE_SAISIE, 'yyyy-MM-dd hh:mm tt') AS DATE_SAISIE
                      FROM PRODUCT product LEFT OUTER JOIN CATEGORIE categorie ON product.ID_CATEGORIE = categorie.ID_CATEGORIE WHERE 1 = 1 `;
        query += (dateMin !== 'null' && dateMin !== '') ? ` AND DATE_SAISIE >= '${dateMin}' ` : ``;
        query += (dateMax !== 'null' && dateMax !== '') ? ` AND DATE_SAISIE <= '${dateMax}' ` : ``;
        query += categrID !== 'null' ? ` AND product.ID_CATEGORIE = ${categrID}` : ``;
        query += ` ORDER BY DATE_SAISIE, product.NAME `;
        return dbConnect.query(query, {type: sequelize.QueryTypes.SELECT})
    }

    static create(obj) {
        return product.create(obj);
    }

    static update(obj) {
        return product.update(obj, {where: {ID_PRODUCT: obj.ID_PRODUCT}});
    }

    static delete(obj) {
        return product.destroy({where: obj});
    }
}

module.exports = productService;
