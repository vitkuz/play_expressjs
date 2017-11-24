const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cat = require('../schemas/Cat.js');

/* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
    Cat.find(function (err, results) {
        if (err) return next(err);
        res.json(results);
    });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
    Cat.findById(req.params.id, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
    Cat.create(req.body, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
    Cat.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

/* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
    Cat.findByIdAndRemove(req.params.id, req.body, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

module.exports = router;