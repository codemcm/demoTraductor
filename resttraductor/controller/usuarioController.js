'use strict';
const Usuario = require('../model/usuarioModel');
exports.findAll = function (req, res) {
    Usuario.findAll(function (err, usuario) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', usuario);
        res.send(usuario);
    });
};

exports.iniciaSesion = function (req, res) {
    Usuario.iniciaSesion(req.params.name,req.params.age, function (err, employee) {
        if (err) res.send(err); res.json(employee);
    });
};