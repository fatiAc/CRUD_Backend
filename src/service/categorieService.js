let categorie = require('../models/CATEGORIE');

class categorieService {


    static findAll() {
        return categorie.findAll({order: ['NAME']});
    }

    static create(obj) {
        return categorie.create(obj);
    }

    static update(obj) {
        return categorie.update(obj, {where: {ID_CATEGORIE: obj.ID_CATEGORIE}});
    }

    static delete(obj) {
        return categorie.destroy(obj, {where: {ID_CATEGORIE: obj.ID_CATEGORIE}});
    }
}

module.exports = categorieService;
