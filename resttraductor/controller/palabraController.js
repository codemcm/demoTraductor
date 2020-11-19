'use strict';
const Employee = require('../model/palabraModel');
exports.findById = function (req, res) {
    Employee.findById(req.params.name, function (err, employee) {
        if (err) res.send(err); res.json(employee);
    });
};