let express = require('express');
let router = express.Router();
let categorieService = require('../service/categorieService');


router.get('/findAll', function (req, res) {
    categorieService.findAll()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});


router.post('/create', function (req, res) {
    categorieService.create(req.body)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

router.put('/update', function (req, res) {
    categorieService.update(req.body)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

router.delete('/delete', function (req, res) {
    categorieService.delete(req.body)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});


module.exports = router;
