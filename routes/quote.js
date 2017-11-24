const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Quote = require('../schemas/Quote');

/* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
    Quote.find(function (err, results) {
        if (err) return next(err);
        res.json(results);
    });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
    Quote.findById(req.params.id, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
    Quote.create(req.body, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
    Quote.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

/* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
    Quote.findByIdAndRemove(req.params.id, req.body, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

module.exports = router;