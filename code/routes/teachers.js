var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Teachers = require('../models/Teacher.js');

/* GET /teachers listing. */
router.get('/', function(req, res, next) {
  Teachers.find(function (err, teachers) {
    if (err) return next(err);
    res.json(teachers);
  });
});

/* POST /teachers */
router.post('/', function(req, res, next) {
  Teachers.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /teachers/id */
router.get('/:id', function(req, res, next) {
  Teachers.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /teachers/:id */
router.put('/:id', function(req, res, next) {
  Teachers.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /teachers/:id */
router.delete('/:id', function(req, res, next) {
  Teachers.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
