let express = require('express');
let router = express.Router();

router.use('/product', require('./productController'));
router.use('/categorie', require('./categorieController'));

module.exports = router;
