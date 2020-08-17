let express = require('express');
let router = express.Router();
let productService = require('../service/productService');


router.get('/findAll', function (req, res) {
    productService.findAll()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

router.get('/findByCritaria/:dateMin/:dateMax/:categrID', function (req, res) {
    productService.findByCritaria(req.params.dateMin, req.params.dateMax, req.params.categrID)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

router.post('/create', function (req, res) {
    productService.create(req.body)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

router.put('/update', function (req, res) {
    productService.update(req.body)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

router.delete('/delete/:productID', function (req, res) {
    productService.delete({ID_PRODUCT: req.params.productID})
        .then(data => {
            res.status(200).send(null);
        })
        .catch(err => {
            console.log(err)
            res.status(401).json(err);
        })
});


module.exports = router;
