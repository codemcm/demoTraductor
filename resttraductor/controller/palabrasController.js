'use strict';
const Palabras = require('../model/palabrasModel');
exports.findById = function (req, res) {
    Palabras.findById(req.params.name, function (err, palabras) {
        if (err) res.send(err); res.json(palabras);
    });
};

exports.findByKind = function (req, res) {
    Palabras.findByKind(req.params.id, function (err, palabras) {
        if (err) res.send(err); res.json(palabras);
    });
};

exports.findAll = function (req, res) {
    Palabras.findAll(function (err, palabras) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', palabras);
        res.send(palabras);
    });
};